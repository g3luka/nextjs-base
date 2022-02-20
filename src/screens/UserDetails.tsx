import Image from "next/image";

export interface IUserDetails {
  user: { [key: string]: any }
}

export default function UserDetails({ user }: IUserDetails) {
  return (
    <div>
      <div className="pb-1 sm:pb-6">
        <div>
          <div className="relative h-40 sm:h-56 bg-indigo-900">
            <Image
              layout="fill"
              src={user.image}
              alt={user.name}
              className="absolute h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
            <div className="sm:flex-1">
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">{ user.name }</h3>
                </div>
                <p className="text-sm text-gray-500">{user.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
        <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Permissão</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.role}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Plano</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.plan}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Gateway</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.gateway}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
