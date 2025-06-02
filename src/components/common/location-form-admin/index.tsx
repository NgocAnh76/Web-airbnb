'use client';

import { locationValidationSchema } from '@/components/common/schemaValidation';
import { addLocation, updateLocation } from '@/configs/api/location';
import { LocationForms } from '@/helper/type/location';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { DATA_ADD_LOCATION } from '@/components/atoms/input/data.input';
import { InputField } from '@/components/atoms/input';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Image from 'next/image';

interface UserFormProps {
  mode: 'add' | 'edit';
  locationId?: number;
  initialData?: LocationForms;
}

const LocationFormAdmin = ({
  mode,
  locationId,
  initialData,
}: UserFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>(
    initialData?.image_location || '',
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    formik.handleChange(e);
  };

  const formik = useFormik({
    initialValues: {
      name_location: initialData?.name_location || '',
      province: initialData?.province || '',
      image_location: initialData?.image_location || '',
      nation: initialData?.nation || '',
    },
    validationSchema: locationValidationSchema,
    onSubmit: async (values) => {
      console.log(values);

      setIsLoading(true);
      try {
        const formData = {
          name_location: values.name_location,
          province: values.province,
          image_location: String(values.image_location),
          nation: Number(values.nation),
        };

        if (mode === 'add') {
          await addLocation(formData);
          toast.success('Location created successfully');
        } else if (mode === 'edit' && locationId) {
          await updateLocation(formData, locationId);
          toast.success('Location updated successfully');
        }

        router.push('/admin/location-management');
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error('Failed to add or update location');
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div className="container mx-auto p-10">
      <h1 className="mb-8 text-2xl font-semibold text-gray-800">
        {mode === 'add' ? 'Add New Location' : 'Edit Location'}
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1">
            {DATA_ADD_LOCATION.map(({ placeholder, name, type }) => {
              const value = formik.values[name as keyof typeof formik.values];
              const error = formik.errors[name as keyof typeof formik.errors];
              const touched =
                formik.touched[name as keyof typeof formik.touched];
              return (
                <div key={name} className="relative mb-3">
                  {name === 'image_location' ? (
                    <div className="flex items-start gap-4">
                      <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-gray-200">
                        {imagePreview ? (
                          <Image
                            src={imagePreview}
                            alt="location preview"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <InputField
                          label={placeholder}
                          name={name}
                          placeholder={placeholder}
                          value={String(value || '')}
                          type="file"
                          onChange={handleImageChange}
                          onBlur={formik.handleBlur}
                          error={error as string}
                          touched={touched as boolean}
                          className="bg-gray-50"
                          accept="image/*"
                        />
                      </div>
                    </div>
                  ) : (
                    <InputField
                      label={placeholder}
                      name={name}
                      placeholder={placeholder}
                      value={String(value || '')}
                      type={type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={error as string}
                      touched={touched as boolean}
                      className="bg-gray-50"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className={twMerge(
              'smooth-hover flex-box w-32 rounded-lg border-2 border-primary py-3',
              'text-sm font-medium text-primary hover:bg-primary hover:text-white',
            )}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className={twMerge(
              'smooth-hover flex-box w-32 rounded-lg bg-primary py-3',
              'text-sm font-medium text-white hover:bg-secondary',
              isLoading && 'cursor-not-allowed opacity-50',
            )}
          >
            {isLoading
              ? 'Processing...'
              : mode === 'add'
                ? 'Add Location'
                : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocationFormAdmin;
