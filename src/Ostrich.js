import React from "react";
import OstrichImg from "./Ostrich.jpeg";

function Ostrich() {
  return (
    <section>
      <h2> 🐦 Ostrich 🐦 </h2>
      <h2>Gabriel</h2>
      <img
        src={OstrichImg}
        alt="Ostrich"
        style={{ width: "700px", height: "500px" }}
      />
      <p>
        Say hello to Gabriel, our 1 year old male Ostrich. The ostrich (Struthio
        camelus) is the largest and heaviest bird species, characterized by its
        long neck, powerful legs, and distinctive inability to fly. Native to
        Africa, ostriches inhabit arid savannas and desert regions. They are
        renowned for their incredible running speed, reaching up to 70
        kilometers per hour, making them the fastest land birds. Ostriches have
        unique adaptions, such as two-toed feet and large eyes, enabling them to
        detect predators. Social animals, they live in groups called flocks,
        typically led by a dominant male. Valued for their meat, feathers, and
        leather, ostriches are farmed worldwide, contributing to various
        industries.
      </p>
    </section>
  );
}

export default Ostrich;
