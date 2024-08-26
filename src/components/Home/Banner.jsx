import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] my-8 rounded">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-4 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
  7     </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide6" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space7y-4 mt-8 ">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full" />
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banner6} className="w-full" />
        <div className="absolute top-0 left-0 h-full flex items-center  pl-8 bg-gradient-to-r from-[#151515] to-[rgb(226 232 240)]">
          <div className="text-white md:w-1/3 space-y-7 mt-8 p-8">
            <h2 className="text-5xl font-bold">
              Affordable Price for Car Servicing
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              praesentium suscipit. Cumque, laborum alias voluptate quibusdam
              odit dolor. Vero, praesentium.
            </p>
            <div>
              <button className="btn btn-secondary mr-4">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide5" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
