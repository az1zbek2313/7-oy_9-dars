import Image from "next/image";
import hero1 from "../../public/image/hero1.webp";
import hero2 from "../../public/image/hero2.webp";
import hero3 from "../../public/image/hero3.webp";
import hero4 from "../../public/image/hero4.webp";
import card1 from "../../public/image/card1.webp";
import card2 from "../../public/image/card2.webp";
import card3 from "../../public/image/card3.jpeg";

export default function Home() {
  
  return (
    <main className="main main--container">
      <div className="grid mt-20 lg:grid-cols-2 gap-24 items-center">
        <div className="hero">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <a className="btn btn-primary btn-products" href="/products">
              Our Products
            </a>
          </div>
        </div>
        <div className="carousel-div">
        <div className="CAROUSEL h-[28rem] lg:carousel flex carousel-center p-4 space-x-4 bg-neutral rounded-box ">
          <div className="carousel-item">
            <Image
            alt="image"
              src={hero1}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
          <div className="carousel-item">
            <Image
            alt="image"
              src={hero2}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
          <div className="carousel-item">
            <Image
            alt="image"
              src={hero3}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
          <div className="carousel-item">
            <Image
            alt="image"
              src={hero4}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
        </div>
        </div>
      </div>

      <h2 className="main--title text-3xl font-medium tracking-wider capitalize">Featured Products</h2>
      <div className="card-wrapper flex justify-between">
      <a href="about1">
      <div
      className="cards"
    >
      <Image
        src={card1}
        alt="avant-garde lamp"
        className="rounded-xl w-full object-cover card-image"
      ></Image>
      <div className="card-body items-center text-center mt-4">
        <h2
          className="card-title capitalize tracking-wide tracking"
        >
          Avant-Garde Lamp
        </h2>
        <span className="text-secondary textTrack">$179.99</span>
      </div>
    </div>
      </a>
      <a href="about2">
      <div
      className="cards"
    >
      <Image
        src={card2}
        alt="avant-garde lamp"
        className="rounded-xl h-64 w-full object-cover card-image"
      ></Image>
      <div className="card-body items-center text-center mt-4">
        <h2
          className="card-title capitalize tracking-wide tracking"
        >
          Cofee Table
        </h2>
        <span className="text-secondary textTrack">$179.99</span>
      </div>
    </div>
      </a>
      <a href="about3">
      <div
      className="cards"
    >
      <Image
        src={card3}
        alt="avant-garde lamp"
        className="rounded-xl h-64 w-full object-cover card-image"
      ></Image>
      <div className="card-body items-center text-center mt-4">
        <h2
          className="card-title capitalize tracking-wide tracking"
        >
          Comfy Bed
        </h2>
        <span className="text-secondary textTrack">$129.99</span>
      </div>
    </div>
      </a>
      </div>
    </main>

    
  );
}
