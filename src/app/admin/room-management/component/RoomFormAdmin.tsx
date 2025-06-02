'use client';
import { InputField } from '@/components/atoms/input';
import { DATA_ADD_ROOM } from '@/components/atoms/input/data.input';
import { roomValidationSchema } from '@/components/common/schemaValidation';
import { getLocation } from '@/configs/api/location';
import { addRoom, updateRoom } from '@/configs/api/room';
import { LocationInfo } from '@/helper/type/location';
import { RoomForms } from '@/helper/type/room';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

interface RoomFormAdminProps {
  mode: 'add' | 'edit';
  roomId?: number;
  initialData?: RoomForms;
}

const RoomFormAdmin = ({ mode, roomId, initialData }: RoomFormAdminProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      room_id: initialData?.room_id || 0,
      room_name: initialData?.room_name || '',
      living_room: initialData?.living_room || '',
      bedroom: initialData?.bedroom || '',
      bed: initialData?.bed || '',
      bathroom: initialData?.bathroom || '',
      description: initialData?.description || '',
      price: initialData?.price || 0,
      washing_machine: initialData?.washing_machine || false,
      iron: initialData?.iron || false,
      television: initialData?.television || false,
      air_conditioner: initialData?.air_conditioner || false,
      wifi: initialData?.wifi || false,
      kitchen: initialData?.kitchen || false,
      parking: initialData?.parking || false,
      pool: initialData?.pool || false,
      image: initialData?.image || '',
      location_id: Number(initialData?.location_id) || 0,
      address: initialData?.address || '',
    },
    validationSchema: roomValidationSchema,
    onSubmit: async (values) => {
      console.log(values);

      setIsLoading(true);

      try {
        const formData = {
          room_name: values.room_name,
          living_room: values.living_room,
          bedroom: values.bedroom,
          bed: values.bed,
          bathroom: values.bathroom,
          description: values.description,
          price: values.price,
          washing_machine: values.washing_machine,
          iron: values.iron,
          television: values.television,
          air_conditioner: values.air_conditioner,
          wifi: values.wifi,
          kitchen: values.kitchen,
          parking: values.parking,
          pool: values.pool,
          image: values.image,
          location_id: Number(values.location_id) || 0,
          address: values.address,
        } as RoomForms;

        if (mode === 'add') {
          await addRoom(formData);
          toast.success('Room created successfully');
        } else if (mode === 'edit' && roomId) {
          await updateRoom(formData, roomId);
          toast.success('Room updated successfully');
        }

        router.push('/admin/room-management');
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error('Failed to add or update room');
      } finally {
        setIsLoading(false);
      }
    },
  });

  const renderInputCheckbox = (
    placeholder: string,
    name: string,
    type?: string,
  ) => {
    return (
      <div>
        <div className="relative mb-3 flex w-3/5 items-center justify-between md:w-2/5">
          <label
            htmlFor={name}
            className="text-sm font-medium text-black lg:text-base"
          >
            {placeholder}
          </label>
          <div>
            <div
              className="flex cursor-pointer items-center justify-center "
              onClick={() => {
                formik.setFieldValue(
                  name,
                  !formik.values[name as keyof typeof formik.values],
                );
              }}
            >
              {formik.values[name as keyof typeof formik.values] ? (
                <IoCheckmarkSharp className="rounded-lg border border-green-500 p-2 text-4xl text-green-500" />
              ) : (
                <IoCloseSharp className="rounded-lg border border-red-500 p-2 text-4xl text-red-500" />
              )}
            </div>
            <input
              type="checkbox"
              name={name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={Boolean(
                formik.values[name as keyof typeof formik.values],
              )}
              className="hidden"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderSelectOptions = (name: string) => {
    const { data: locations } = useQuery({
      queryKey: ['locations'],
      queryFn: () => getLocation(),
    });

    return (
      <select
        name={name}
        id={name}
        value={String(formik.values[name as keyof typeof formik.values])}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full rounded-lg border border-primary/50 bg-white p-3 text-sm text-dark shadow-md outline-none focus:border-none focus:ring-2 focus:ring-primary/50 md:mt-5 md:p-4"
      >
        <option value="">Select location</option>
        {locations?.map((location: LocationInfo) => (
          <option key={location.location_id} value={location.location_id}>
            {location.name_location}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="mb-8 text-2xl font-semibold text-gray-800">
        {mode === 'add' ? 'Add New Room' : 'Edit Room'}
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {DATA_ADD_ROOM.map(({ placeholder, name, type }) => {
            const value = formik.values[name as keyof typeof formik.values];
            const error = formik.errors[name as keyof typeof formik.errors];
            const touched = formik.touched[name as keyof typeof formik.touched];
            return (
              <div key={name} className="relative mb-3">
                {type === 'select' ? (
                  <div>
                    <label className="text-sm font-medium text-black lg:text-base">
                      {placeholder}
                    </label>
                    {renderSelectOptions(name)}
                    {error && touched && (
                      <div className="mt-1 text-sm text-red-500">
                        {error as string}
                      </div>
                    )}
                  </div>
                ) : type === 'checkbox' ? (
                  renderInputCheckbox(placeholder, name, type)
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
                    min={type === 'number' ? 0 : undefined}
                  />
                )}
              </div>
            );
          })}
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
                ? 'Add Room'
                : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomFormAdmin;
