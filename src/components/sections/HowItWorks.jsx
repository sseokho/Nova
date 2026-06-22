import LogoIcon from '../ui/LogoIcon'
import Eyebrow from '../ui/Eyebrow'

function ConnectVisual() {
  const apps = [
    { l: 'S', bg: '#4A154B' }, { l: 'G', bg: '#EA4335' },
    { l: 'N', bg: '#111' }, { l: 'Z', bg: '#00AE65' },
    { l: 'T', bg: '#0078D4' }, { l: 'F', bg: '#F24E1E' },
  ]
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[340px] flex items-center justify-center overflow-hidden">
      <div className="absolute w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] rounded-full border border-brand/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[166px] h-[166px] sm:w-[180px] sm:h-[180px] rounded-full border border-dashed border-brand/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-violet flex items-center justify-center z-10 shadow-[0_0_40px_rgba(108,99,255,0.55)] relative">
        <LogoIcon size={28} />
      </div>
      {apps.map((app, i) => {
        const angle = (i / apps.length) * 2 * Math.PI - Math.PI / 2
        const r = 110
        return (
          <div
            key={i}
            className="absolute w-11 h-11 rounded-xl flex items-center justify-center text-[14px] font-extrabold text-white shadow-lg"
            style={{ background: app.bg, transform: `translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)` }}
          >
            {app.l}
          </div>
        )
      })}
    </div>
  )
}

function SetupVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/[0.07]">
        <div className="text-[11px] text-white/40 mb-3">자연어로 입력하세요</div>
        <div className="bg-white/[0.06] rounded-xl p-4 border border-brand/20 mb-4 text-sm text-[#f0efff] leading-[1.6]">
          "슬랙에서 NOVA 멘션이 오면 자동으로 지메일로 요약을 보내줘"
        </div>
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-violet flex items-center justify-center shrink-0 mt-0.5">
            <LogoIcon size={10} />
          </div>
          <div className="flex-1 bg-brand/[0.12] rounded-xl p-3.5 border border-brand/15">
            <div className="text-[11px] text-violet mb-1 font-semibold">NOVA AI</div>
            <div className="text-[12px] text-[rgba(240,239,255,0.75)] leading-[1.65]">
              알겠어요! Slack → Gmail 자동화를 설정했습니다. 트리거 3개, 액션 2개로 구성됐어요. ✓
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RunVisual() {
  const tasks = [
    { ico: '✅', txt: '이메일 자동 분류 완료', time: '방금', loading: false },
    { ico: '⏳', txt: '보고서 작성 중...', time: '진행 중', loading: true },
    { ico: '📨', txt: '슬랙 알림 전송 완료', time: '2분 전', loading: false },
    { ico: '🔄', txt: 'CRM 데이터 업데이트', time: '5분 전', loading: false },
  ]
  return (
    <div className="w-full max-w-[360px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse-glow" />
        <span className="text-[12px] text-[#4ade80] font-semibold">실시간 실행 중 · 오늘 127회</span>
      </div>
      {tasks.map((t, i) => (
        <div key={i} className={`flex items-center gap-3 p-3 rounded-xl mb-2 ${t.loading ? 'bg-brand/10 border border-brand/15' : 'bg-white/[0.04] border border-white/[0.06]'}`}>
          <span className="text-[18px]">{t.ico}</span>
          <div className="flex-1 min-w-0">
            <div className={`text-[12px] ${t.loading ? 'text-violet' : 'text-[rgba(240,239,255,0.7)]'}`}>{t.txt}</div>
          </div>
          <span className={`text-[10px] shrink-0 ${t.time === '방금' ? 'text-[#4ade80]' : t.loading ? 'text-violet' : 'text-white/30'}`}>{t.time}</span>
        </div>
      ))}
    </div>
  )
}

function OptimizeVisual() {
  const weeks = [
    { w: '1주차', pct: 45, save: '2.1h' },
    { w: '2주차', pct: 62, save: '3.2h' },
    { w: '3주차', pct: 78, save: '3.9h' },
    { w: '4주차', pct: 91, save: '4.2h' },
  ]
  return (
    <div className="w-full max-w-[360px] bg-white/[0.03] rounded-2xl p-5 border border-white/[0.06]">
      <div className="flex justify-between items-center mb-5">
        <span className="text-[13px] text-white/40">AI 학습 진행률</span>
        <span className="text-[13px] text-violet font-bold">지속 개선 중 ↑</span>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        {weeks.map(({ w, pct, save }) => (
          <div key={w} className="flex items-center gap-3">
            <span className="text-[11px] text-white/35 w-12 shrink-0">{w}</span>
            <div className="flex-1 h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-[linear-gradient(90deg,#6c63ff,#a78bfa)]" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[11px] text-crystal font-bold w-[38px] text-right">{save}</span>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-white/[0.06] flex justify-between">
        {[['91%', '자동화율', 'text-violet'], ['4.2h', '일 절약', 'text-crystal'], ['↑24%', '월 개선', 'text-[#4ade80]']].map(([v, l, c]) => (
          <div key={l} className="text-center">
            <div className={`text-[22px] font-black font-['Space_Grotesk'] ${c}`}>{v}</div>
            <div className="text-[10px] text-white/35 mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const HOW_STEPS = [
  { num: '01', label: '연결', accent: '#6c63ff', title: '30초 만에\n앱 연동', desc: '슬랙, 지메일, 노션 등 30개 이상의 앱을 원클릭으로 연동하세요. 별도 설정 없이 즉시 사용 가능합니다.', visual: <ConnectVisual /> },
  { num: '02', label: '설정', accent: '#a78bfa', title: 'AI가 이해하는\n자연어 설정', desc: '복잡한 코딩 없이 자연어로 원하는 자동화를 설명하면 AI가 워크플로우를 자동으로 구성합니다.', visual: <SetupVisual /> },
  { num: '03', label: '실행', accent: '#c4b5fd', title: '24시간 쉬지 않는\nAI 실행', desc: '설정 완료 후 NOVA가 알아서 실행합니다. 자는 동안에도, 주말에도 AI가 끊임없이 대신 일합니다.', visual: <RunVisual /> },
  { num: '04', label: '최적화', accent: '#6c63ff', title: '쓸수록 더 똑똑한\nAI 학습', desc: '사용할수록 AI가 업무 패턴을 학습하고 자동화 효율을 지속적으로 개선합니다. 시간이 지날수록 더욱 강력해집니다.', visual: <OptimizeVisual /> },
]

export { HOW_STEPS }

export default function HowItWorks({ hScrollRef, hTrackRef }) {
  return (
    <section
      id="how"
      ref={hScrollRef}
      className="relative lg:h-screen bg-[#080810] overflow-hidden"
    >
      {/* 모바일: 인라인 플로우 타이틀 */}
      <div className="lg:hidden text-center px-5 pt-10 pb-4">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <h2 className="text-[clamp(26px,6vw,46px)] font-black tracking-[-1px] sm:tracking-[-1.5px] mt-2 text-[#f0efff]">
          NOVA <span className="g-text">작동 방식</span>
        </h2>
      </div>

      {/* 데스크탑: 절대 위치 타이틀 */}
      <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 text-center z-[5] pointer-events-none px-4 w-full">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <h2 className="text-[clamp(26px,6vw,46px)] font-black tracking-[-1px] sm:tracking-[-1.5px] mt-2 text-[#f0efff]">
          NOVA <span className="g-text">작동 방식</span>
        </h2>
      </div>

      <div ref={hTrackRef} className="flex flex-col lg:flex-row lg:h-full will-change-transform">
        {HOW_STEPS.map((step, i) => (
          <div
            key={i}
            className="h-panel flex-shrink-0 w-full lg:w-screen lg:h-full flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-[60px] pt-8 sm:pt-10 pb-10 lg:pt-[72px] lg:pb-0"
          >
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="panel-content w-full max-w-[520px] lg:flex-1 relative text-center lg:text-left">
              <div
                className="absolute -left-2 -top-6 sm:-top-10 md:-top-14 text-[48px] sm:text-[72px] md:text-[120px] lg:text-[160px] font-black leading-none opacity-[0.04] select-none pointer-events-none font-['Space_Grotesk']"
                style={{ color: step.accent }}
              >
                {step.num}
              </div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] font-semibold mb-3"
                style={{ borderColor: step.accent + '50', color: step.accent, backgroundColor: step.accent + '18' }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: step.accent }} />
                STEP {step.num} · {step.label}
              </div>
              <h2 className="text-[clamp(26px,6vw,54px)] font-black tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] mb-4 text-[#f0efff] whitespace-pre-line">
                {step.title}
              </h2>
              <p className="text-[14px] md:text-[16px] text-[rgba(240,239,255,0.5)] leading-[1.75] break-keep max-w-[400px] mx-auto lg:mx-0">
                {step.desc}
              </p>
            </div>

            <div className="panel-visual flex-none lg:flex-1 flex items-center justify-center w-full">
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 md:p-6 flex items-center justify-center w-full max-w-[420px] min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
                {step.visual}
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-3 z-10">
        {HOW_STEPS.map((_, i) => (
          <div key={i} data-step-dot className="h-[3px] w-8 rounded-full bg-white/30" />
        ))}
      </div>

      <div className="hidden lg:flex absolute bottom-9 right-14 items-center gap-2 text-[11px] text-white/30 z-10">
        <span>스크롤하여 계속</span>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <path d="M1 5h18M14 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
