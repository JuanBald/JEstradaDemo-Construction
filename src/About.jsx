export default function About() {
  return (
   <div id="about" className="w-full bg-[#f8f8f8] py-10 scroll-mt-24">
  <div className="max-w-7xl mx-auto lg:mt-10">



    <div className="grid lg:grid-cols-2 grid-cols-1 text-left px-10 ">
       <div className="sm:grid sm:grid-cols-1 sm:gap-2 sm:text-center">
        <span className="bg-[#2d2e2e] text-white px-6 py-2 text-6xl h-20 bebas w-full sm:w-fit sm:mx-auto tracking-wide">About Us</span>
        
<p className="text-[#F44708] lg:mt-10 p-3 border-2 rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.50)]">
  <span className="font-bold">J Estrada Demo & Construction</span> was founded with a simple goal: to provide homeowners and clients with a better <span className="font-bold">construction and demolition experience</span>. No unnecessary complications, no added stress — just <span className="font-bold">honest service</span>, <span className="font-bold">dependable workmanship</span>, and <span className="font-bold">quality results</span> delivered by a team that truly cares about every project.
    Our mission is to build lasting relationships through <span className="font-bold">exceptional craftsmanship</span>, <span className="font-bold">strong communication</span>, and a <span className="font-bold">customer-first approach</span>. We strive to create an experience centered around <span className="font-bold">trust</span>, <span className="font-bold">reliability</span>, and attention to detail, turning first-time clients into lifelong supporters.
    Backed by dedication, experience, and a passion for what we do, our team approaches every project with <span className="font-bold">professionalism and care</span>. From the first conversation to project completion, our goal is to deliver results that <span className="font-bold">exceed expectations</span> and leave a lasting impression.
</p>
       </div>
    <div className="py-10 lg:px-40 flex justify-center">
    <img src="./src/assets/Working.JPG" alt="" className="w-[90%] lg:w-200 lg:scale-130 md:scale-100" />

    </div>

    </div>
    

  </div>
</div>
  );
}