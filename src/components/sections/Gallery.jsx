import Eyebrow from '../ui/Eyebrow'
import PhoneGallery1 from '../phones/PhoneGallery1'
import PhoneGallery2 from '../phones/PhoneGallery2'
import PhoneGallery3 from '../phones/PhoneGallery3'

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-[120px] px-4 sm:px-6 md:px-12 lg:px-[60px] relative overflow-hidden">
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_65%)]" />
      <div className="absolute bottom-[10%] left-[5%]  w-[400px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.08)_0%,transparent_65%)]" />
      <div className="text-center mb-14 md:mb-20">
        <Eyebrow className="reveal">모든 기기에서</Eyebrow>
        <h2 className="reveal reveal-d1 text-[clamp(30px,6vw,56px)] font-black tracking-[-1px] sm:tracking-[-1.5px] leading-[1.1] mt-4 mb-4 text-[#f0efff]">
          어디서든 <span className="g-text">완벽하게</span>
        </h2>
        <p className="reveal reveal-d2 text-[15px] sm:text-[17px] text-[rgba(240,239,255,0.45)] max-w-[420px] mx-auto leading-[1.75] break-keep">
          어떤 상황에서도 NOVA는 당신 곁에 있습니다.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-14 lg:gap-10 relative z-[2] [perspective:1400px] [transform-style:preserve-3d]">
        <PhoneGallery1 />
        <PhoneGallery2 />
        <PhoneGallery3 />
      </div>
    </section>
  )
}
