import React, { useState, useEffect, useRef } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  children: React.ReactNode;
  rootMargin?: string;
}

export function LazyVideo({
  children,
  rootMargin = "300px",
  className,
  autoPlay,
  preload = "metadata",
  ...props
}: LazyVideoProps) {
  const [isNearViewport, setIsNearViewport] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLoadedSources = useRef(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            // Se já foi carregado e tem autoPlay, inicia a reprodução ao reentrar
            if (hasLoadedSources.current && autoPlay && videoEl.paused) {
              videoEl.play().catch((err) => {
                console.warn("Autoplay falhou ao retornar ao viewport:", err);
              });
            }
          } else {
            // Pausa a reprodução ao sair da tela para poupar CPU/GPU
            if (videoEl && !videoEl.paused) {
              videoEl.pause();
            }
          }
        });
      },
      {
        rootMargin,
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, autoPlay]);

  // Efeito executado assim que o vídeo entra próximo ao viewport
  useEffect(() => {
    const videoEl = videoRef.current;
    if (isNearViewport && videoEl) {
      if (!hasLoadedSources.current) {
        hasLoadedSources.current = true;
        // Força o navegador a carregar as novas fontes injetadas no DOM
        videoEl.load();
      }
      if (autoPlay) {
        videoEl.play().catch((err) => {
          console.warn("Autoplay bloqueado pelo navegador:", err);
        });
      }
    }
  }, [isNearViewport, autoPlay]);

  const currentPreload = isNearViewport ? preload : "none";

  return (
    <video
      ref={videoRef}
      className={className}
      preload={currentPreload}
      autoPlay={autoPlay}
      {...props}
    >
      {isNearViewport ? children : null}
    </video>
  );
}
