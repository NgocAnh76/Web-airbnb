import { DATA_MENU_ADMIN } from '@/components/common/header/data-header';
import Link from 'next/link';
import { FaRegEye } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import './user-management.css';
import ActionButtons from '@/components/atoms/buttons';
const UserManagementPage = () => {
  const DATA_USER = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '081234567890',
      birthDate: '2021-01-01',
      gender: 'Male',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '081234567890',
      birthDate: '2021-01-01',
      gender: 'Female',
      role: 'User',
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '081234567890',
      birthDate: '2021-01-01',
      gender: 'Male',
      role: 'Admin',
    },
  ];
  return (
    <div>
      <div className="container mx-auto">
        <div className="scrollbar w-full overflow-x-scroll px-5 pt-10 md:overflow-auto lg:w-4/5">
          <table className="w-full text-black">
            <thead>
              <tr className="text-sm lg:text-base">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birth Date</th>
                <th>Gender</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {DATA_USER.map((user) => (
                <tr key={user.id} className="text-sm">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                  <td>
                    <ActionButtons
                      id={user.id}
                      basePath="/admin/user-management"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
