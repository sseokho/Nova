import LogoIcon from '../ui/LogoIcon'

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-[120px] border-t border-white/[0.06]">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left flex-wrap gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-[6px] flex items-center justify-center bg-gradient-to-br from-brand to-violet">
            <LogoIcon size={13} />
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-[15px] tracking-[0.5px] text-[#f0efff]">NOVA</span>
        </div>
        <div className="flex gap-5 sm:gap-8 flex-wrap items-center justify-center">
          {['개인정보처리방침', '이용약관', '문의하기'].map(t => (
            <a key={t} href="#" className="text-[rgba(240,239,255,0.3)] text-sm no-underline hover:text-[rgba(240,239,255,0.7)] transition-colors duration-200">{t}</a>
          ))}
          <span className="text-[rgba(240,239,255,0.15)] text-sm">© 2026 Nova AI, Inc.</span>
        </div>
      </div>
    </footer>
  )
}
