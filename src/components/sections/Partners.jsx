const PARTNER_LOGOS = ['SAMSUNG', 'KAKAO', 'NAVER', 'LG CNS', 'HYUNDAI', 'KRAFTON', 'COUPANG', 'KAKAOBANK']

export default function Partners({ marqueeRef }) {
  return (
    <section className="py-10 border-t border-b border-white/[0.05] overflow-hidden">
      <p className="text-center mb-7 px-6 text-xs text-[rgba(240,239,255,0.3)] tracking-[1.5px] uppercase font-['Space_Grotesk']">
        전 세계 선도 기업들이 선택한 NOVA
      </p>
      <div className="overflow-hidden">
        <div ref={marqueeRef} className="flex items-center w-max">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="opacity-30 font-['Space_Grotesk'] font-bold text-sm sm:text-base tracking-[2px] whitespace-nowrap">{name}</span>
              <span className="mx-10 sm:mx-14 opacity-15 text-white select-none">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
