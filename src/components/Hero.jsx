import React from "react";

const Hero = () => {
  return (
    <div class="flex h-[calc(75vh-64px)] justify-center items-center flex-col">
      <div class="w-full h-screen bg-hero-pattern bg-cover bg-center">
        <div
          class="w-full h-full flex  justify-center items-center 
             bg-blue-900/30 backdrop-brightness-75"
        >
          <div className="text-center w-1/3 space-y-8">
            <h2 className="font-bold text-6xl text-white opacity-100">
              Taste Our Delicious Best Foods
            </h2>
            <p className="text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humou.
            </p>
            <div className="form-control text-center">
              <div className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered bg-white"
                />
                <button className="btn btn-square border-0 bg-m-bg text-m-text w-32 hover:bg-m-text hover:text-m-bg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
