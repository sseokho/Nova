export default function PhoneGallery2() {
  const bars = [
    { h: 'h-[36px]', lbl: '1주', active: false },
    { h: 'h-[48px]', lbl: '2주', active: false },
    { h: 'h-[40px]', lbl: '3주', active: false },
    { h: 'h-[56px]', lbl: '이번주', active: true },
  ]
  const statsList = [
    { k: '자동화 완료', v: '127건', cn: 'text-[#f0efff]' },
    { k: 'AI 정확도', v: '98.2%', cn: 'text-[#4ade80]' },
    { k: '절약 비용', v: '₩ 2.4M', cn: 'text-violet' },
  ]
  return (
    <div className="gallery-pop flex flex-col items-center gap-5">
      <div className="animate-float-g2 [filter:drop-shadow(0_40px_80px_rgba(108,99,255,0.35))_drop-shadow(0_20px_40px_rgba(0,0,0,0.8))]">
        <div className="w-[220px] h-[476px] sm:w-[248px] sm:h-[536px] bg-[linear-gradient(158deg,#1c1b2e,#0f0e1c)] rounded-[46px] sm:rounded-[52px] border-[1.5px] border-brand/25 shadow-[0_48px_96px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] relative">
          <div className="absolute inset-1 bg-[#09091a] rounded-[42px] sm:rounded-[48px] overflow-hidden">
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[94px] h-[28px] bg-black rounded-[20px] z-10" />
            <div className="pt-[52px] px-[18px] pb-4 h-full overflow-hidden flex flex-col gap-[14px]">
              <div>
                <div className="text-[10px] text-white/30 mb-[3px] tracking-[0.5px]">이번 달 성과</div>
                <div className="text-[16px] font-extrabold text-[#f0efff] tracking-[-0.3px]">6월 리포트</div>
              </div>
              <div className="bg-[linear-gradient(135deg,rgba(108,99,255,0.2),rgba(167,139,250,0.1))] rounded-[14px] p-[14px] border border-brand/20">
                <div className="text-[32px] font-black text-violet font-['Space_Grotesk'] leading-none">38.4h</div>
                <div className="text-[10px] text-white/40 mt-1">절약된 총 시간</div>
                <div className="text-[10px] text-[#4ade80] mt-1 font-semibold">↑ 지난달 대비 +24%</div>
              </div>
              <div className="bg-white/[0.03] rounded-[12px] p-3">
                <div className="text-[10px] text-white/40 mb-[10px]">주간 자동화 횟수</div>
                <div className="flex items-end justify-between gap-[5px] h-[56px]">
                  {bars.map(({ h, lbl, active }) => (
                    <div key={lbl} className="flex-1 flex flex-col items-center gap-[3px]">
                      <div className={`w-full ${h} rounded-[3px] ${active ? 'bg-[linear-gradient(to_top,#c4b5fd,rgba(196,181,253,0.4))] border border-crystal/30' : 'bg-[linear-gradient(to_top,#6c63ff,rgba(108,99,255,0.3))]'}`} />
                      <span className={`text-[8px] ${active ? 'text-violet font-semibold' : 'text-white/30'}`}>{lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
              {statsList.map(({ k, v, cn }) => (
                <div key={k}>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-white/45">{k}</span>
                    <span className={`text-[12px] font-bold font-['Space_Grotesk'] ${cn}`}>{v}</span>
                  </div>
                  <div className="h-px bg-white/[0.05] mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="text-[13px] text-[rgba(240,239,255,0.5)] font-semibold">분석 대시보드</span>
    </div>
  )
}
