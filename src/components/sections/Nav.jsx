import LogoIcon from '../ui/LogoIcon'
import PrimaryBtn from '../ui/PrimaryBtn'

export default function Nav({ navRef }) {
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 h-[68px] backdrop-blur-2xl border-b border-white/[0.06]"
      style={{ backgroundColor: 'rgba(8,8,16,0.72)' }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-[7px] flex items-center justify-center bg-gradient-to-br from-[#1a1929] to-[#0d0c1c]">
          <LogoIcon />
        </div>
        <span className="font-['Space_Grotesk'] font-bold text-[17px] tracking-[0.5px] text-[#f0efff]">NOVA</span>
      </div>
      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
        {[['#how', '작동방식'], ['#features', '기능'], ['#gallery', '화면'], ['#pricing', '가격']].map(([href, label]) => (
          <li key={label}>
            <a href={href} className="text-[rgba(240,239,255,0.55)] text-sm font-medium no-underline hover:text-[#f0efff] transition-colors duration-200">{label}</a>
          </li>
        ))}
      </ul>
      <PrimaryBtn>무료 체험 시작</PrimaryBtn>
    </nav>
  )
}
