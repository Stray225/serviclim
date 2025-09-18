'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children }){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    gsap.fromTo(el, { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 80%' }
    });
  },[]);
  return <div ref={ref} className="reveal">{children}</div>;
}
