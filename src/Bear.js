// Bear.js
import React from "react";
import bearImg from "./bear.jpg";
function Bear() {
  return (
    <section>
      <h2>🐻 Bear 🐻 </h2>
      <h2>Bibo!! </h2>
      <img
        src={bearImg}
        alt="Bear"
        style={{ width: "700px", height: "500px" }}
      />
      <p>
        Say hello to Bibo, our 10 year old Bear! Bears are large mammals
        belonging to the Ursidae family, known for their robust build, thick
        fur, and powerful claws. Found across various habitats worldwide,
        including forests, mountains, and Arctic tundra, bears exhibit diverse
        species, including the polar bear, grizzly bear, and black bear. These
        omnivores possess a keen sense of smell and are adept at foraging for a
        wide range of foods, including berries, fish, and small mammals. With
        distinct behaviors such as hibernation and maternal care, bears play
        essential roles in ecosystem dynamics. However, they face threats from
        habitat loss, human-wildlife conflict, and illegal poaching. This why it
        is crucial to preserve this creature.
      </p>
    </section>
  );
}

export default Bear;
