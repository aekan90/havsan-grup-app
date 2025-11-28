"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    // Preloader'ı sadece ilk ziyarette göster
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      setShowPreloader(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const cards = [
    {
      id: "robotik",
      title: "Robotik",
      subtitle: "Kodlama Eğitimi",
      description: "Çocuklar için robotik kodlama ve STEM eğitimleri",
      color: "from-robotik-blue to-robotik-navy",
      glowColor: "rgba(66, 133, 244, 0.3)",
      route: "/robotik",
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
      logo: "/assets/logos/LOGO-BASE.png adlı dosyanın kopyası.png",
    },
    {
      id: "ai",
      title: "Yapay Zeka",
      subtitle: "Kurumsal Çözümler",
      description: "Google Workspace & AI destekli yazılım çözümleri",
      color: "from-ai-blue via-ai-purple to-ai-coral",
      glowColor: "rgba(78, 133, 235, 0.3)",
      route: "/yapay-zeka",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
      logo: "/assets/logos/yapayzeka_logo-removebg-preview.png",
    },
    {
      id: "enerji",
      title: "Enerji",
      subtitle: "Yenilenebilir Çözümler",
      description: "GES, termal izleme ve güç takip sistemleri",
      color: "from-enerji-mustard via-enerji-orange1 to-enerji-vermillion",
      glowColor: "rgba(243, 194, 66, 0.3)",
      route: "/enerji",
      bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      logo: "/assets/logos/LOGO-BASE-BEYAZ.png adlı dosyanın kopyası.png",
    },
  ];

  const handleCardClick = (cardId: string, route: string) => {
    console.log(`Kart tıklandı: ${cardId}`);
    console.log(`Route: ${route}`);
    // TODO: Gerçek routing eklenecek
  };

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen w-full bg-black"
      >
        {/* Desktop: 3'lü split (33.3% her biri) */}
        <div className="hidden md:flex h-screen w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
                hoveredCard === null
                  ? "flex-1"
                  : hoveredCard === card.id
                  ? "flex-[1.5]"
                  : "flex-[0.75]"
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id, card.route)}
            >
              {/* Background Image with Animation */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                  }}
                  animate={{
                    scale: hoveredCard === card.id ? 1.2 : 1.1,
                    x: card.id === "robotik" ? [0, -25, 0] : card.id === "ai" ? [0, 20, 0] : [0, 18, 0],
                    y: card.id === "robotik" ? [0, 18, 0] : card.id === "ai" ? [0, -25, 0] : [0, -20, 0],
                  }}
                  transition={{
                    scale: { duration: 0.6, ease: "easeOut" },
                    x: { duration: card.id === "enerji" ? 12 : card.id === "ai" ? 10 : 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: card.id === "enerji" ? 14 : card.id === "ai" ? 11 : 9, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              </div>

              {/* Filter Overlay */}
              <div 
                className="absolute inset-0 transition-all duration-700"
                style={{
                  backgroundColor: hoveredCard === card.id ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.6)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-30 transition-opacity duration-500 ${
                  hoveredCard === card.id ? "opacity-50" : ""
                }`}
              />

              {/* Glow Effect on Hover */}
              <AnimatePresence>
                {hoveredCard === card.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 100px ${card.glowColor}, inset 0 0 50px ${card.glowColor}`,
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Border Animation on Hover */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent"
                animate={{
                  borderColor:
                    hoveredCard === card.id
                      ? ["rgba(255,255,255,0)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0)"]
                      : "rgba(255,255,255,0)",
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredCard === card.id ? Infinity : 0,
                  ease: "linear",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                <motion.h2
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white transition-all duration-500 ${
                    hoveredCard === card.id ? "scale-110" : "scale-100"
                  }`}
                  animate={{
                    textShadow:
                      hoveredCard === card.id
                        ? [
                            `0 0 20px ${card.glowColor}`,
                            `0 0 40px ${card.glowColor}`,
                            `0 0 20px ${card.glowColor}`,
                          ]
                        : "0 0 0px rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 1.5, repeat: hoveredCard === card.id ? Infinity : 0 }}
                >
                  {card.title}
                </motion.h2>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-2 text-center"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: hoveredCard === card.id ? 1 : 0.7 }}
                >
                  {card.subtitle}
                </motion.p>

                <AnimatePresence>
                  {hoveredCard === card.id && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm md:text-base text-gray-400 text-center max-w-xs mt-4"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Click Indicator */}
                <AnimatePresence>
                  {hoveredCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-12 flex items-center gap-2 text-white/60 text-sm"
                    >
                      <span>Keşfet</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider Line (except last card) */}
              {index < cards.length - 1 && (
                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile: Stack layout (100vh fit) */}
        <div className="md:hidden h-screen w-full flex flex-col">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative cursor-pointer overflow-hidden flex-1"
              onClick={() => handleCardClick(card.id, card.route)}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image with Animation */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                  }}
                  animate={{
                    scale: [1.1, 1.15, 1.1],
                    x: card.id === "robotik" ? [0, -18, 0] : card.id === "ai" ? [0, 15, 0] : [0, 12, 0],
                    y: card.id === "robotik" ? [0, 15, 0] : card.id === "ai" ? [0, -18, 0] : [0, -15, 0],
                  }}
                  transition={{
                    scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: card.id === "enerji" ? 11 : card.id === "ai" ? 8 : 7, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: card.id === "enerji" ? 13 : card.id === "ai" ? 9 : 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              </div>

              {/* Filter Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">{card.title}</h2>
                <p className="text-lg text-gray-200 text-center drop-shadow-md">{card.subtitle}</p>
                <p className="text-sm text-gray-300 text-center mt-3 max-w-xs drop-shadow-md">
                  {card.description}
                </p>
              </div>

              {/* Divider Line (except last card) */}
              {index < cards.length - 1 && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
