"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
  Reveal: anima o conteúdo quando entra na viewport.
  Usa IntersectionObserver (leve, nativo) em vez de lib de animação.
  O CSS do efeito vive em globals.css ([data-reveal]).
*/
type RevealProps = {
  children: ReactNode;
  /** Atraso em ms para escalonar elementos em sequência */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // anima uma vez só
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
