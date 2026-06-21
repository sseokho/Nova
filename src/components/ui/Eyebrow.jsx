export default function Eyebrow({ children, className = '' }) {
  return (
    <span className={`text-[13px] tracking-[0.5px] bg-gradient-to-r from-brand to-violet bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}
