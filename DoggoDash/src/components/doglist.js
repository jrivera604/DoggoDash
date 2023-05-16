

export default function DogList({ dogs }) {
  const calculateAge = (birthday) => { 
    let dob = new Date(birthday)
    let ageDifMs = Date.now() - dob.getTime();
    let ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
  return (
    <>
      <ul role="list" class="divide-y divide-gray-100">
        {dogs.map((dog) => {
          return (
            <li class="flex justify-between gap-x-6 py-5">
              <div class="flex gap-x-4">
                <img
                  class="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                    {dog.name}
                  </p>
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                    {calculateAge(dog.yearOfBirth)} years old
                  </p>
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                    {dog.weight} lbs
                  </p>
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                     {dog.breed}
                  </p>
                </div>
              </div>
              
            </li>
          );
        })}
        ;
      </ul>
    </>
  );
}
