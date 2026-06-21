export default function PhoneDashboard() {
  const statsData = [
    { val: '83%', lbl: '자동화율', box: 'bg-brand/25 border border-brand/25', col: 'text-violet' },
    { val: '4.2h', lbl: '절약 시간', box: 'bg-white/[0.04] border border-white/[0.07]', col: 'text-crystal' },
    { val: '127', lbl: 'AI 완성', box: 'bg-white/[0.04] border border-white/[0.07]', col: 'text-crystal' },
  ]
  const activityData = [
    { ico: '✅', txt: '이메일 자동 분류 완료', time: '방금 전' },
    { ico: '📊', txt: '주간 리포트 작성됨', time: '2분 전' },
    { ico: '🔗', txt: '슬랙 연동 완료', time: '15분 전' },
  ]
  const navItems = [['홈', true], ['자동화', false], ['분석', false], ['설정', false]]

  return (
    <div className="w-[220px] h-[476px] sm:w-[248px] sm:h-[536px] bg-[linear-gradient(158deg,#1c1b2e_0%,#0f0e1c_100%)] rounded-[46px] sm:rounded-[52px] border-[1.5px] border-white/[0.1] shadow-[0_48px_96px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)] relative shrink-0">
      <div className="absolute -right-[2.5px] top-[120px] w-[2.5px] h-[58px] bg-white/[0.14] rounded-r-[2px]" />
      <div className="absolute -left-[2.5px] top-[90px]  w-[2.5px] h-[28px] bg-white/[0.12] rounded-l-[2px]" />
      <div className="absolute -left-[2.5px] top-[130px] w-[2.5px] h-[48px] bg-white/[0.12] rounded-l-[2px]" />
      <div className="absolute inset-1 bg-[#09091a] rounded-[42px] sm:rounded-[48px] overflow-hidden">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[94px] h-[28px] bg-black rounded-[20px] z-10" />
        <div className="absolute top-0 left-0 right-0 h-[52px] flex items-end justify-between px-6 pb-[6px] text-[10px] text-white/60 z-[5]">
          <span className="font-['Space_Grotesk'] font-semibold">9:41</span>
          <div className="flex gap-[5px] items-center">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="rgba(255,255,255,0.6)">
              <rect x="0" y="4" width="3" height="6" rx="0.5" /><rect x="4" y="2.5" width="3" height="7.5" rx="0.5" />
              <rect x="8" y="1" width="3" height="9" rx="0.5" /><rect x="12" y="0" width="2" height="10" rx="0.5" />
            </svg>
            <div className="w-[22px] h-[10px] border-[1.5px] border-white/40 rounded-[2.5px] flex items-center px-[1.5px]">
              <div className="w-[14px] h-[6px] bg-brand rounded-[1px]" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pt-[58px] px-4 pb-5 flex flex-col gap-[14px] overflow-hidden">
          <div>
            <div className="text-[11px] text-white/35 mb-[3px]">안녕하세요 👋</div>
            <div className="text-[17px] font-bold text-[#f0efff] tracking-[-0.3px]">김민준님, 오늘도 파이팅</div>
          </div>
          <div className="flex gap-2">
            {statsData.map(({ val, lbl, box, col }) => (
              <div key={lbl} className={`flex-1 ${box} rounded-[14px] p-3`}>
                <div className={`text-[20px] font-black leading-none font-['Space_Grotesk'] ${col}`}>{val}</div>
                <div className="text-[9px] text-white/40 mt-1 leading-[1.3]">{lbl}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[10px] font-semibold text-white/40 mb-2 tracking-[0.8px] uppercase">최근 활동</div>
            {activityData.map(({ ico, txt, time }) => (
              <div key={txt} className="flex items-center gap-[10px] bg-white/[0.04] rounded-[10px] py-[9px] px-[10px] mb-[6px]">
                <div className="w-7 h-7 bg-brand/30 rounded-lg flex items-center justify-center text-[13px] shrink-0">{ico}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-[#f0efff] whitespace-nowrap overflow-hidden text-ellipsis">{txt}</div>
                  <div className="text-[9px] text-white/30 mt-[1px]">{time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/[0.04] rounded-[10px] p-[10px]">
            <div className="flex justify-between mb-[6px]">
              <span className="text-[10px] text-white/50">이번 달 목표</span>
              <span className="text-[10px] text-violet font-semibold">73%</span>
            </div>
            <div className="h-1 bg-white/[0.08] rounded-sm overflow-hidden">
              <div className="h-full w-[73%] bg-[linear-gradient(90deg,#6c63ff,#a78bfa)] rounded-sm" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[rgba(9,9,26,0.95)] border-t border-white/[0.06] flex items-center justify-around px-2">
          {navItems.map(([lbl, active]) => (
            <div key={lbl} className={`flex flex-col items-center gap-[3px] ${active ? 'opacity-100' : 'opacity-35'}`}>
              <div className={`w-5 h-5 rounded-[6px] ${active ? 'bg-[linear-gradient(135deg,#6c63ff,#a78bfa)]' : 'bg-white/10'}`} />
              <span className={`text-[8px] ${active ? 'text-violet' : 'text-white/40'}`}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
