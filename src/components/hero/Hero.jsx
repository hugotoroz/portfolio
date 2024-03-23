import React from "react";
import { getImageUrl } from "../../utils";
function Hero() {
  return (
    <section>
      <div>
        <h1>Hugo Toro Zúñiga</h1>
        <p>Full Stack Developer</p>
        <img src={getImageUrl("hero/myPhoto.webp")} alt="" />
      </div>
    </section>
  );
}

export default Hero;
