// Bear.js
import React from "react";
import elephantImg from "./elephant.jpeg";
function Elephant() {
  return (
    <section>
      <h2> 🐘 Elephant 🐘 </h2>
      <h2> Michael </h2>
      <img
        src={elephantImg}
        alt="Elephant"
        style={{ width: "300px", height: "300px" }}
      />
      <p>
        Say hello to Michael, our 3 year old male elephant. Elephants are
        majestic mammals known for their immense size, remarkable intelligence,
        and gentle demeanor. Belonging to the family Elephantidae, they are the
        largest land animals on Earth, characterized by their long trunks, large
        ears, and distinct tusks. Elephants are highly social creatures, living
        in tight-knit family groups led by a matriarch. They inhabit diverse
        habitats, from dense forests to open savannas, primarily in Africa and
        Asia. With a lifespan of up to 70 years, elephants play a crucial role
        in their ecosystems as seed dispersers and habitat modifiers.
        Unfortunately, they face threats such as habitat loss and poaching,
        endangering their survival. They are also often hunted for their tusks,
        which sell for lots of money.
      </p>
    </section>
  );
}

export default Elephant;
