import PrimaryBtn from '../ui/PrimaryBtn'
import GhostBtn from '../ui/GhostBtn'

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 lg:py-[120px] px-6 md:px-12 lg:px-[60px] text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,rgba(108,99,255,0.12)_0%,transparent_70%)]" />
      <div className="relative z-[2]">
        <h2 className="reveal text-[clamp(34px,8vw,72px)] font-black tracking-[-1.5px] sm:tracking-[-2px] leading-[1.05] mb-5 break-keep text-[#f0efff]">
          지금 바로<br /><span className="g-text">무료로 시작하세요</span>
        </h2>
        <p className="reveal reveal-d1 text-base sm:text-lg text-[rgba(240,239,255,0.45)] mb-11 break-keep">
          신용카드 불필요 · 14일 무료 체험 · 언제든 취소 가능
        </p>
        <div className="reveal reveal-d2 flex gap-4 justify-center flex-wrap">
          <PrimaryBtn lg>무료로 시작하기 →</PrimaryBtn>
          <GhostBtn lg>데모 예약</GhostBtn>
        </div>
      </div>
    </section>
  )
}
