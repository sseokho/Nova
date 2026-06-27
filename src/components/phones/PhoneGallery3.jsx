export default function PhoneGallery3() {
  const apps = [
    { lbl: 'Slack', bg: 'bg-[#4A154B]', letter: 'S' },
    { lbl: 'Gmail', bg: 'bg-[#EA4335]', letter: 'G' },
    { lbl: 'Notion', bg: 'bg-black', letter: 'N', highlight: true },
    { lbl: 'Zoom', bg: 'bg-[#00AE65]', letter: 'Z' },
    { lbl: 'Teams', bg: 'bg-[#0078D4]', letter: 'T' },
    { lbl: '더보기', bg: 'bg-white/[0.06]', letter: '+', plus: true },
  ]
  const syncs = [['Slack 메시지 분류', '방금'], ['Gmail 자동 답변', '3분 전'], ['Notion 문서 업데이트', '12분 전']]
  return (
    <div className="gallery-pop flex flex-col items-center gap-5 cursor-pointer will-change-transform">
      <div className="animate-float-g3 [filter:drop-shadow(0_32px_64px_rgba(0,0,0,0.7))]">
        <div className="w-[220px] h-[476px] bg-[linear-gradient(158deg,#1a1929,#0e0d1a)] rounded-[46px] border-[1.5px] border-white/[0.09] shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)] relative">
          <div className="absolute inset-[3.5px] bg-[#09091a] rounded-[42px] overflow-hidden">
            <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-[18px] z-[5]" />
            <div className="pt-[44px] px-[14px] pb-[14px] h-full overflow-hidden flex flex-col gap-[14px]">
              <div>
                <div className="text-[10px] text-white/30 mb-1">연결된 앱</div>
                <div className="text-[15px] font-bold text-[#f0efff] mb-[2px]">24개 앱 연동 중</div>
                <div className="text-[9px] text-[#4ade80]">↑ 모든 연결 정상 중</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {apps.map(({ lbl, bg, letter, highlight, plus }) => (
                  <div key={lbl} className={`rounded-[10px] py-[10px] px-[6px] flex flex-col items-center gap-[5px] ${highlight ? 'bg-brand/[0.15] border border-brand/30' : plus ? 'bg-white/[0.05] border border-dashed border-white/10' : 'bg-white/[0.05] border border-white/[0.07]'}`}>
                    <div className={`w-7 h-7 ${bg} rounded-lg flex items-center justify-center text-[13px] font-extrabold ${plus ? 'text-white/30' : 'text-white'}`}>{letter}</div>
                    <span className={`text-[8px] ${highlight ? 'text-violet' : 'text-white/40'}`}>{lbl}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-[10px] text-white/30 mb-2 tracking-[0.5px] uppercase">마지막 동기화</div>
                {syncs.map(([txt, time]) => (
                  <div key={txt} className="flex justify-between items-center bg-white/[0.03] rounded-lg py-[7px] px-[10px] mb-[6px]">
                    <span className="text-[10px] text-white/60">{txt}</span>
                    <span className={`text-[9px] ${time === '방금' ? 'text-[#4ade80]' : 'text-white/30'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-[13px] text-[rgba(240,239,255,0.4)] font-medium">앱 연동 관리</span>
    </div>
  )
}
