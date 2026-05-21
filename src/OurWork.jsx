import before1 from './assets/Before1.JPG';
import after1 from "./assets/After1.JPG";

import before2 from "./assets/Before2.JPG";
import after2 from "./assets/After2.JPG";

import before3 from "./assets/Before3.JPG";
import after3 from "./assets/After3.JPG";

import before4 from "./assets/Before4.JPG";
import after4 from "./assets/After4.JPG";

import before5 from "./assets/Before5.jpg";
import after5 from "./assets/After5.jpg";

import before6 from "./assets/Before6.jpg";
import after6 from "./assets/After6.jpg";

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
          <div className="grid grid-cols-2 gap-10 w-full max-w-4xl text-center">
            <span className="text-[#A10702] text-4xl underline">
              Before
            </span>

            <span className="text-[#A10702] text-4xl underline">
              After
            </span>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">

            <img className="w-full max-w-sm mx-auto" src={before1} alt="Before 1" />
            <img className="w-full max-w-sm mx-auto" src={after1} alt="After 1" />

            <img className="w-full max-w-sm mx-auto" src={before2} alt="Before 2" />
            <img className="w-full max-w-sm mx-auto" src={after2} alt="After 2" />

            <img className="w-full max-w-sm mx-auto" src={before3} alt="Before 3" />
            <img className="w-full max-w-sm mx-auto" src={after3} alt="After 3" />

            <img className="w-full max-w-sm mx-auto" src={before4} alt="Before 4" />
            <img className="w-full max-w-sm mx-auto" src={after4} alt="After 4" />

            <img className="w-full max-w-sm mx-auto" src={before5} alt="Before 5" />
            <img className="w-full max-w-sm mx-auto" src={after5} alt="After 5" />

            <img className="w-full max-w-sm mx-auto" src={before6} alt="Before 6" />
            <img className="w-full max-w-sm mx-auto" src={after6} alt="After 6" />

          </div>

        </div>

      </div>

    </div>
  );
}