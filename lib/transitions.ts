import { Variants } from "framer-motion";
import { DURATION, EASING } from "./animations";

/**
 * SAYFA GEÇİŞ TİPLERİ
 * PRD: "Akışkan Geçiş - Sert yükleme YOK, morphing veya slide animasyonları"
 */

/**
 * PAGE FADE - Basit fade geçiş
 */
export const pageFade: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.decelerate,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * PAGE SLIDE LEFT - Sola kayarak geçiş (yeni sayfa soldan gelir)
 */
export const pageSlideLeft: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/**
 * PAGE SLIDE RIGHT - Sağa kayarak geçiş (yeni sayfa sağdan gelir)
 */
export const pageSlideRight: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/**
 * PAGE SLIDE UP - Yukarı kayarak geçiş (yeni sayfa alttan gelir)
 */
export const pageSlideUp: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/**
 * PAGE ZOOM - Zoom geçiş (morphing benzeri)
 */
export const pageZoom: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/**
 * PAGE MORPH - Morphing geçiş (scale + fade kombinasyonu)
 */
export const pageMorph: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: DURATION.slower,
      ease: EASING.smooth,
    },
  },
  exit: {
    scale: 1.1,
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      duration: DURATION.slow,
      ease: EASING.accelerate,
    },
  },
};

/**
 * PAGE ROTATE - Dönerek geçiş (3D efekti)
 */
export const pageRotate: Variants = {
  initial: {
    rotateY: 90,
    opacity: 0,
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slower,
      ease: EASING.smooth,
    },
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.accelerate,
    },
  },
};

/**
 * SECTION TRANSITION - Bölüm geçişleri (sayfa içi)
 */
export const sectionTransition: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.decelerate,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

/**
 * MODAL TRANSITION - Modal açılma/kapanma
 */
export const modalTransition: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * BACKDROP TRANSITION - Modal backdrop animasyonu
 */
export const backdropTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.decelerate,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * DRAWER TRANSITION - Drawer (yan menü) geçişi
 */
export const drawerTransition = (direction: "left" | "right" = "right"): Variants => ({
  initial: {
    x: direction === "left" ? "-100%" : "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    x: direction === "left" ? "-100%" : "100%",
    opacity: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
});

/**
 * ACCORDION TRANSITION - Accordion açılma/kapanma
 */
export const accordionTransition: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.decelerate,
    },
  },
};

/**
 * TOOLTIP TRANSITION - Tooltip animasyonu
 */
export const tooltipTransition: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -10,
    transition: {
      duration: DURATION.instant,
      ease: EASING.accelerate,
    },
  },
};

/**
 * DEFAULT PAGE TRANSITION - Varsayılan sayfa geçişi (PRD uyumlu)
 * Kullanım: Robotik, AI, Enerji sayfaları için
 */
export const defaultPageTransition = pageMorph;
