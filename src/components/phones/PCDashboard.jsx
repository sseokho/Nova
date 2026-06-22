export default function PCDashboard() {
  const kpis = [
    { val: '1,240', lbl: '자동화 완료', delta: '+12%' },
    { val: '4,200h', lbl: '절약 시간', delta: '+8%' },
    { val: '94%', lbl: '생산성 지수', delta: '+5%' },
  ]
  const bars = [38, 55, 44, 72, 50, 85, 68, 92, 60, 88, 74, 96]
  const tasks = [
    { name: '이메일 자동 분류', done: true },
    { name: '주간 리포트 작성', done: false },
    { name: '슬랙 연동 설정', done: true },
    { name: 'CRM 데이터 동기화', done: false },
  ]

  return (
    <div className="w-[500px] bg-[#0d0c1c] rounded-[14px] border border-white/[0.1] shadow-[0_48px_96px_rgba(0,0,0,0.75),0_0_0_1px_rgba(108,99,255,0.1)] overflow-hidden shrink-0">
      {/* Browser chrome */}
      <div className="h-10 bg-[#16152a] border-b border-white/[0.07] flex items-center px-4 gap-3 shrink-0">
        <div className="flex gap-[6px]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] opacity-90" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-90" />
          <div className="w-3 h-3 rounded-full bg-[#28ca41] opacity-90" />
        </div>
        <div className="flex-1 mx-2 h-[22px] bg-white/[0.05] rounded-[5px] flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-brand/50 shrink-0" />
          <span className="text-[9px] text-white/25 font-['Space_Grotesk'] tracking-wide">app.nova.ai / dashboard</span>
        </div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ height: '330px' }}>
        {/* Sidebar */}
        <div className="w-[56px] bg-[#0a091a] border-r border-white/[0.05] flex flex-col items-center py-4 gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-[9px] bg-[linear-gradient(135deg,#6c63ff,#a78bfa)] flex items-center justify-center mb-1.5 shrink-0">
            <div className="w-3 h-3 rounded-[3px] bg-white/90" />
          </div>
          {[true, false, false, false].map((active, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0 ${active ? 'bg-brand/25 border border-brand/30' : 'bg-white/[0.04]'}`}
            >
              <div className={`w-3 h-2.5 rounded-[2.5px] ${active ? 'bg-brand' : 'bg-white/20'}`} />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-hidden min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <div className="text-[13px] font-semibold text-[#f0efff]">대시보드</div>
              <div className="text-[10px] text-white/30 mt-[2px]">AI 자동화 현황</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-[22px] px-2.5 bg-brand/15 rounded-[5px] border border-brand/20 flex items-center">
                <span className="text-[9px] text-violet font-medium">이번 달 ▾</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[linear-gradient(135deg,#6c63ff,#a78bfa)] flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">K</span>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-3 gap-2 shrink-0">
            {kpis.map(({ val, lbl, delta }) => (
              <div key={lbl} className="bg-white/[0.04] rounded-[10px] p-2.5 border border-white/[0.06]">
                <div className="text-[9px] text-white/35 mb-[3px] truncate">{lbl}</div>
                <div className="text-[16px] font-bold text-[#f0efff] leading-none font-['Space_Grotesk']">{val}</div>
                <div className="text-[9px] text-emerald-400/90 mt-1">{delta}</div>
              </div>
            ))}
          </div>

          {/* Chart + Tasks */}
          <div className="flex gap-2.5 flex-1 min-h-0">
            {/* Bar chart */}
            <div className="flex-1 bg-white/[0.03] rounded-[10px] p-2.5 border border-white/[0.05] flex flex-col min-w-0">
              <div className="text-[9px] text-white/35 mb-2 shrink-0">자동화 추이</div>
              <div className="flex items-end gap-1 flex-1">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[2.5px]"
                    style={{
                      height: `${h}%`,
                      background: i >= bars.length - 3
                        ? 'linear-gradient(180deg,#a78bfa,#6c63ff)'
                        : 'rgba(255,255,255,0.12)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Task list */}
            <div className="w-[148px] shrink-0 flex flex-col gap-1.5">
              <div className="text-[9px] text-white/35 mb-0.5 shrink-0">최근 작업</div>
              {tasks.map(({ name, done }) => (
                <div key={name} className="flex items-center gap-2 bg-white/[0.03] rounded-[7px] px-2 py-1.5 border border-white/[0.04]">
                  <div
                    className={`w-3 h-3 rounded-[3.5px] shrink-0 flex items-center justify-center ${done ? 'bg-emerald-500/70' : 'border border-white/25'}`}
                  >
                    {done && <div className="w-[6px] h-[4px] border-l border-b border-white rotate-[-45deg] mt-[1px]" />}
                  </div>
                  <span className="text-[9px] text-white/50 truncate">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
