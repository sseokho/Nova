export default function PrimaryBtn({ children, full = false, lg = false, className = '' }) {
  return (
    <button className={[
      full ? 'w-full' : '',
      lg
        ? 'px-8 sm:px-10 md:px-12 py-[14px] sm:py-[16px] md:py-[18px] text-sm sm:text-base'
        : 'px-6 sm:px-7 md:px-9 py-[12px] md:py-[14px] text-sm',
      'font-bold text-white border-0 cursor-pointer rounded-full',
      'bg-gradient-to-br from-brand via-violet to-crystal',
      'transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(108,99,255,0.55)]',
      className,
    ].join(' ')}>
      {children}
    </button>
  )
}
