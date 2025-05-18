import { twMerge } from 'tailwind-merge';

const AdminDashboard = () => {
  const DATA_DASHBOARD = [
    {
      id: 1,
      title: '250K',
      title_small: 'Users on the platform',
      description: 'Vel labore deleniti veniam consequuntur sunt nobis.',
    },
    {
      id: 2,
      title: '$8.9 billion',
      title_small:
        'We’re proud that our customers have made over $8 billion in total revenue.',
      description:
        'Eu duis porta aliquam ornare. Elementum eget magna egestas.',
    },
    {
      id: 3,
      title: '401,093',
      title_small: 'Transactions this year',
      description:
        'Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="p-5">
          <div className="mt-5 mb-10 lg:mt-10 lg:mb-40">
            <h1 className="text-black">Dashboard Admin</h1>
            <p>
              The control panel helps you manage all activities in a simple way.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-7 px-5 lg:grid-cols-3 lg:items-end">
              {DATA_DASHBOARD.map((item) => (
                <div
                  key={item.id}
                  className={twMerge(
                    'flex flex-col justify-between rounded-lg bg-white p-5 shadow-md',
                    item.id === 1 && 'bg-blue-1 h-48',
                    item.id === 2 && 'bg-blue-3 h-72',
                    item.id === 3 && 'h-60 bg-indigo-600',
                  )}
                >
                  <h2
                    className={twMerge(
                      (item.id === 2 || item.id === 3) && 'text-white',
                    )}
                  >
                    {item.title}
                  </h2>
                  <div>
                    <h3
                      className={twMerge(
                        'text-black',
                        (item.id === 2 || item.id === 3) && 'text-white',
                      )}
                    >
                      {item.title_small}
                    </h3>
                    <p
                      className={twMerge(
                        (item.id === 2 || item.id === 3) && 'text-white',
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
