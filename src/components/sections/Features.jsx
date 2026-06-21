import Eyebrow from '../ui/Eyebrow'

const FEATURES = [
  {
    title: 'AI 스마트 자동화',
    desc: '반복적인 업무를 AI가 학습하고 자동 처리합니다. 이메일 분류부터 보고서 작성까지, 클릭 한 번으로 완성.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="2.5" fill="#a78bfa" /><circle cx="6" cy="17" r="2.5" fill="#6c63ff" /><circle cx="18" cy="17" r="2.5" fill="#6c63ff" /><line x1="12" y1="9.5" x2="6" y2="14.5" stroke="#a78bfa" strokeWidth="1.5" /><line x1="12" y1="9.5" x2="18" y2="14.5" stroke="#a78bfa" strokeWidth="1.5" /><line x1="6" y1="17" x2="18" y2="17" stroke="rgba(108,99,255,0.5)" strokeWidth="1.5" strokeDasharray="3 2" /></svg>),
  },
  {
    title: '실시간 동기화',
    desc: '모든 기기에서 실시간으로 동기화됩니다. 아이폰, 맥, 윈도우 어디서든 끊김 없이 이어서 작업하세요.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 01-14.9 4" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" /><path d="M4 12a8 8 0 0114.9-4" stroke="#6c63ff" strokeWidth="1.8" strokeLinecap="round" /><polyline points="20,6 20,10 16,10" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><polyline points="4,18 4,14 8,14" stroke="#6c63ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: '군사급 보안',
    desc: 'SOC2 Type II, ISO 27001 인증 완료. 엔드투엔드 암호화로 데이터는 오직 본인만 볼 수 있습니다.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v7c0 4.5 3.5 8.7 8 9.9 4.5-1.2 8-5.4 8-9.9V6L12 2z" fill="rgba(108,99,255,0.2)" stroke="#a78bfa" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: '인사이트 분석',
    desc: 'AI가 업무 패턴을 분석하고 최적화 방법을 제안합니다. 데이터 기반으로 더 스마트한 결정을 내리세요.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="14" width="4" height="7" rx="1" fill="rgba(108,99,255,0.4)" /><rect x="10" y="10" width="4" height="11" rx="1" fill="rgba(167,139,250,0.6)" /><rect x="17" y="5" width="4" height="16" rx="1" fill="#a78bfa" /><path d="M4 10 L11 7 L18 4" stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" /></svg>),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-[120px] px-6 md:px-12 lg:px-[120px] relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.08)_0%,transparent_65%)]" />
      <div className="text-center mb-14 md:mb-[72px]">
        <Eyebrow className="reveal">WHY NOVA</Eyebrow>
        <h2 className="reveal reveal-d1 text-[clamp(30px,6vw,56px)] font-black tracking-[-1px] sm:tracking-[-1.5px] leading-[1.1] mt-4 mb-4 text-[#f0efff]">
          왜 <span className="g-text">NOVA</span>인가요?
        </h2>
        <p className="reveal reveal-d2 text-[15px] sm:text-[17px] text-[rgba(240,239,255,0.45)] max-w-[480px] mx-auto leading-[1.75] break-keep">
          단순한 자동화 도구가 아닙니다. 팀의 사고 방식 자체를 바꾸는 AI 플랫폼입니다.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-[920px] mx-auto">
        {FEATURES.map((f, i) => (
          <div key={i} className={`feat-card reveal${i > 0 ? ` reveal-d${i}` : ''} p-7 sm:p-9 rounded-3xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl`}>
            <div className="w-[52px] h-[52px] flex items-center justify-center mb-5 rounded-2xl bg-[linear-gradient(135deg,rgba(108,99,255,0.25),rgba(167,139,250,0.15))] border border-violet/20">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-[-0.3px] text-[#f0efff]">{f.title}</h3>
            <p className="text-[15px] text-[rgba(240,239,255,0.5)] leading-[1.8] break-keep">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
