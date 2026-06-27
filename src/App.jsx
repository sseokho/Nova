import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Partners from './components/sections/Partners'
import HowItWorks, { HOW_STEPS } from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import Gallery from './components/sections/Gallery'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const rootRef = useRef(null)
  const navRef = useRef(null)
  const heroBgRef = useRef(null)
  const heroPhoneRef = useRef(null)
  const marqueeRef = useRef(null)
  const hScrollRef = useRef(null)
  const hTrackRef = useRef(null)

  useLayoutEffect(() => {
    const windowListeners = []
    const addWindowListener = (event, handler, options) => {
      window.addEventListener(event, handler, options)
      windowListeners.push({ event, handler })
    }

    const ctx = gsap.context(() => {

      /* 1 ── Hero entrance */
      gsap.set(heroPhoneRef.current, { opacity: 0 })
      gsap.timeline({ delay: 0.1 })
        .from('.hero-badge',  { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' })
        .from('.hero-title',  { y: 44, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.35')
        .from('.hero-desc',   { y: 28, opacity: 0, duration: 0.75, ease: 'power2.out' }, '-=0.5')
        .from('.hero-cta',    { y: 22, opacity: 0, duration: 0.6,  ease: 'power2.out' }, '-=0.45')
        .from('.hero-stats',  { y: 18, opacity: 0, duration: 0.6,  ease: 'power2.out' }, '-=0.4')
        .add(() => {
          const phone = heroPhoneRef.current
          const glow  = phone.querySelector('.hero-phone-glow')

          const pt = gsap.timeline()

          // ① 글로우 폭발
          pt.fromTo(glow,
            { scale: 0, opacity: 0 },
            { scale: 3.2, opacity: 1, duration: 0.5, ease: 'expo.out' }
          )

          // ② 폰 블러 + 3D 플라이인
          pt.fromTo(phone,
            { opacity: 0, scale: 0.28, rotationY: -62, rotationX: 24,
              z: -700, filter: 'blur(24px)', transformPerspective: 1400,
              transformOrigin: '50% 65%' },
            { opacity: 1, scale: 1.08, rotationY: 4, rotationX: -3,
              z: 0, filter: 'blur(0px)',
              duration: 1.0, ease: 'expo.out' },
            '-=0.2'
          )

          // ③ 일래스틱 바운스 정착
          pt.to(phone,
            { scale: 1, rotationY: 0, rotationX: 0,
              duration: 0.9, ease: 'elastic.out(1, 0.45)' }
          )

          // ④ 글로우 안착
          pt.to(glow,
            { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.7'
          )
        }, 0.25)

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
      gsap.to(marqueeRef.current, { x: '-50%', duration: 28, ease: 'none', repeat: -1 })

      /* 6 ── Horizontal scroll "How it works" */
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const track = hTrackRef.current
        const hTween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: hScrollRef.current,
            pin: true, scrub: 1,
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const activeIdx = Math.min(HOW_STEPS.length - 1, Math.floor(self.progress * HOW_STEPS.length))
              self.trigger.querySelectorAll('[data-step-dot]').forEach((dot, i) => {
                const active = i === activeIdx
                gsap.to(dot, {
                  opacity: active ? 1 : 0.3,
                  backgroundColor: active ? '#a78bfa' : 'rgba(255,255,255,0.3)',
                  duration: 0.25,
                  overwrite: 'auto',
                })
              })
            },
          },
        })

        gsap.utils.toArray('.h-panel').forEach(panel => {
          const content = panel.querySelector('.panel-content')
          const visual  = panel.querySelector('.panel-visual')
          if (content) gsap.fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left 85%', toggleActions: 'play none none none' } })
          if (visual)  gsap.fromTo(visual,  { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1,   ease: 'power2.out', scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left 70%', toggleActions: 'play none none none' } })
        })

        return () => { if (hTween.scrollTrigger) hTween.scrollTrigger.kill(); hTween.kill() }
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.set(hTrackRef.current, { x: 0, clearProps: 'transform' })
        gsap.utils.toArray('.h-panel').forEach(panel => {
          const content = panel.querySelector('.panel-content')
          const visual  = panel.querySelector('.panel-visual')
          if (content) gsap.fromTo(content, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: panel, start: 'top 82%', toggleActions: 'play none none none' } })
          if (visual)  gsap.fromTo(visual,  { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.12, scrollTrigger: { trigger: panel, start: 'top 78%', toggleActions: 'play none none none' } })
        })
      })

      /* 7 ── Gallery phones pop-in */
      const gallerySection = rootRef.current.querySelector('#gallery')
      if (gallerySection) {
        gsap.fromTo(gsap.utils.toArray('.gallery-pop', gallerySection),
          { scale: 0.45, y: 120, opacity: 0, rotationZ: (i) => i === 0 ? -18 : i === 2 ? 18 : 0 },
          { scale: 1, y: 0, opacity: 1, rotationZ: 0, duration: 1.1, ease: 'back.out(1.9)',
            stagger: { amount: 0.25, from: 'center' },
            scrollTrigger: { trigger: gallerySection, start: 'top 65%', toggleActions: 'play none none none' } }
        )
      }

      /* 8 ── Gallery phones hover — pop forward */
      gsap.utils.toArray('.gallery-pop').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { z: 100, scale: 1.06, y: -14, zIndex: 10, duration: 0.4, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { z: 0, scale: 1, y: 0, zIndex: 1, duration: 0.5, ease: 'power2.out' })
        })
      })

      /* 9 ── Card hover: feat-card 3D tilt + lift, p-card simple lift */
      gsap.utils.toArray('.feat-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width  - 0.5
          const y = (e.clientY - r.top)  / r.height - 0.5
          gsap.to(card, { rotateX: -y * 14, rotateY: x * 14, y: -10, scale: 1.025, transformPerspective: 900, duration: 0.35, ease: 'power2.out', overwrite: 'auto' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, scale: 1, duration: 0.55, ease: 'power2.out', overwrite: 'auto' })
        })
      })
      gsap.utils.toArray('.p-card').forEach(card => {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' }))
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0,  duration: 0.4, ease: 'power2.out' }))
      })

      /* 9 ── Scroll progress bar */
      ScrollTrigger.create({
        start: 0, end: 'max',
        onUpdate: (self) => gsap.set('.scroll-progress', { scaleX: self.progress }),
      })

      /* 10 ── Stat count-up */
      rootRef.current.querySelectorAll('[data-count]').forEach(el => {
        const target  = parseFloat(el.dataset.count)
        const suffix  = el.dataset.suffix  || ''
        const prefix  = el.dataset.prefix  || ''
        const decimal = parseInt(el.dataset.decimal || '0')
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target, duration: 2.2, ease: 'power2.out',
          onUpdate: () => {
            const n = decimal > 0 ? obj.val.toFixed(decimal) : Math.round(obj.val).toLocaleString()
            el.textContent = prefix + n + suffix
          },
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })

      /* 11 ── Float / pulse animations (replaces CSS keyframes) */

      // Hero PC mockup float
      const pcMockup = rootRef.current.querySelector('.animate-float-pc')
      if (pcMockup) gsap.to(pcMockup, { y: -16, duration: 4, ease: 'sine.inOut', repeat: -1, yoyo: true })

      // Hero phone floats
      gsap.utils.toArray('.animate-float-b', rootRef.current).forEach((el, i) => {
        gsap.set(el, { rotation: -4 })
        gsap.to(el, { y: -14, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: i * 0.8 })
      })

      // Gallery phone floats
      const gDefs = [
        { cls: '.animate-float-g1', rot: -7, y: -12, dur: 3    },
        { cls: '.animate-float-g2', rot:  1, y: -16, dur: 2.75 },
        { cls: '.animate-float-g3', rot:  7, y: -10, dur: 3.25 },
      ]
      gDefs.forEach(({ cls, rot, y, dur }, i) => {
        const el = rootRef.current.querySelector(cls)
        if (el) {
          gsap.set(el, { rotation: rot })
          gsap.to(el, { y, duration: dur, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: i * 0.5 })
        }
      })

      // Hero glow pulse
      gsap.utils.toArray('.hero-phone-glow', rootRef.current).forEach(el =>
        gsap.fromTo(el,
          { opacity: 0.45, scale: 1 },
          { opacity: 0.85, scale: 1.1, duration: 2.5, ease: 'sine.inOut', repeat: -1, yoyo: true }
        )
      )

      // Active status dot pulse (Gallery)
      gsap.utils.toArray('.animate-pulse-glow', rootRef.current).forEach(el =>
        gsap.to(el, { opacity: 0.3, scale: 0.75, duration: 1, ease: 'sine.inOut', repeat: -1, yoyo: true })
      )

    }, rootRef)

    /* 11 ── Custom cursor (window-level, tracked separately) */
    const cursorDot  = rootRef.current.querySelector('.cursor-dot')
    const cursorRing = rootRef.current.querySelector('.cursor-ring')

    const onMouseMove = (e) => {
      gsap.to(cursorDot,  { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'power2.out' })
      gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.32, ease: 'power2.out' })
    }
    addWindowListener('mousemove', onMouseMove)

    rootRef.current.querySelectorAll('a, button, .feat-card, .p-card').forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(cursorRing, { scale: 1.9, borderColor: 'rgba(108,99,255,0.75)', duration: 0.22 }))
      el.addEventListener('mouseleave', () => gsap.to(cursorRing, { scale: 1,   borderColor: 'rgba(167,139,250,0.4)',  duration: 0.22 }))
    })

    /* 12 ── Hero mouse parallax */
    const heroSection = rootRef.current.querySelector('.hero-section')
    if (heroSection) {
      const onHeroMove = (e) => {
        const { left, top, width, height } = heroSection.getBoundingClientRect()
        const x = (e.clientX - left) / width  - 0.5
        const y = (e.clientY - top)  / height - 0.5
        gsap.to(heroPhoneRef.current, { x: x * 20, duration: 1,   ease: 'power2.out', overwrite: 'auto' })
        gsap.to(heroBgRef.current,    { x: x * -30, y: y * -18, duration: 1.2, ease: 'power2.out', overwrite: 'auto' })
      }
      const onHeroLeave = () => {
        gsap.to(heroPhoneRef.current, { x: 0,    duration: 1,   ease: 'power2.out', overwrite: 'auto' })
        gsap.to(heroBgRef.current,    { x: 0, y: 0, duration: 1.2, ease: 'power2.out', overwrite: 'auto' })
      }
      heroSection.addEventListener('mousemove', onHeroMove)
      heroSection.addEventListener('mouseleave', onHeroLeave)
    }

    return () => {
      ctx.revert()
      windowListeners.forEach(({ event, handler }) => window.removeEventListener(event, handler))
    }
  }, [])

  return (
    <div ref={rootRef}>
      {/* Overlays */}
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="scroll-progress" />
      <div className="noise-overlay" />

      <Nav navRef={navRef} />
      <div className="min-h-screen relative">
        <Hero heroBgRef={heroBgRef} heroPhoneRef={heroPhoneRef} />
        <Partners marqueeRef={marqueeRef} />
        <HowItWorks hScrollRef={hScrollRef} hTrackRef={hTrackRef} />
        <Features />
        <Gallery />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
