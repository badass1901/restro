import React from "react";

import "./styles/Carosel.css";

function Carosel() {
  return (
    <div class="d-flex justify-content-center">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
          <ol class="carousel-indicators">
      <li data-target="#id1" data-slide-to="0" class="active"></li>
      <li data-target="#id2" data-slide-to="1"></li>
      <li data-target="#id3" data-slide-to="2"></li>
    </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.istockphoto.com/photos/piece-of-cheesecake-with-fresh-berries-and-coffee-picture-id480839209?k=20&m=480839209&s=612x612&w=0&h=_91SP2NwbL4SotbLgrzLpvgHziBJJMsnKVnXQVjl2GU="
              class="d-block w-100"
              alt="..."
              id="id1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.istockphoto.com/photos/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl-with-bread-picture-id968309678?k=20&m=968309678&s=612x612&w=0&h=MtVF00CxgNE6loAOGdB4BaTynG_QhUFNar5v0hWXfsA="
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.istockphoto.com/photos/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-picture-id835271096?k=20&m=835271096&s=612x612&w=0&h=slpW4QOVnDLlv6ayevlxwtcOIKCjTvOwxe7BZBOMmvc="
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carosel;
