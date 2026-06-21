export default function GhostBtn({ children, full = false, lg = false, className = '' }) {
  return (
    <button className={[
      full ? 'w-full' : '',
      lg
        ? 'px-7 sm:px-8 md:px-9 py-[14px] sm:py-[16px] md:py-[18px] text-sm sm:text-base'
        : 'px-6 sm:px-7 md:px-9 py-[12px] md:py-[14px] text-sm',
      'font-semibold text-[rgba(240,239,255,0.7)] cursor-pointer rounded-full',
      'border border-white/[0.15] bg-white/[0.04]',
      'transition-all duration-[250ms] hover:border-violet/50 hover:bg-brand/[0.08]',
      className,
    ].join(' ')}>
      {children}
    </button>
  )
}
