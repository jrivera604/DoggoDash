import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useRouter } from "next/router";
import ProfileCalendar from "@/src/components/profileCalendar";


const profile = {
  href: "#",

  images: [
    {
      src: "https://images.unsplash.com/photo-1594283255808-ee728c775ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://images.unsplash.com/photo-1587207405587-9b5047cb3c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nzl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://images.unsplash.com/photo-1588618215037-229aa2c1bd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://images.unsplash.com/photo-1587044888697-5596206bf063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Model wearing plain white basic tee.",
    },
  ],
 
  description:
    "I have been around dogs for virtually my entire life. I love them, and they love me. I am caring and respectful of the dogs, and I understand their needs and desires. I am firm with them when needed, but never harsh or cruel. When your dogs spend time with me, they will be sure to get all the attention and exercise they need, and they will soon look forward to our further adventures together. As well, I am always happy to refer regularly with you to keep you up to date with what your dogs and I are doing, whether that's going for walks in the park, playing games, or just relaxing. I am prompt and reliable, as well as approachable and professional. I look forward to hearing from you.",
  additionalSkills: [
    "Oral Medication Administration",
    "Can provide daily exercise",
    "Senior Dog Experience",
  ],
  details: [
    "Lives in an Apartment",
    "Non-Smoking Household",
    "No Children Present",
    "Does Not Have a Yard",
    "Has No Dogs",
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DogSitterProfile({ filteredCity }) {
  const [dogSitters, setDogSitters] = useState([]);

  const searchDogSitters = async (city) => {
    let response;
    if (city) {
      response = await axios.get(`/api/searchSitters?city=${city}`);
    } else {
      response = await axios.get(`/api/searchSitters`);
    }
    setDogSitters(response.data);
  };

  useEffect(() => {
    // Fetch dog sitters based on the filtered city
    searchDogSitters(filteredCity);
  }, [filteredCity]);

  const router = useRouter();

  const handleReplace = () => {
    router.replace("/messages");
  };



  return (
    <div className="bg-white">
    
      {dogSitters.map((dogSitter) => (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={profile.images[0].src}
                alt={profile.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={profile.images[1].src}
                  alt={profile.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={profile.images[2].src}
                alt={profile.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div> */}
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={profile.images[3].src}
                alt={profile.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* profile info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {dogSitter.firstName} {dogSitter.lastName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">profile information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                Rate: ${dogSitter.rate}/night
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
              
              <ProfileCalendar/>
              
              <button
                onClick={handleReplace}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Contact
              </button>
              
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {profile.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Additional Skills
                </h3>

                <div>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {profile.additionalSkills.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    About {dogSitter.firstName}'s Home
                  </h2>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {profile.details.map((detail) => (
                        <li key={detail} className="text-gray-400">
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
