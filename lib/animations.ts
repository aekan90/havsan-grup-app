import { Variants } from "framer-motion";

/**
 * GOOGLE FX Easing Fonksiyonları
 * Material Design motion principles'a uygun
 */
export const EASING = {
  // Standard easing - genel kullanım
  standard: [0.4, 0.0, 0.2, 1],
  
  // Deceleration easing - elementler giriş yaparken
  decelerate: [0.0, 0.0, 0.2, 1],
  
  // Acceleration easing - elementler çıkış yaparken
  accelerate: [0.4, 0.0, 1, 1],
  
  // Sharp easing - hızlı, keskin animasyonlar
  sharp: [0.4, 0.0, 0.6, 1],
  
  // Smooth easing - yumuşak, akıcı animasyonlar
  smooth: [0.16, 1, 0.3, 1],
} as const;

/**
 * DURATION - Animasyon süreleri (ms)
 */
export const DURATION = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
} as const;

/**
 * FADE IN - Fade animasyonu
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
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
 * FADE IN UP - Aşağıdan yukarı fade
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * FADE IN DOWN - Yukarıdan aşağı fade
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * SCALE IN - Ölçekleme animasyonu
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * SLIDE IN LEFT - Soldan kayarak giriş
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

/**
 * SLIDE IN RIGHT - Sağdan kayarak giriş
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

/**
 * ZOOM IN - Zoom animasyonu
 */
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

/**
 * STAGGER CONTAINER - Çocuk elementler için kademeli animasyon
 * @param staggerDelay - Her çocuk arasındaki gecikme (saniye)
 */
export const staggerContainer = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: staggerDelay * 0.5,
      staggerDirection: -1,
    },
  },
});

/**
 * STAGGER ITEM - Stagger container içindeki çocuk elementler için
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/**
 * GLOW PULSE - Parıltı efekti (Google FX)
 */
export const glowPulse: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * FLOAT - Yüzen animasyon
 */
export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * ROTATE - Döndürme animasyonu
 */
export const rotate: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * BLUR IN - Bulanık girişten keskin çıkışa
 */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

/**
 * CARD HOVER - Kart hover animasyonu
 */
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: DURATION.instant,
      ease: EASING.sharp,
    },
  },
};

/**
 * BUTTON VARIANTS - Buton animasyonları
 */
export const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: DURATION.instant,
      ease: EASING.sharp,
    },
  },
};
