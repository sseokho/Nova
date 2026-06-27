export default function PhoneGallery1() {
  const nodes = [
    { cn: 'bg-brand/20 border border-brand/40', dot: 'bg-brand', conn: '#6c63ff', title: '이메일 수신 트리거', sub: 'Gmail, Outlook 연동' },
    { cn: 'bg-violet/[0.15] border border-violet/25', dot: 'bg-violet', conn: '#a78bfa', title: 'AI 분류 & 우선순위', sub: 'GPT-4o 기반 분석' },
    { cn: 'bg-white/[0.04] border border-white/[0.08]', dot: 'bg-[#22c55e]', conn: '#22c55e', title: '자동 답변 발송', sub: '개인화 응답 생성' },
    { cn: 'bg-white/[0.04] border border-white/[0.08]', dot: 'bg-[#f59e0b]', conn: '#f59e0b', title: 'CRM 자동 업데이트', sub: 'Salesforce 연동' },
  ]
  return (
    <div className="gallery-pop flex flex-col items-center gap-5 cursor-pointer will-change-transform">
      <div className="animate-float-g1 [filter:drop-shadow(0_32px_64px_rgba(0,0,0,0.7))]">
        <div className="w-[220px] h-[476px] bg-[linear-gradient(158deg,#1a1929,#0e0d1a)] rounded-[46px] border-[1.5px] border-white/[0.09] shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)] relative">
          <div className="absolute inset-[3.5px] bg-[#09091a] rounded-[42px] overflow-hidden">
            <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-[18px] z-[5]" />
            <div className="pt-[44px] px-[14px] pb-[14px] h-full overflow-hidden">
              <div className="text-[10px] text-white/30 mb-1 tracking-[0.5px]">자동화 플로우</div>
              <div className="text-[15px] font-bold text-[#f0efff] mb-4">워크플로우 설정</div>
              {nodes.map((node, i) => (
                <div key={node.title}>
                  {i > 0 && <div className="flex justify-center"><div className="w-px h-[14px]" style={{ background: nodes[i - 1].conn + '66' }} /></div>}
                  <div className={`${node.cn} rounded-[10px] py-[10px] px-3 flex items-center gap-2`}>
                    <div className={`w-2 h-2 ${node.dot} rounded-full shrink-0`} />
                    <div>
                      <div className="text-[10px] text-[#f0efff] font-semibold">{node.title}</div>
                      <div className="text-[9px] text-white/30">{node.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-[14px] bg-[#22c55e]/10 border border-[#22c55e]/25 rounded-lg py-2 px-[10px] flex items-center gap-[6px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#22c55e] shrink-0 animate-pulse-glow" />
                <span className="text-[10px] text-[#4ade80] font-semibold">활성 → 오늘 43회 실행</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-[13px] text-[rgba(240,239,255,0.4)] font-medium">자동화 플로우</span>
    </div>
  )
}
