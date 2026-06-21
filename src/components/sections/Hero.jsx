import PrimaryBtn from '../ui/PrimaryBtn'
import GhostBtn from '../ui/GhostBtn'
import PhoneDashboard from '../phones/PhoneDashboard'

/* Deterministic particles — computed once at module level */
const PARTICLES = Array.from({ length: 16 }, (_, i) => {
  const s = i * 7.31 + 1.5
  const sin = (x) => Math.sin(x)
  const cos = (x) => Math.cos(x)
  return {
    id: i,
    size:  (sin(s) * 0.5 + 0.5) * 4 + 2,
    left:  (sin(s * 1.1) * 0.5 + 0.5) * 90 + 5,
    top:   (cos(s * 0.9) * 0.5 + 0.5) * 85 + 5,
    dur:   (sin(s * 1.3) * 0.5 + 0.5) * 10 + 7,
    delay: -((cos(s * 1.7) * 0.5 + 0.5) * 14),
    dx:    (sin(s * 2.1) - 0.5) * 70,
    dy:    -((cos(s * 1.5) * 0.5 + 0.5) * 100 + 40),
    op:    (sin(s * 3) * 0.5 + 0.5) * 0.35 + 0.12,
  }
})

const STATS = [
  { display: '12,000+', count: 12000, suffix: '+', decimal: 0, label: '기업 사용 중' },
  { display: '★ 4.9',   count: 4.9,   suffix: '',  decimal: 1, prefix: '★ ', label: '앱스토어 평점' },
  { display: '99.9%',   count: 99.9,  suffix: '%', decimal: 1, label: '서비스 가동률' },
]

export default function Hero({ heroBgRef, heroPhoneRef }) {
  return (
    <section className="hero-section relative min-h-screen flex items-center px-6 md:px-12 lg:px-[120px] pt-[68px] overflow-hidden">
      {/* Gradient blobs */}
      <div
        ref={heroBgRef}
        className="absolute top-[-10%] right-[5%] w-[680px] h-[680px] rounded-full pointer-events-none will-change-transform bg-[radial-gradient(circle,rgba(108,99,255,0.18)_0%,transparent_65%)]"
      />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_65%)]" />

      {/* Particles */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            width:  `${p.size}px`,
            height: `${p.size}px`,
            left:   `${p.left}%`,
            top:    `${p.top}%`,
            '--dx':    `${p.dx}px`,
            '--dy':    `${p.dy}px`,
            '--dur':   `${p.dur}s`,
            '--delay': `${p.delay}s`,
            '--op':    p.op,
          }}
        />
      ))}

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-20">
        <div className="flex-1 max-w-full lg:max-w-[580px] text-center lg:text-left">
          <div className="hero-badge inline-flex items-center gap-2 px-[14px] py-[6px] mb-7 rounded-full border border-violet/30 bg-brand/[0.12] text-xs tracking-[0.5px]">
            <span className="w-1.5 h-1.5 rounded-full bg-violet inline-block" />
            <span className="text-violet/90">AI 기반 차세대 플랫폼</span>
          </div>
          <h1 className="hero-title text-[clamp(40px,9vw,88px)] font-black leading-[1.06] tracking-[-1.5px] sm:tracking-[-2px] mb-6 text-[#f0efff] break-keep">
            업무의 미래를<br />
            <span className="g-text">지금 경험하세요</span>
          </h1>
          <p className="hero-desc text-base sm:text-lg font-light leading-[1.8] text-[rgba(240,239,255,0.55)] mb-10 max-w-[460px] mx-auto lg:mx-0 break-keep">
            NOVA AI가 반복 업무를 자동화하고, 팀의 집중력을 높이며, 매일 평균{' '}
            <strong className="text-violet font-bold">4.2시간</strong>을 돌려드립니다.
          </p>
          <div className="hero-cta flex gap-3.5 items-center justify-center lg:justify-start mb-12 flex-wrap">
            <PrimaryBtn lg>무료로 시작하기 →</PrimaryBtn>
            <GhostBtn lg>▶ 데모 보기</GhostBtn>
          </div>

          {/* Stats with count-up */}
          <div className="hero-stats flex items-center justify-center lg:justify-start gap-5 sm:gap-7 flex-wrap">
            {STATS.map(({ display, count, suffix, decimal, prefix = '', label }, i) => (
              <div key={label} className="flex items-center gap-5 sm:gap-7">
                {i > 0 && <div className="h-10 border-l border-white/[0.08]" />}
                <div>
                  <div
                    className="text-[20px] sm:text-[22px] font-extrabold text-[#f0efff] font-['Space_Grotesk']"
                    data-count={count}
                    data-suffix={suffix}
                    data-prefix={prefix}
                    data-decimal={decimal}
                  >
                    {display}
                  </div>
                  <div className="text-xs text-[rgba(240,239,255,0.4)] mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={heroPhoneRef} className="flex-none relative flex items-center justify-center w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] will-change-transform">
          <div className="orbit-ring" />
          <div className="orbit-dot" />
          <div className="hero-phone-glow" />
          <div className="animate-float-b relative z-[2]">
            <PhoneDashboard />
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-35">
        <span className="text-[11px] tracking-[1.5px] uppercase font-['Space_Grotesk']">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}
