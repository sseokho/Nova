const PARTNER_LOGOS = ['SAMSUNG', 'KAKAO', 'NAVER', 'LG CNS', 'HYUNDAI', 'KRAFTON', 'COUPANG', 'KAKAOBANK']

export default function Partners({ marqueeRef }) {
  return (
    <section className="py-10 border-t border-b border-white/[0.05] overflow-hidden">
      <p className="text-center mb-7 px-6 text-xs text-[rgba(240,239,255,0.3)] tracking-[1.5px] uppercase font-['Space_Grotesk']">
        전 세계 선도 기업들이 선택한 NOVA
      </p>
      <div className="overflow-hidden">
        <div ref={marqueeRef} className="flex w-max">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
            <span key={i} className="opacity-25 font-['Space_Grotesk'] font-bold text-base sm:text-lg tracking-[1px] px-6 sm:px-10 shrink-0">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
