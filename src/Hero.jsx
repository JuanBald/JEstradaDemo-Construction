export default function Hero() {
return(
<div
  id="home"
  className="scroll-mt-24 pt-28 lg:pt-32 min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20"
>

  {/* LEFT SIDE */}
  <div className="flex flex-col bebas">

    <span className="text-black text-5xl md:text-6xl lg:text-6xl font-semibold">
      Where Quality Meets Modern Home Transformation
    </span>

    <div className="mt-5 lg:ml-20 tracking-widest z-30">
      <span className="text-white text-3xl md:text-6xl lg:text-7xl font-semibold bg-[#2d2e2e] px-4 py-2 inline-block leading-tight text-center whitespace-nowrap ">
        Home Vision Construction
      </span>
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="w-full overflow-hidden mt-10 lg:mt-0">

    <img
      src="./src/assets/After4.JPG"
      alt="House"
      className="
        w-full
        h-[300px]
        md:h-[500px]
        lg:h-[800px]
        object-cover
        object-center
        rounded-bl-[8rem]
        lg:rounded-bl-[20rem]
      "
    />

  </div>

</div>
);
}