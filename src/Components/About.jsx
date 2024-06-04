import React from "react";

import Bgimage from "./Bgimage";

const About = () => {
  return (
    <div className="w-full h-screen">
      <p className="text-center font-semibold mt-24 px-56  py-8">
        PetBuddy is a web application built with ReactJS that aims to connect
        loving adopters with wonderful rescue animals. <br />This user-friendly
        platform streamlines the pet adoption process, making it easier than
        ever to find your perfect furry companion.
      </p>
      <p className="text-center font-semibold px-56  py-8">
        Key Features: Searchable Pet Database: Browse a comprehensive database
        of adoptable animals from various shelters and rescue organizations.
        Filter by species, breed, age, and other criteria to find your ideal
        match. Detailed Pet Profiles: Each pet profile showcases captivating
        photos, personality descriptions, and any special needs the animal may
        have. This transparency allows you to make an informed decision about
        adoption. Seamless Adoption Process: Initiate contact with shelters or
        rescues directly through the PetBuddy platform. The app simplifies
        communication and streamlines the adoption application process. Success
        Stories Section: Find inspiration and heartwarming stories of successful
        adoptions. This section fosters a sense of community and reinforces the
        positive impact of pet rescue.
      </p>
    </div>
  );
};

export default About;
