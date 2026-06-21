import Eyebrow from '../ui/Eyebrow'
import PrimaryBtn from '../ui/PrimaryBtn'
import GhostBtn from '../ui/GhostBtn'

function PricingHeader({ tier, price, sub }) {
  return (
    <div className="mb-7">
      <div className="text-[13px] text-[rgba(240,239,255,0.45)] font-['Space_Grotesk'] tracking-[1px] uppercase mb-2.5">{tier}</div>
      <div className="text-[36px] sm:text-[44px] font-black font-['Space_Grotesk'] tracking-[-1px] leading-none text-[#f0efff]">{price}</div>
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-[120px] px-6 md:px-12 lg:px-[120px] relative overflow-hidden">
      <div className="absolute top-[20%] left-[30%] w-[600px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(ellipse,rgba(108,99,255,0.1)_0%,transparent_70%)]" />
      <div className="text-center mb-14 md:mb-[72px]">
        <Eyebrow className="reveal">PRICING</Eyebrow>
        <h2 className="reveal reveal-d1 text-[clamp(30px,6vw,56px)] font-black tracking-[-1px] sm:tracking-[-1.5px] mt-4 mb-4 text-[#f0efff]">
          합리적인 <span className="g-text">가격 플랜</span>
        </h2>
        <p className="reveal reveal-d2 text-[15px] sm:text-[17px] text-[rgba(240,239,255,0.45)] break-keep">
          모든 플랜에 14일 무료 체험이 포함됩니다. 신용카드 불필요.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-stretch max-w-[980px] mx-auto">
        <div className="p-card reveal flex-1 p-8 sm:p-10 rounded-[28px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
          <PricingHeader tier="스타터" price="무료" sub="영원히 무료" />
          <div className="h-px bg-white/[0.07] mb-7" />
          <PricingFeatures items={[
            { on: true, text: 'AI 자동화 월 20회' },
            { on: true, text: '기본 앱 5개 연동' },
            { on: true, text: '이메일 지원' },
            { on: false, text: '고급 AI 기능' },
            { on: false, text: '팀 기능' },
          ]} />
          <GhostBtn full>무료로 시작</GhostBtn>
        </div>

        <div className="p-card pro-card-glow reveal reveal-d1 flex-1 p-8 sm:p-10 rounded-[28px] relative border border-brand/35 bg-brand/[0.08] backdrop-blur-2xl">
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

        <div className="p-card reveal reveal-d2 flex-1 p-8 sm:p-10 rounded-[28px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
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
  )
}
