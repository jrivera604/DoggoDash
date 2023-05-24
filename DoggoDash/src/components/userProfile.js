import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function UserProfile({ userProfiles }) {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useUser();
  const router = useRouter();
  const findCurrentUser = async () => {
    for (const userProfile of userProfiles) {
      if (userProfile.email === user.email) {
        setCurrentUser(userProfile);
      }
    }
  };

  useEffect(() => {
    console.log(user);
    findCurrentUser();
  }, []);

  const handleReplace = () => {
    router.replace("/updateUserProfile");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="border border-gray-500 rounded-lg p-6 w-1/3 mx-auto">
        <div className="mt-6">
          <h1 className="text-base font-semibold text-gray-900">
            User Profile
          </h1>
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                First name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.firstName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Last Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.lastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                User Type
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.userType}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Street Address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.streetAddress}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                City
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.city}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Postal Code
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.postalCode}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Province
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.province}
              </dd>
            </div>
            <button className= "w-1/3" onClick={handleReplace}>Update</button>
          </dl>
        </div>
      </div>
    </div>
  );
}
