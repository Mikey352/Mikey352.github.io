import React from "react";
import cheetahImg from "./cheetah.jpeg";
function Cheetah() {
  return (
    <section>
      <h2> 🐆 Cheetah 🐆 </h2>
      <h2> Tito </h2>
      <img
        src={cheetahImg}
        alt="Cheetah"
        style={{ width: "500px", height: "300px" }}
      />
      <p>
        Say hello to Tito, our 4 year old male cheetah. The cheetah, with its
        sleek golden coat adorned by black spots and distinctive tear-streak
        markings, is renowned as the fastest land animal, reaching speeds up to
        70 mph. Inhabiting African plains and Iranian deserts, it hunts agile
        prey like antelopes. Solitary by nature, it forms transient coalitions
        for survival. Threatened by habitat loss and human conflict,
        conservation efforts strive to protect its dwindling numbers. The
        cheetah's grace, speed, and resilience make it an emblem of natural
        beauty and the urgent need for conservation, embodying the delicate
        balance between human development and wildlife preservation.
      </p>
    </section>
  );
}

export default Cheetah;
