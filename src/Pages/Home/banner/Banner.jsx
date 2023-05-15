import img1 from "../../../assets/images/homeCarousel/1.jpg";
import img2 from "../../../assets/images/homeCarousel/2.jpg";
import img3 from "../../../assets/images/homeCarousel/3.jpg";
import img4 from "../../../assets/images/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl"/>
        <div className="absolute flex items-center gap-5 pl-10 h-full bg-gradient-to-r from-[#151515] to-[(21, 21, 21, 0)]">
          <div className="text-white lg:space-y-7 w-1/2">
            <h2 className="text-6xl font-semibold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
            <button className="btn btn-error text-white mr-4">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center gap-5 pl-10 h-full bg-gradient-to-r from-[#151515] to-[(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-semibold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
            <button className="btn btn-error text-white mr-4">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center gap-5 pl-10 h-full bg-gradient-to-r from-[#151515] to-[(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-semibold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
            <button className="btn btn-error text-white mr-4">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center gap-5 pl-10 h-full bg-gradient-to-r from-[#151515] to-[(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2">
            <h2 className="text-6xl font-semibold">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
            <button className="btn btn-error text-white mr-4">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-red-500 border-0"
          ></a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-red-500 border-0"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
