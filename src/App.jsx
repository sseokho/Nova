import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Atoms ── */
function LogoIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z" fill="white" fillOpacity="0.9" />
    </svg>
  )
}

function Eyebrow({ children, className = '' }) {
  return (
    <span className={`text-[13px] tracking-[0.5px] bg-gradient-to-r from-brand to-violet bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

function PrimaryBtn({ children, full = false, lg = false, className = '' }) {
  return (
    <button className={[
      full ? 'w-full' : '',
      lg ? 'px-12 py-[18px] text-base' : 'px-9 py-[14px] text-sm',
      'font-bold text-white border-0 cursor-pointer rounded-full',
      'bg-gradient-to-br from-brand via-violet to-crystal',
      'transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(108,99,255,0.55)]',
      className,
    ].join(' ')}>
      {children}
    </button>
  )
}

function GhostBtn({ children, full = false, lg = false, className = '' }) {
  return (
    <button className={[
      full ? 'w-full' : '',
      lg ? 'px-9 py-[18px] text-base' : 'px-9 py-[14px] text-sm',
      'font-semibold text-[rgba(240,239,255,0.7)] cursor-pointer rounded-full',
      'border border-white/[0.15] bg-white/[0.04]',
      'transition-all duration-[250ms] hover:border-violet/50 hover:bg-brand/[0.08]',
      className,
    ].join(' ')}>
      {children}
    </button>
  )
}

function PricingHeader({ tier, price, sub }) {
  return (
    <div className="mb-7">
      <div className="text-[13px] text-[rgba(240,239,255,0.45)] font-['Space_Grotesk'] tracking-[1px] uppercase mb-2.5">{tier}</div>
      <div className="text-[44px] font-black font-['Space_Grotesk'] tracking-[-1px] leading-none text-[#f0efff]">{price}</div>
      <div className="text-sm text-[rgba(240,239,255,0.35)] mt-1.5">{sub}</div>
    </div>
  )
}

function PricingFeatures({ items, accent = false }) {
  return (
    <div className="flex flex-col gap-3.5 mb-9">
      {items.map((item, i) => (
        <div key={i} className={`flex gap-2.5 items-center text-sm ${item.on ? accent ? 'text-[rgba(240,239,255,0.8)]' : 'text-[rgba(240,239,255,0.65)]' : 'text-[rgba(240,239,255,0.35)]'}`}>
          <span className={`font-bold text-base flex-none ${item.on ? accent ? 'text-violet' : 'text-brand' : 'text-white/20'}`}>
            {item.on ? '✓' : '✕'}
          </span>
          {item.text}
        </div>
      ))}
    </div>
  )
}

/* ── Horizontal scroll visuals ── */
function ConnectVisual() {
  const apps = [
    { l: 'S', bg: '#4A154B' }, { l: 'G', bg: '#EA4335' },
    { l: 'N', bg: '#111'    }, { l: 'Z', bg: '#00AE65' },
    { l: 'T', bg: '#0078D4' }, { l: 'F', bg: '#F24E1E' },
  ]
  return (
    <div className="relative w-[360px] h-[280px] flex items-center justify-center">
      <div className="absolute w-[240px] h-[240px] rounded-full border border-brand/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[170px] h-[170px] rounded-full border border-dashed border-brand/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
    <div className="w-[380px]">
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
    { ico: '✅', txt: '이메일 자동 분류 완료',  time: '방금',  highlight: false },
    { ico: '⏳', txt: '보고서 작성 중...',       time: '진행 중', loading: true  },
    { ico: '📨', txt: '슬랙 알림 전송 완료',    time: '2분 전', highlight: false },
    { ico: '🔄', txt: 'CRM 데이터 업데이트',    time: '5분 전', highlight: false },
  ]
  return (
    <div className="w-[360px]">
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
    <div className="w-[360px] bg-white/[0.03] rounded-2xl p-5 border border-white/[0.06]">
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
        {[['91%','자동화율','text-violet'],['4.2h','일 절약','text-crystal'],['↑24%','월 개선','text-[#4ade80]']].map(([v,l,c]) => (
          <div key={l} className="text-center">
            <div className={`text-[22px] font-black font-['Space_Grotesk'] ${c}`}>{v}</div>
            <div className="text-[10px] text-white/35 mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Phone Mockups ── */
function PhoneDashboard() {
  const statsData = [
    { val: '83%',  lbl: '자동화율',  box: 'bg-brand/25 border border-brand/25',        col: 'text-violet'  },
    { val: '4.2h', lbl: '절약 시간', box: 'bg-white/[0.04] border border-white/[0.07]', col: 'text-crystal' },
    { val: '127',  lbl: 'AI 완성',   box: 'bg-white/[0.04] border border-white/[0.07]', col: 'text-crystal' },
  ]
  const activityData = [
    { ico: '✅', txt: '이메일 자동 분류 완료', time: '방금 전' },
    { ico: '📊', txt: '주간 리포트 작성됨',    time: '2분 전'  },
    { ico: '🔗', txt: '슬랙 연동 완료',        time: '15분 전' },
  ]
  const navItems = [['홈', true], ['자동화', false], ['분석', false], ['설정', false]]

  return (
    <div className="w-[248px] h-[536px] bg-[linear-gradient(158deg,#1c1b2e_0%,#0f0e1c_100%)] rounded-[52px] border-[1.5px] border-white/[0.1] shadow-[0_48px_96px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)] relative shrink-0">
      <div className="absolute -right-[2.5px] top-[120px] w-[2.5px] h-[58px] bg-white/[0.14] rounded-r-[2px]" />
      <div className="absolute -left-[2.5px] top-[90px]  w-[2.5px] h-[28px] bg-white/[0.12] rounded-l-[2px]" />
      <div className="absolute -left-[2.5px] top-[130px] w-[2.5px] h-[48px] bg-white/[0.12] rounded-l-[2px]" />
      <div className="absolute inset-1 bg-[#09091a] rounded-[48px] overflow-hidden">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[94px] h-[28px] bg-black rounded-[20px] z-10" />
        <div className="absolute top-0 left-0 right-0 h-[52px] flex items-end justify-between px-6 pb-[6px] text-[10px] text-white/60 z-[5]">
          <span className="font-['Space_Grotesk'] font-semibold">9:41</span>
          <div className="flex gap-[5px] items-center">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="rgba(255,255,255,0.6)">
              <rect x="0" y="4" width="3" height="6" rx="0.5"/><rect x="4" y="2.5" width="3" height="7.5" rx="0.5"/>
              <rect x="8" y="1" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="2" height="10" rx="0.5"/>
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

function PhoneGallery1() {
  const nodes = [
    { cn: 'bg-brand/20 border border-brand/40',         dot: 'bg-brand',     conn: '#6c63ff', title: '이메일 수신 트리거',  sub: 'Gmail, Outlook 연동' },
    { cn: 'bg-violet/[0.15] border border-violet/25',   dot: 'bg-violet',    conn: '#a78bfa', title: 'AI 분류 & 우선순위', sub: 'GPT-4o 기반 분석'    },
    { cn: 'bg-white/[0.04] border border-white/[0.08]', dot: 'bg-[#22c55e]', conn: '#22c55e', title: '자동 답변 발송',     sub: '개인화 응답 생성'    },
    { cn: 'bg-white/[0.04] border border-white/[0.08]', dot: 'bg-[#f59e0b]', conn: '#f59e0b', title: 'CRM 자동 업데이트', sub: 'Salesforce 연동'     },
  ]
  return (
    <div className="gallery-pop flex flex-col items-center gap-5">
      <div className="animate-float-g1 [filter:drop-shadow(0_32px_64px_rgba(0,0,0,0.7))]">
        <div className="w-[220px] h-[476px] bg-[linear-gradient(158deg,#1a1929,#0e0d1a)] rounded-[46px] border-[1.5px] border-white/[0.09] shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)] relative">
          <div className="absolute inset-[3.5px] bg-[#09091a] rounded-[42px] overflow-hidden">
            <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-[18px] z-[5]" />
            <div className="pt-[44px] px-[14px] pb-[14px] h-full overflow-hidden">
              <div className="text-[10px] text-white/30 mb-1 tracking-[0.5px]">자동화 플로우</div>
              <div className="text-[15px] font-bold text-[#f0efff] mb-4">워크플로우 설정</div>
              {nodes.map((node, i) => (
                <div key={node.title}>
                  {i > 0 && <div className="flex justify-center"><div className="w-px h-[14px]" style={{ background: nodes[i-1].conn + '66' }} /></div>}
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

function PhoneGallery2() {
  const bars = [
    { h: 'h-[36px]', lbl: '1주',    active: false },
    { h: 'h-[48px]', lbl: '2주',    active: false },
    { h: 'h-[40px]', lbl: '3주',    active: false },
    { h: 'h-[56px]', lbl: '이번주', active: true  },
  ]
  const statsList = [
    { k: '자동화 완료', v: '127건',   cn: 'text-[#f0efff]' },
    { k: 'AI 정확도',  v: '98.2%',  cn: 'text-[#4ade80]' },
    { k: '절약 비용',  v: '₩ 2.4M', cn: 'text-violet'    },
  ]
  return (
    <div className="gallery-pop flex flex-col items-center gap-5">
      <div className="animate-float-g2 [filter:drop-shadow(0_40px_80px_rgba(108,99,255,0.35))_drop-shadow(0_20px_40px_rgba(0,0,0,0.8))]">
        <div className="w-[248px] h-[536px] bg-[linear-gradient(158deg,#1c1b2e,#0f0e1c)] rounded-[52px] border-[1.5px] border-brand/25 shadow-[0_48px_96px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] relative">
          <div className="absolute inset-1 bg-[#09091a] rounded-[48px] overflow-hidden">
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

function PhoneGallery3() {
  const apps = [
    { lbl: 'Slack',  bg: 'bg-[#4A154B]',    letter: 'S' },
    { lbl: 'Gmail',  bg: 'bg-[#EA4335]',    letter: 'G' },
    { lbl: 'Notion', bg: 'bg-black',         letter: 'N', highlight: true },
    { lbl: 'Zoom',   bg: 'bg-[#00AE65]',    letter: 'Z' },
    { lbl: 'Teams',  bg: 'bg-[#0078D4]',    letter: 'T' },
    { lbl: '더보기', bg: 'bg-white/[0.06]', letter: '+', plus: true },
  ]
  const syncs = [['Slack 메시지 분류','방금'],['Gmail 자동 답변','3분 전'],['Notion 문서 업데이트','12분 전']]
  return (
    <div className="gallery-pop flex flex-col items-center gap-5">
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

/* ── Data ── */
const FEATURES = [
  {
    title: 'AI 스마트 자동화',
    desc: '반복적인 업무를 AI가 학습하고 자동 처리합니다. 이메일 분류부터 보고서 작성까지, 클릭 한 번으로 완성.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="2.5" fill="#a78bfa"/><circle cx="6" cy="17" r="2.5" fill="#6c63ff"/><circle cx="18" cy="17" r="2.5" fill="#6c63ff"/><line x1="12" y1="9.5" x2="6" y2="14.5" stroke="#a78bfa" strokeWidth="1.5"/><line x1="12" y1="9.5" x2="18" y2="14.5" stroke="#a78bfa" strokeWidth="1.5"/><line x1="6" y1="17" x2="18" y2="17" stroke="rgba(108,99,255,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/></svg>),
  },
  {
    title: '실시간 동기화',
    desc: '모든 기기에서 실시간으로 동기화됩니다. 아이폰, 맥, 윈도우 어디서든 끊김 없이 이어서 작업하세요.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 01-14.9 4" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/><path d="M4 12a8 8 0 0114.9-4" stroke="#6c63ff" strokeWidth="1.8" strokeLinecap="round"/><polyline points="20,6 20,10 16,10" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="4,18 4,14 8,14" stroke="#6c63ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: '군사급 보안',
    desc: 'SOC2 Type II, ISO 27001 인증 완료. 엔드투엔드 암호화로 데이터는 오직 본인만 볼 수 있습니다.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v7c0 4.5 3.5 8.7 8 9.9 4.5-1.2 8-5.4 8-9.9V6L12 2z" fill="rgba(108,99,255,0.2)" stroke="#a78bfa" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: '인사이트 분석',
    desc: 'AI가 업무 패턴을 분석하고 최적화 방법을 제안합니다. 데이터 기반으로 더 스마트한 결정을 내리세요.',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="14" width="4" height="7" rx="1" fill="rgba(108,99,255,0.4)"/><rect x="10" y="10" width="4" height="11" rx="1" fill="rgba(167,139,250,0.6)"/><rect x="17" y="5" width="4" height="16" rx="1" fill="#a78bfa"/><path d="M4 10 L11 7 L18 4" stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/></svg>),
  },
]

const HOW_STEPS = [
  { num: '01', label: '연결',  accent: '#6c63ff', title: '30초 만에\n앱 연동',           desc: '슬랙, 지메일, 노션 등 30개 이상의 앱을 원클릭으로 연동하세요. 별도 설정 없이 즉시 사용 가능합니다.',              visual: <ConnectVisual /> },
  { num: '02', label: '설정',  accent: '#a78bfa', title: 'AI가 이해하는\n자연어 설정',   desc: '복잡한 코딩 없이 자연어로 원하는 자동화를 설명하면 AI가 워크플로우를 자동으로 구성합니다.',                    visual: <SetupVisual />   },
  { num: '03', label: '실행',  accent: '#c4b5fd', title: '24시간 쉬지 않는\nAI 실행',    desc: '설정 완료 후 NOVA가 알아서 실행합니다. 자는 동안에도, 주말에도 AI가 끊임없이 대신 일합니다.',                 visual: <RunVisual />     },
  { num: '04', label: '최적화', accent: '#6c63ff', title: '쓸수록 더 똑똑한\nAI 학습',   desc: '사용할수록 AI가 업무 패턴을 학습하고 자동화 효율을 지속적으로 개선합니다. 시간이 지날수록 더욱 강력해집니다.', visual: <OptimizeVisual /> },
]

const PARTNER_LOGOS = ['SAMSUNG', 'KAKAO', 'NAVER', 'LG CNS', 'HYUNDAI', 'KRAFTON', 'COUPANG', 'KAKAOBANK']

/* ── App ── */
export default function App() {
  const rootRef      = useRef(null)
  const navRef       = useRef(null)
  const heroBgRef    = useRef(null)
  const heroPhoneRef = useRef(null)
  const marqueeRef   = useRef(null)
  const hScrollRef   = useRef(null)
  const hTrackRef    = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* 1 ── Hero entrance */
      gsap.timeline({ delay: 0.1 })
        .from('.hero-badge',  { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' })
        .from('.hero-title',  { y: 44, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.35')
        .from('.hero-desc',   { y: 28, opacity: 0, duration: 0.75, ease: 'power2.out' }, '-=0.5')
        .from('.hero-cta',    { y: 22, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.45')
        .from('.hero-stats',  { y: 18, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from(heroPhoneRef.current, { y: 70, opacity: 0, duration: 1.3, ease: 'power3.out' }, 0.15)

      /* 2 ── Nav background on scroll */
      ScrollTrigger.create({
        start: 60,
        onEnter:     () => gsap.to(navRef.current, { backgroundColor: 'rgba(8,8,16,0.92)', duration: 0.35, overwrite: 'auto' }),
        onLeaveBack: () => gsap.to(navRef.current, { backgroundColor: 'rgba(8,8,16,0.72)', duration: 0.35, overwrite: 'auto' }),
      })

      /* 3 ── Parallax */
      gsap.to(heroBgRef.current, {
        y: -220, ease: 'none',
        scrollTrigger: { trigger: heroBgRef.current, start: 'top top', end: '+=900', scrub: true },
      })
      gsap.to(heroPhoneRef.current, {
        y: -90, ease: 'none',
        scrollTrigger: { trigger: heroPhoneRef.current, start: 'top top', end: '+=900', scrub: true },
      })

      /* 4 ── Scroll reveals */
      gsap.utils.toArray('.reveal').forEach(el => {
        const delay =
          el.classList.contains('reveal-d4') ? 0.4 :
          el.classList.contains('reveal-d3') ? 0.3 :
          el.classList.contains('reveal-d2') ? 0.2 :
          el.classList.contains('reveal-d1') ? 0.1 : 0
        gsap.fromTo(el,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out', delay,
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
        )
      })

      /* 5 ── Partner marquee (infinite) */
      gsap.to(marqueeRef.current, {
        x: '-50%', duration: 28, ease: 'none', repeat: -1,
      })

      /* 6 ── Horizontal scroll "How it works" */
      const track = hTrackRef.current
      const hTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: hScrollRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate(self) {
            // Animate step indicator pills
            const activeIdx = Math.min(
              HOW_STEPS.length - 1,
              Math.floor(self.progress * HOW_STEPS.length)
            )
            self.trigger.querySelectorAll('[data-step-dot]').forEach((dot, i) => {
              gsap.to(dot, {
                scaleX: i === activeIdx ? 1.6 : 1,
                opacity: i === activeIdx ? 1 : 0.3,
                duration: 0.25,
                overwrite: 'auto',
              })
            })
          },
        },
      })

      // Panel content entrance within horizontal scroll
      gsap.utils.toArray('.h-panel').forEach(panel => {
        const content = panel.querySelector('.panel-content')
        const visual  = panel.querySelector('.panel-visual')
        if (content) {
          gsap.fromTo(content,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
              scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left 85%', toggleActions: 'play none none none' } }
          )
        }
        if (visual) {
          gsap.fromTo(visual,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out',
              scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left 70%', toggleActions: 'play none none none' } }
          )
        }
      })

      /* 7 ── Gallery phones — pop-in from center outward */
      const gallerySection = rootRef.current.querySelector('#gallery')
      if (gallerySection) {
        const phones = gsap.utils.toArray('.gallery-pop', gallerySection)
        gsap.fromTo(phones,
          { scale: 0.45, y: 120, opacity: 0, rotationZ: (i) => i === 0 ? -18 : i === 2 ? 18 : 0 },
          {
            scale: 1, y: 0, opacity: 1, rotationZ: 0,
            duration: 1.1,
            ease: 'back.out(1.9)',
            stagger: { amount: 0.25, from: 'center' },
            scrollTrigger: {
              trigger: gallerySection,
              start: 'top 65%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      /* 8 ── Card hover micro-interactions */
      gsap.utils.toArray('.feat-card').forEach(card => {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' }))
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' }))
      })
      gsap.utils.toArray('.p-card').forEach(card => {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' }))
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' }))
      })

    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef}>

      {/* NAV */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-16 h-[68px] backdrop-blur-2xl border-b border-white/[0.06]"
        style={{ backgroundColor: 'rgba(8,8,16,0.72)' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[7px] flex items-center justify-center bg-gradient-to-br from-brand to-violet">
            <LogoIcon />
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-[17px] tracking-[0.5px] text-[#f0efff]">NOVA</span>
        </div>
        <ul className="flex gap-9 list-none m-0 p-0">
          {[['#how','작동방식'],['#features','기능'],['#gallery','화면'],['#pricing','가격']].map(([href, label]) => (
            <li key={label}>
              <a href={href} className="text-[rgba(240,239,255,0.55)] text-sm font-medium no-underline hover:text-[#f0efff] transition-colors duration-200">{label}</a>
            </li>
          ))}
        </ul>
        <PrimaryBtn>무료 체험 시작</PrimaryBtn>
      </nav>

      <div className="min-h-screen relative">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-[120px] pt-[68px] overflow-hidden">
          <div
            ref={heroBgRef}
            className="absolute top-[-10%] right-[5%] w-[680px] h-[680px] rounded-full pointer-events-none will-change-transform bg-[radial-gradient(circle,rgba(108,99,255,0.18)_0%,transparent_65%)]"
          />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_65%)]" />

          <div className="flex items-center justify-between w-full gap-20 relative z-[2]">
            <div className="flex-1 max-w-[580px]">
              <div className="hero-badge inline-flex items-center gap-2 px-[14px] py-[6px] mb-7 rounded-full border border-violet/30 bg-brand/[0.12] text-xs tracking-[0.5px]">
                <span className="w-1.5 h-1.5 rounded-full bg-violet inline-block" />
                <span className="text-violet/90">AI 기반 차세대 플랫폼</span>
              </div>
              <h1 className="hero-title text-[clamp(52px,5.5vw,88px)] font-black leading-[1.06] tracking-[-2px] mb-6 text-[#f0efff] break-keep">
                업무의 미래를<br/>
                <span className="g-text">지금 경험하세요</span>
              </h1>
              <p className="hero-desc text-lg font-light leading-[1.8] text-[rgba(240,239,255,0.55)] mb-10 max-w-[460px] break-keep">
                NOVA AI가 반복 업무를 자동화하고, 팀의 집중력을 높이며, 매일 평균{' '}
                <strong className="text-violet font-bold">4.2시간</strong>을 돌려드립니다.
              </p>
              <div className="hero-cta flex gap-3.5 items-center mb-12 flex-wrap">
                <PrimaryBtn lg>무료로 시작하기 →</PrimaryBtn>
                <GhostBtn lg>▶ 데모 보기</GhostBtn>
              </div>
              <div className="hero-stats flex items-center gap-7 flex-wrap">
                {[['12,000+','기업 사용 중'],['★ 4.9','앱스토어 평점'],['99.9%','서비스 가동률']].map(([val, label], i) => (
                  <div key={label} className="flex items-center gap-7">
                    {i > 0 && <div className="h-10 border-l border-white/[0.08]" />}
                    <div>
                      <div className="text-[22px] font-extrabold text-[#f0efff] font-['Space_Grotesk']">{val}</div>
                      <div className="text-xs text-[rgba(240,239,255,0.4)] mt-0.5">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={heroPhoneRef} className="flex-none relative flex items-center justify-center w-[340px] will-change-transform">
              <div className="orbit-ring" />
              <div className="orbit-dot" />
              <div className="hero-phone-glow" />
              <div className="animate-float-b relative z-[2]">
                <PhoneDashboard />
              </div>
            </div>
          </div>

          <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
            <span className="text-[11px] tracking-[1.5px] uppercase font-['Space_Grotesk']">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </section>

        {/* PARTNER LOGOS — infinite marquee */}
        <section className="py-10 border-t border-b border-white/[0.05] overflow-hidden">
          <p className="text-center mb-7 text-xs text-[rgba(240,239,255,0.3)] tracking-[1.5px] uppercase font-['Space_Grotesk']">
            전 세계 선도 기업들이 선택한 NOVA
          </p>
          <div className="overflow-hidden">
            <div ref={marqueeRef} className="flex w-max">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
                <span key={i} className="opacity-25 font-['Space_Grotesk'] font-bold text-lg tracking-[1px] px-10 shrink-0">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — horizontal scroll */}
        <section id="how" ref={hScrollRef} className="relative h-screen overflow-hidden bg-[#080810]">
          {/* Section header */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 text-center z-[5] pointer-events-none">
            <Eyebrow>HOW IT WORKS</Eyebrow>
            <h2 className="text-[clamp(30px,3.5vw,46px)] font-black tracking-[-1.5px] mt-2 text-[#f0efff]">
              NOVA <span className="g-text">작동 방식</span>
            </h2>
          </div>

          {/* Horizontal track */}
          <div ref={hTrackRef} className="flex h-full will-change-transform">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="h-panel flex-shrink-0 w-screen h-full flex items-center px-[120px] gap-20 pt-[100px]">
                {/* Text */}
                <div className="panel-content flex-1 max-w-[520px] relative">
                  <div className="absolute -left-2 -top-16 text-[180px] font-black leading-none opacity-[0.04] select-none pointer-events-none font-['Space_Grotesk']" style={{ color: step.accent }}>
                    {step.num}
                  </div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] font-semibold mb-6"
                    style={{ borderColor: step.accent + '50', color: step.accent, backgroundColor: step.accent + '18' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: step.accent }} />
                    STEP {step.num} · {step.label}
                  </div>
                  <h2 className="text-[clamp(40px,4vw,60px)] font-black tracking-[-2px] leading-[1.08] mb-6 text-[#f0efff] whitespace-pre-line">
                    {step.title}
                  </h2>
                  <p className="text-[17px] text-[rgba(240,239,255,0.5)] leading-[1.8] break-keep max-w-[400px]">
                    {step.desc}
                  </p>
                </div>

                {/* Visual */}
                <div className="panel-visual flex-1 flex items-center justify-center">
                  <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl p-9 flex items-center justify-center min-w-[420px] min-h-[340px]">
                    {step.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {HOW_STEPS.map((_, i) => (
              <div
                key={i}
                data-step-dot
                className="h-[3px] w-8 rounded-full bg-white/30 origin-left"
              />
            ))}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-9 right-14 flex items-center gap-2 text-[11px] text-white/30 z-10">
            <span>스크롤하여 계속</span>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M1 5h18M14 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-[120px] px-[120px] relative">
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.08)_0%,transparent_65%)]" />
          <div className="text-center mb-[72px]">
            <Eyebrow className="reveal">WHY NOVA</Eyebrow>
            <h2 className="reveal reveal-d1 text-[clamp(36px,4vw,56px)] font-black tracking-[-1.5px] leading-[1.1] mt-4 mb-4 text-[#f0efff]">
              왜 <span className="g-text">NOVA</span>인가요?
            </h2>
            <p className="reveal reveal-d2 text-[17px] text-[rgba(240,239,255,0.45)] max-w-[480px] mx-auto leading-[1.75] break-keep">
              단순한 자동화 도구가 아닙니다. 팀의 사고 방식 자체를 바꾸는 AI 플랫폼입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-[920px] mx-auto">
            {FEATURES.map((f, i) => (
              <div key={i} className={`feat-card reveal${i > 0 ? ` reveal-d${i}` : ''} p-9 rounded-3xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl`}>
                <div className="w-[52px] h-[52px] flex items-center justify-center mb-5 rounded-2xl bg-[linear-gradient(135deg,rgba(108,99,255,0.25),rgba(167,139,250,0.15))] border border-violet/20">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-[-0.3px] text-[#f0efff]">{f.title}</h3>
                <p className="text-[15px] text-[rgba(240,239,255,0.5)] leading-[1.8] break-keep">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-[120px] px-[60px] relative overflow-hidden">
          <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_65%)]" />
          <div className="absolute bottom-[10%] left-[5%]  w-[400px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.08)_0%,transparent_65%)]" />
          <div className="text-center mb-20">
            <Eyebrow className="reveal">모든 기기에서</Eyebrow>
            <h2 className="reveal reveal-d1 text-[clamp(36px,4vw,56px)] font-black tracking-[-1.5px] leading-[1.1] mt-4 mb-4 text-[#f0efff]">
              어디서든 <span className="g-text">완벽하게</span>
            </h2>
            <p className="reveal reveal-d2 text-[17px] text-[rgba(240,239,255,0.45)] max-w-[420px] mx-auto leading-[1.75] break-keep">
              어떤 상황에서도 NOVA는 당신 곁에 있습니다.
            </p>
          </div>
          <div className="flex items-end justify-center gap-10 relative z-[2]">
            <PhoneGallery1 />
            <PhoneGallery2 />
            <PhoneGallery3 />
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-[120px] px-[120px] relative">
          <div className="absolute top-[20%] left-[30%] w-[600px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(ellipse,rgba(108,99,255,0.1)_0%,transparent_70%)]" />
          <div className="text-center mb-[72px]">
            <Eyebrow className="reveal">PRICING</Eyebrow>
            <h2 className="reveal reveal-d1 text-[clamp(36px,4vw,56px)] font-black tracking-[-1.5px] mt-4 mb-4 text-[#f0efff]">
              합리적인 <span className="g-text">가격 플랜</span>
            </h2>
            <p className="reveal reveal-d2 text-[17px] text-[rgba(240,239,255,0.45)] break-keep">
              모든 플랜에 14일 무료 체험이 포함됩니다. 신용카드 불필요.
            </p>
          </div>
          <div className="flex gap-6 items-stretch max-w-[980px] mx-auto">
            <div className="p-card reveal flex-1 p-10 rounded-[28px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
              <PricingHeader tier="스타터" price="무료" sub="영원히 무료" />
              <div className="h-px bg-white/[0.07] mb-7" />
              <PricingFeatures items={[
                { on: true,  text: 'AI 자동화 월 20회' },
                { on: true,  text: '기본 앱 5개 연동' },
                { on: true,  text: '이메일 지원' },
                { on: false, text: '고급 AI 기능' },
                { on: false, text: '팀 기능' },
              ]} />
              <GhostBtn full>무료로 시작</GhostBtn>
            </div>

            <div className="p-card reveal reveal-d1 flex-1 p-10 rounded-[28px] relative border border-brand/35 bg-brand/[0.08] backdrop-blur-2xl">
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand to-violet rounded-full py-[5px] px-[18px] text-[11px] font-bold text-white font-['Space_Grotesk'] tracking-[0.5px] whitespace-nowrap">
                가장 인기
              </div>
              <PricingHeader tier="프로" price="₩19,900" sub="월 / 인당" />
              <div className="h-px bg-brand/25 mb-7" />
              <PricingFeatures accent items={[
                { on: true, text: 'AI 자동화 무제한' },
                { on: true, text: '앱 연동 무제한' },
                { on: true, text: 'GPT-4o 고급 AI' },
                { on: true, text: '팀 기능 (최대 10명)' },
                { on: true, text: '우선 고객 지원' },
              ]} />
              <PrimaryBtn full>14일 무료 체험</PrimaryBtn>
            </div>

            <div className="p-card reveal reveal-d2 flex-1 p-10 rounded-[28px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
              <PricingHeader tier="엔터프라이즈" price="맞춤" sub="규모에 맞게 조정" />
              <div className="h-px bg-white/[0.07] mb-7" />
              <PricingFeatures items={[
                { on: true, text: '모든 프로 기능 포함' },
                { on: true, text: '전용 AI 모델 훈련' },
                { on: true, text: '온프레미스 배포' },
                { on: true, text: 'SLA 99.99% 보장' },
                { on: true, text: '전담 CS 매니저' },
              ]} />
              <GhostBtn full>영업팀 문의</GhostBtn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-[120px] px-[60px] text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,rgba(108,99,255,0.12)_0%,transparent_70%)]" />
          <div className="relative z-[2]">
            <h2 className="reveal text-[clamp(40px,5vw,72px)] font-black tracking-[-2px] leading-[1.05] mb-5 break-keep text-[#f0efff]">
              지금 바로<br/><span className="g-text">무료로 시작하세요</span>
            </h2>
            <p className="reveal reveal-d1 text-lg text-[rgba(240,239,255,0.45)] mb-11 break-keep">
              신용카드 불필요 · 14일 무료 체험 · 언제든 취소 가능
            </p>
            <div className="reveal reveal-d2 flex gap-4 justify-center flex-wrap">
              <PrimaryBtn lg>무료로 시작하기 →</PrimaryBtn>
              <GhostBtn lg>데모 예약</GhostBtn>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-[120px] border-t border-white/[0.06]">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-[6px] flex items-center justify-center bg-gradient-to-br from-brand to-violet">
                <LogoIcon size={13} />
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-[15px] tracking-[0.5px] text-[#f0efff]">NOVA</span>
            </div>
            <div className="flex gap-8 flex-wrap items-center">
              {['개인정보처리방침','이용약관','문의하기'].map(t => (
                <a key={t} href="#" className="text-[rgba(240,239,255,0.3)] text-sm no-underline hover:text-[rgba(240,239,255,0.7)] transition-colors duration-200">{t}</a>
              ))}
              <span className="text-[rgba(240,239,255,0.15)] text-sm">© 2026 Nova AI, Inc.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
