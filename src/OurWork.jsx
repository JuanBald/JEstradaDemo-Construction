export default function OurWork() {
  return (
    <div id="work" className="w-full bg-white py-16">
      
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid place-items-center gap-6">

          {/* Title */}
          <span className="bg-[#2d2e2e] text-white text-center px-10 py-3 text-4xl">
            Our Work
          </span>

          {/* Labels */}
          <div className="grid grid-cols-2 gap-10 w-full text-center">
            <span className="text-[#A10702] text-4xl underline">Before</span>
            <span className="text-[#A10702] text-4xl underline">After</span>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-5 w-full  lg:-mr-60">

            <img className="w-full max-w-sm" src="./src/assets/Before1.JPG" />
            <img className="w-full max-w-sm" src="./src/assets/After1.JPG" />

            <img className="w-full max-w-sm" src="./src/assets/Before2.JPG" />
            <img className="w-full max-w-sm" src="./src/assets/After2.JPG" />

            <img className="w-full max-w-sm" src="./src/assets/Before3.JPG" />
            <img className="w-full max-w-sm" src="./src/assets/After3.JPG" />

            <img className="w-full max-w-sm" src="./src/assets/Before4.JPG" />
            <img className="w-full max-w-sm" src="./src/assets/After4.JPG" />

            <img className="w-full max-w-sm" src="./src/assets/Before5.JPG" />
            <img className="w-full max-w-sm" src="./src/assets/After5.JPG" />

            <img className="w-full max-w-sm" src="./src/assets/Before6.JPG" />
            <img className="w-full max-w-sm" src="./src/assets/After6.JPG" />

          </div>

        </div>
      </div>
    </div>
  );
}