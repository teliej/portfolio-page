// import React, { useState, useRef, useEffect } from "react";
// import { motion, useAnimation, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";


// export default function AuraPage() {
//     const shouldReduceMotion = useReducedMotion();
//     const { scrollYProgress } = useScroll();

//     // colorTemp: transitions from cool morning to warm evening as you scroll
//     const colorTemp = useTransform(
//       scrollYProgress,
//       [0, 0.5, 1],
//       ["#E6F7FF", "#EDE7FF", "#FFF4E6"] // pale blue -> lavender -> warm pearl
//     );

//     // orb scale + opacity reacts to scroll; smoothed by spring
//     const orbScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 0.95]);
//     const orbOpacityRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.36, 0.18]);
//     const orbScale = useSpring(orbScaleRaw, { stiffness: 80, damping: 20 });
//     const orbOpacity = useSpring(orbOpacityRaw, { stiffness: 80, damping: 25 });

//     // subtle vertical float on the diffuser
//     const floatY = shouldReduceMotion ? 0 : [0, -8, 0];










//   type Mood = "dawn" | "forest" | "amber";
//   const [mood, setMood] = useState<Mood>("dawn");
//   // const { scrollYProgress } = useScroll();

//   // Map scroll to hue rotation (0deg to 120deg)
//   const hueShift = useTransform(scrollYProgress, [0, 1], [0, 120]);

//   // Define palette tones for each mood
//   const moodStyles = {
//     dawn: {
//       title: "Where Morning Breathes Calm.",
//       orb: "from-blue-400/20 to-cyan-300/20",
//       glow: "bg-blue-300/20",
//       hue: 0,
//     },
//     forest: {
//       title: "A Whisper from the Green Within.",
//       orb: "from-emerald-400/20 to-lime-300/20",
//       glow: "bg-green-400/20",
//       hue: 90,
//     },
//     amber: {
//       title: "Warmth that Learns Your Mood.",
//       orb: "from-amber-400/20 to-orange-300/20",
//       glow: "bg-amber-300/20",
//       hue: 45,
//     },
//   };

//   const active = moodStyles[mood];

//   // Dynamic hue rotation (scroll + user mood)
//   const [scrollHue, setScrollHue] = useState(0);
//   useEffect(() => {
//     const unsubscribe = hueShift.on("change", (v) => setScrollHue(v));
//     return () => unsubscribe();
//   }, [hueShift]);

//   const finalHue = scrollHue + active.hue;











//   const videoRef = useRef<HTMLVideoElement>(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     // Fade in–out continuously for a natural mist breathing feel
//     controls.start({
//       opacity: 1,
//       transition: {
//         duration: 8, // total loop time
//         ease: "easeIn",
//       },
//     });
//   }, [controls]);





//   const imageControls = useAnimation();
//   const [highlightIndex, setHighlightIndex] = useState(-1);
//   const words = ["This", "animation"];

//   useEffect(() => {
//     const runAnimation = async () => {
//       // 1️⃣ Animate image: grow → shrink
//       await imageControls.start({
//         scale: [1, 1.3, 1],
//         transition: { duration: 2, delay: 5, ease: "easeInOut" },
//       });

//       // 2️⃣ Highlight words one after another
//       for (let i = 0; i < words.length; i++) {
//         setHighlightIndex(i);
//         await new Promise((r) => setTimeout(r, 5000));
//       }
//     };

//     runAnimation();
//   }, []);




//   return (
//     <motion.div
//       className="min-h-screen w-full overflow-hidden text-white font-sans transition-all duration-700"
//       style={{ filter: `hue-rotate(${finalHue}deg)` }}
//     >
//       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
//       </link>



//       {/* Hero Section */}
//       <section
//         aria-label="AURA hero - smart scent diffuser"
//         className="relative overflow-hidden bg-gradient-to-b from-[rgba(245,247,250,1)] to-[rgba(14,19,22,1)] min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-12 lg:px-24 py-16"
//         style={{ backgroundColor: undefined }}
//       >
//         {/* Mist / ambient background (video) */}
//         <motion.video
//           ref={videoRef}
//           className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
//           src="./src/assets/mist.mp4" // light mist clip (replaceable)
//           preload="metadata"
//           initial={{ opacity: 0 }}
//           animate={controls}
//           autoPlay
//           loop
//           muted
//           playsInline
//           aria-hidden
//         />
//         {/* Mist / ambient background (video) */}
//         {/* <motion.video
//           ref={videoRef}
//           className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
//           src="./src/assets/mist2.mp4" // light mist clip (replaceable)
//           preload="metadata"
//           initial={{ opacity: 0 }}
//           animate={controls}
//           autoPlay
//           loop
//           muted
//           playsInline
//           aria-hidden
//         /> */}

//         {/* ambient color overlay that shifts with scroll */}
//         <motion.div
//           style={{ background: colorTemp, mixBlendMode: "overlay", opacity: 0.35 }}
//           className="pointer-events-none absolute inset-0"
//           aria-hidden
//         />

//         {/* Slow expanding orbs (represent diffusion) */}
//         <motion.span
//           style={{ scale: orbScale, opacity: orbOpacity }}
//           className="pointer-events-none absolute left-10 top-20 w-72 h-72 rounded-full bg-[rgba(166,226,204,0.16)] blur-[80px] transform-gpu"
//           aria-hidden
//           animate={shouldReduceMotion ? undefined : { rotate: [0, 12, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.span
//           style={{ scale: orbScale, opacity: orbOpacity }}
//           className="pointer-events-none absolute right-10 bottom-16 w-96 h-96 rounded-full bg-[rgba(237,222,255,0.12)] blur-[110px] transform-gpu"
//           aria-hidden
//           animate={shouldReduceMotion ? undefined : { rotate: [0, -10, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Left / Top: copy (center on mobile) */}
//         <div className="relative      z-10 px-2 sm:px-6 py-6 lg:py-6 lg:pr-12">
//           {/* bg-white/20 backdrop-blur-6xl border border-white/40 shadow-xl rounded-xl */}
//           <motion.h1
//             className="font-playfair text-4xl sm:text-[3.2rem] md:text-[3.8rem] leading-tight text-slate-900 dark:text-white"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2 }}
//             style={{ WebkitFontSmoothing: "antialiased" }}
//           >
//             <span className="block text-[2.1rem] sm:text-[2.5rem] md:text-[3rem] text-slate-700 dark:text-slate-100">AURA</span>
//             <span className="block mt-2 text-2xl sm:text-3xl font-light text-slate-600 dark:text-slate-200">
//               The air that learns you.
//             </span>
//           </motion.h1>

//           <motion.p
//             contentEditable
//             suppressContentEditableWarning
//             className="mt-6 max-w-lg text-base sm:text-lg text-slate-700 dark:text-slate-300"
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.15, duration: 1.1 }}
//           >
//             AURA
//             <span
//               key={0}
//               className={`mx-1 transition-colors duration-300 ${
//                 0 === highlightIndex ? "text-yellow-400" : "text-gray-400"
//               }`}
//             > man </span>
//             adapts to how your space moves — a living diffuser that reads moments and translates them into calm. Not just fragrance, but presence: subtle, intelligent, and always gentle.
//             <span
//               key={1}
//               className={`mx-1 transition-colors duration-300 ${
//                 1 === highlightIndex ? "text-yellow-400" : "text-gray-400"
//               }`}
//             > woman </span>
//           </motion.p>

//           <motion.div
//             className="mt-8 flex items-center gap-4"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.25, duration: 1.1 }}
//           >
//             <button
//               className="rounded-full px-6 py-3 bg-white/90 text-slate-800 font-semibold shadow-md backdrop-blur-sm hover:scale-[1.02] transition-transform"
//               aria-label="Breathe the Future"
//               style={{ WebkitTapHighlightColor: "transparent" }}
//             >
//               Breathe the Future
//             </button>

//             <a
//               className="text-sm text-slate-600 font-semibold hover:underline hidden sm:inline-block"
//               href="#learn"
//               aria-label="Learn more about Aura"
//             >
//               Learn how it listens →
//             </a>
//           </motion.div>

//           {/* micro copy / craft line */}
//           <motion.div
//             className="mt-6 text-xs text-slate-700 font-bold max-w-sm"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             Crafted from recycled aluminum & ceramic. Low-energy diffusion. Hand-tuned scent profiles sourced ethically.
//           </motion.div>
//         </div>

//         {/* Right / Bottom: diffuser visual */}
//         <div className="relative z-10 flex justify-center lg:justify-end items-center px-4 py-6">
//           <motion.div
//             className="relative w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] flex justify-center"
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 1.2 }}
//             aria-hidden={false}
//           >
//             {/* floating device */}
//             <motion.img
//               src="./src/assets/product.png"
//               alt="AURA diffuser"
//               className="w-[15rem] object-fit"
//               animate={shouldReduceMotion ? undefined : { y: floatY }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               loading="lazy"
//             />

//             {/* faint mist overlay (absolute, centered), low opacity for subtlety */}
//             <motion.img
//               src="https://assets.codepen.io/3/mist-small.webp" /* lightweight looped mist gif/webp - replace with shorter loop if needed */
//               alt=""
//               aria-hidden
//               className="pointer-events-none absolute inset-0 w-full object-cover opacity-30 mix-blend-screen rounded-2xl"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 0.28 }}
//               transition={{ delay: 0.6, duration: 1.8 }}
//               loading="lazy"
//             />
//           </motion.div>
//         </div>
//       </section>







//       {/* Mood Selection Section */}
//       <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 py-20">
//         {/* Ambient orbs */}
//         <div className="absolute inset-0 -z-10">
//           <div className={`absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br ${active.orb} blur-[140px] rounded-full`} />
//           <div className={`absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-tr ${active.orb} blur-[160px] rounded-full`} />
//         </div>

//         {/* Mist Video */}
//         <motion.video
//           ref={videoRef}
//           className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
//           src="./src/assets/mist2.mp4" // light mist clip (replaceable)
//           preload="metadata"
//           initial={{ opacity: 0 }}
//           animate={controls}
//           autoPlay
//           loop
//           muted
//           playsInline
//           aria-hidden
//         />

//         {/* Title */}
//         <motion.h1
//           className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           AURA
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-2xl text-gray-300 max-w-2xl leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 1 }}
//         >
//           {active.title}
//         </motion.p>

//         {/* Product Image */}
//         <motion.img
//           src="https://images.unsplash.com/photo-1629810692598-1b16a1ff7177?auto=format&fit=crop&w=800&q=80"
//           alt="AURA Smart Diffuser"
//           className="w-64 sm:w-80 md:w-96 mt-10 drop-shadow-2xl"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 1 }}
//         />

//         {/* Mood Picker */}
//         <div className="flex gap-3 mt-12 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full">
//           {[
//             { id: "dawn", label: "Dawn Mist" },
//             { id: "forest", label: "Forest Whisper" },
//             { id: "amber", label: "Amber Flow" },
//           ].map((opt) => (
//             <button
//               key={opt.id}
//               onClick={() => setMood(opt.id as Mood)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 mood === opt.id
//                   ? "bg-white text-black"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {opt.label}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Mood Learner Section */}
//       <section className="relative py-24 px-6 sm:px-12 md:px-20 text-center">
//         <motion.h2
//           className="text-3xl sm:text-5xl font-bold mb-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           The Mood Learner
//         </motion.h2>

//         <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-16">
//           Scent that senses you — adapting to your rhythm, your moments, and your calm.
//         </p>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-12">
//           {[
//             {
//               icon: "🌬️",
//               title: "Breath Sync",
//               text: "Adjusts scent flow to the rhythm of your environment.",
//             },
//             {
//               icon: "☀️",
//               title: "Circadian Blend",
//               text: "Tunes itself to time of day — refreshing or relaxing as needed.",
//             },
//             {
//               icon: "🔊",
//               title: "Emotive Echo",
//               text: "Reads ambient sound and activity, reacting subtly in aroma.",
//             },
//           ].map((f, i) => (
//             <motion.div
//               key={i}
//               className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:bg-white/10 transition"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-4xl mb-4">{f.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
//               <p className="text-gray-400">{f.text}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Background mist blur */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/5 blur-[180px] rounded-full -z-10" />
//       </section>
//     </motion.div>
//   );
// }






















// import React from "react";
// import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

// /**
//  * AURA Hero — poetic, organic, adaptive.
//  * - responsive layout (stack on mobile, split on desktop)
//  * - mist video background (lightweight loop)
//  * - scroll-driven color temperature and orb breathing
//  * - respects prefers-reduced-motion
//  */

// export default function AuraHero(): JSX.Element {
//   const shouldReduceMotion = useReducedMotion();
//   const { scrollYProgress } = useScroll();

//   // colorTemp: transitions from cool morning to warm evening as you scroll
//   const colorTemp = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     ["#E6F7FF", "#EDE7FF", "#FFF4E6"] // pale blue -> lavender -> warm pearl
//   );

//   // orb scale + opacity reacts to scroll; smoothed by spring
//   const orbScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 0.95]);
//   const orbOpacityRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.36, 0.18]);
//   const orbScale = useSpring(orbScaleRaw, { stiffness: 80, damping: 20 });
//   const orbOpacity = useSpring(orbOpacityRaw, { stiffness: 80, damping: 25 });

//   // subtle vertical float on the diffuser
//   const floatY = shouldReduceMotion ? 0 : [0, -8, 0];

//   return (
//     <section
//       aria-label="AURA hero - smart scent diffuser"
//       className="relative overflow-hidden bg-gradient-to-b from-[rgba(245,247,250,1)] to-[rgba(14,19,22,1)] min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-12 lg:px-24 py-16"
//       style={{ backgroundColor: undefined }}
//     >
//       {/* Mist / ambient background (video) */}
//       <video
//         className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
//         src="https://cdn.pixabay.com/video/2022/12/16/142469-783735732_large.mp4" // light mist clip (replaceable)
//         autoPlay
//         loop
//         muted
//         playsInline
//         aria-hidden
//       />

//       {/* ambient color overlay that shifts with scroll */}
//       <motion.div
//         style={{ background: colorTemp, mixBlendMode: "overlay", opacity: 0.35 }}
//         className="pointer-events-none absolute inset-0"
//         aria-hidden
//       />

//       {/* Slow expanding orbs (represent diffusion) */}
//       <motion.span
//         style={{ scale: orbScale, opacity: orbOpacity }}
//         className="pointer-events-none absolute left-10 top-20 w-72 h-72 rounded-full bg-[rgba(166,226,204,0.16)] blur-[80px] transform-gpu"
//         aria-hidden
//         animate={shouldReduceMotion ? undefined : { rotate: [0, 12, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.span
//         style={{ scale: orbScale, opacity: orbOpacity }}
//         className="pointer-events-none absolute right-10 bottom-16 w-96 h-96 rounded-full bg-[rgba(237,222,255,0.12)] blur-[110px] transform-gpu"
//         aria-hidden
//         animate={shouldReduceMotion ? undefined : { rotate: [0, -10, 0] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Left / Top: copy (center on mobile) */}
//       <div className="relative z-10 px-2 sm:px-6 py-6 lg:py-0 lg:pr-12">
//         <motion.h1
//           className="font-playfair text-4xl sm:text-[3.2rem] md:text-[3.8rem] leading-tight text-slate-900 dark:text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2 }}
//           style={{ WebkitFontSmoothing: "antialiased" }}
//         >
//           <span className="block text-[2.1rem] sm:text-[2.5rem] md:text-[3rem] text-slate-700 dark:text-slate-100">AURA</span>
//           <span className="block mt-2 text-2xl sm:text-3xl font-light text-slate-600 dark:text-slate-200">
//             The air that learns you.
//           </span>
//         </motion.h1>

//         <motion.p
//           className="mt-6 max-w-lg text-base sm:text-lg text-slate-600 dark:text-slate-300"
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, duration: 1.1 }}
//         >
//           AURA adapts to how your space moves — a living diffuser that reads moments and translates them into calm. Not just fragrance, but presence: subtle, intelligent, and always gentle.
//         </motion.p>

//         <motion.div
//           className="mt-8 flex items-center gap-4"
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.25, duration: 1.1 }}
//         >
//           <button
//             className="rounded-full px-6 py-3 bg-white/90 text-slate-900 font-semibold shadow-md backdrop-blur-sm hover:scale-[1.02] transition-transform"
//             aria-label="Breathe the Future"
//             style={{ WebkitTapHighlightColor: "transparent" }}
//           >
//             Breathe the Future
//           </button>

//           <a
//             className="text-sm text-slate-600 hover:underline hidden sm:inline-block"
//             href="#learn"
//             aria-label="Learn more about Aura"
//           >
//             Learn how it listens →
//           </a>
//         </motion.div>

//         {/* micro copy / craft line */}
//         <motion.div
//           className="mt-6 text-xs text-slate-500 max-w-sm"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           Crafted from recycled aluminum & ceramic. Low-energy diffusion. Hand-tuned scent profiles sourced ethically.
//         </motion.div>
//       </div>

//       {/* Right / Bottom: diffuser visual */}
//       <div className="relative z-10 flex justify-center lg:justify-end items-center px-4 py-6">
//         <motion.div
//           className="relative w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[28rem] flex justify-center"
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 1.2 }}
//           aria-hidden={false}
//         >
//           {/* floating device */}
//           <motion.img
//             src="https://images.unsplash.com/photo-1600185365483-26d7a4f10cf3?auto=format&fit=crop&w=900&q=80"
//             alt="AURA diffuser mockup"
//             className="w-full rounded-2xl shadow-2xl object-cover"
//             animate={shouldReduceMotion ? undefined : { y: floatY }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             loading="lazy"
//           />

//           {/* faint mist overlay (absolute, centered), low opacity for subtlety */}
//           <motion.img
//             src="https://assets.codepen.io/3/mist-small.webp" /* lightweight looped mist gif/webp - replace with shorter loop if needed */
//             alt=""
//             aria-hidden
//             className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen rounded-2xl"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 0.28 }}
//             transition={{ delay: 0.6, duration: 1.8 }}
//             loading="lazy"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }





















// import React from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// export default function PulseStoneHero() {
//   // Track scroll progress (0 → 1)
//   const { scrollYProgress } = useScroll();

//   // Create reactive transforms based on scroll position
//   const pulseOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);
//   const pulseScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
//   const springScale = useSpring(pulseScale, { stiffness: 120, damping: 20 });
//   const springOpacity = useSpring(pulseOpacity, { stiffness: 120, damping: 25 });

//   return (
//     <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-20 py-16">
//       {/* Left: Text Content */}
//       <motion.div
//         className="text-center md:text-left space-y-6 z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 1 }}
//         >
//           A Stone That Breaths Bass.
//         </motion.h1>

//         <motion.p
//           className="text-gray-400 text-lg sm:text-xl max-w-md mx-auto md:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 1 }}
//         >
//           Where silence ends, <span className="text-white font-medium">PulseStone</span> begins — engineered to sound alive.
//         </motion.p>

//         <motion.button
//           className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           transition={{ type: "spring", duration: 0.05 }}
//         >
//           Experience the Pulse
//         </motion.button>
//       </motion.div>

//       {/* Right: Product Visual */}
//       <motion.div
//         className="relative flex justify-center mt-12 md:mt-0"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 1 }}
//       >
//         {/* Scroll-reactive glow */}
//         <motion.div
//           style={{ opacity: springOpacity, scale: springScale }}
//           className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/30 blur-3xl rounded-full"
//         />
//         <motion.img
//           src="./src/assets/unsplash.jpg"
//           alt="PulseStone Mini Speaker"
//           className="relative w-56 sm:w-72 md:w-[22rem] object-contain drop-shadow-2xl"
//           whileHover={{ scale: 1.03, rotate: 1 }}
//           transition={{ type: 'spring', stiffness: 200 }}
//         />
//       </motion.div>

//       {/* Background Accent Glow */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-400/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-10 right-1/3 w-60 h-60 bg-purple-500/10 blur-[150px] rounded-full" />
//       </div>
//     </section>
//   );
// }























// import React from "react";
// import { motion } from "framer-motion";

// export default function ProductPage() {
//   const layers = [
//     {
//       title: "Top Note — Mint Frost",
//       desc: "A sharp, clean burst of mint leaves and frozen citrus. Feels like a deep breath of icy air.",
//       img: "https://picsum.photos/800/600",
//     },
//     {
//       title: "Heart Note — Midnight Cedar",
//       desc: "Smooth wood and crisp night air, balancing freshness with mystery.",
//       img: "https://picsum.photos/800/600",
//     },
//     {
//       title: "Base Note — Cold Musk",
//       desc: "A lingering chill that feels both bold and quiet, leaving a trace of strength behind.",
//       img: "https://picsum.photos/800/600",
//     },
//   ];

//   return (
//     <div className="bg-[#0a0a0a] text-gray-100 overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative h-[100vh] flex flex-col justify-center items-center text-center p-6">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
//           autoPlay
//           loop
//           muted
//           playsInline
//           src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
//         />
//         <div className="relative z-10 max-w-3xl">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl sm:text-7xl font-bold text-white tracking-tight"
//           >
//             Frost Noir
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//             className="mt-4 text-lg sm:text-2xl text-gray-300"
//           >
//             Feel the chill of confidence — where mint meets midnight.
//           </motion.p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 px-6 sm:px-16 text-center bg-gradient-to-b from-[#0a0a0a] to-[#111]">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-5xl font-semibold text-white mb-8"
//           >
//             The Essence of Frost Noir
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-gray-400 leading-relaxed text-lg sm:text-xl"
//           >
//             Frost Noir isn’t just a scent — it’s a sensation. Born from the collision of minty freshness and deep night air, it whispers strength, calm, and control. Designed for the man who stays cool under pressure and glows in silence.
//           </motion.p>
//         </div>
//       </section>

//       {/* Layers Section */}
//       <section className="py-20 px-4 sm:px-10 bg-[#111]">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl sm:text-5xl font-semibold text-center text-white mb-12"
//         >
//           The Layers of Frost Noir
//         </motion.h2>
//         <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
//           {layers.map((layer, i) => (
//             <motion.div
//               key={i}
//               className="flex flex-col items-center text-center bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={layer.img}
//                 alt={layer.title}
//                 className="w-full h-56 object-cover"
//                 loading="lazy"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white mb-3">{layer.title}</h3>
//                 <p className="text-gray-400 text-base leading-relaxed">{layer.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-20 bg-[#0d0d0d] px-6 sm:px-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl sm:text-5xl font-semibold text-center text-white mb-12"
//         >
//           The Frost Noir Experience
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {["https://picsum.photos/800/600",
//             "https://picsum.photos/800/600",
//             "https://picsum.photos/800/600",
//             "https://picsum.photos/800/600",
//             "https://picsum.photos/800/600",
//             "https://picsum.photos/800/600",
//           ].map((img, i) => (
//             <motion.img
//               key={i}
//               src={img}
//               alt="Perfume Scene"
//               className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               viewport={{ once: true }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Closing Section */}
//       <section className="py-24 text-center bg-gradient-to-b from-[#0d0d0d] to-black px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl sm:text-5xl font-semibold text-white mb-8"
//         >
//           Dare to Stay Cool
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-gray-400 text-lg max-w-2xl mx-auto"
//         >
//           Frost Noir isn’t for everyone — it’s for the few who turn silence into power and presence into a storm. Wear it, and the night belongs to you.
//         </motion.p>
//       </section>
//     </div>
//   );
// }










































import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Instagram, InstagramIcon, Linkedin, Mail, TwitterIcon, XIcon } from "lucide-react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiFlutter, SiDart, SiTailwindcss } from "react-icons/si";
import { SiFirebase, SiSupabase, SiNodedotjs, SiMysql } from "react-icons/si";



const sections = ["About", "Projects", "Skills", "Contact"];

// Define a type for your project
type Project = {
  title: string;
  img: string;
  summary: string;
  details: string;
  techStack: string[];
};



const projects = [
  {
    title: "Flutter Whats UI",
    img: "./src/assets/flutter_whats_ui.mp4",
    summary: "A WhatsApp inspired messaging UI built with Flutter. Showcases clean responsive layouts, reusable widgets and real world chat interface design. ",
    details: `This project is a WhatsApp inspired chat interface built using Flutter. it demonstrates my ability to design and implement real world mobile app UIs with clean layouts, reusable components and responsive design`,
    techStack: ["Flutter", "Dart"],
  },
  {
    title: "Flutter Chirp App",
    img: "./src/assets/chirp.mp4",
    summary: "Chirp is social media platform a space to connect effortlessly with friends and communities. it demonstrates my ability to design and implement real world mobile app",
    details: `A space to connect effortlessly with friends and communities. 
              Browse a dynamic feed, share and refine ideas, 
              join conversations and chat in real time all in a clean, 
              fast and intuitive app built with flutter.`,
    techStack: ["Flutter", "Dart", "Firebase"],
  },
];








type Experience = {
  role: string;
  place: string;
  year: string;
  points: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Flutter Developer",
    place: "QuickPost",
    year: "2025",
    points: [
      "Designed and developed a social media app with login, feed, and Firebase integration.",
      "Implemented real-time features such as likes, comments, and notifications.",
      "Focused on scalable architecture and clean UI inspired by WhatsApp/Twitter.",
    ],
    tech: ["React", "Tailwind", "Firebase"],
  },
  {
    role: "Python Developer",
    place: "Media Automation Tools",
    year: "2024",
    points: [
      "Built video/audio processing scripts using FFmpeg for editing, cutting, and batch conversion.",
      "Automated workflows for creators, improving efficiency by 60%.",
      "Packaged tools into desktop-friendly scripts for ease of use.",
    ],
    tech: ["Python", "FFmpeg"],
  },
  {
    role: "JavaScript Developer",
    place: "Interactive Portfolio Projects",
    year: "2023 – 2025",
    points: [
      "Developed multiple interactive web apps with modern UI patterns.",
      "Built with React + Tailwind for clean, responsive designs.",
      "Explored component-driven architecture for scalable frontends.",
    ],
    tech: ["JavaScript", "React", "TailwindCSS"],
  },
  {
    role: "Self-Directed Developer",
    place: "Ongoing",
    year: "2022 – Present",
    points: [
      "Invested in structured self-learning with multiple projects in JS, Python, and Flutter.",
      "Documented progress with builds, experiments, and personal challenges.",
      "Developed strong skills in problem-solving and debugging independently.",
    ],
    tech: ["JS", "Python", "Flutter"],
  },
];





export default function PortfolioLanding() {
  const [activeSection, setActiveSection] = useState("About");
  // useState now accepts either Project or null
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("teliej52@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section") || "About");
          }
        });
      },
      { threshold: 0.9 }
    );

    document.querySelectorAll("section[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document
      .querySelector(`section[data-section="${id}"]`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen font-sans">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col md:flex-row  ">
        {/* Hero / Sidebar */}
        <section className="md:w-1/2 flex flex-col justify-between px-8 py-10 md:pl-16 md:py-24 md:fixed md:h-screen">
          {/* Hero content */}
          <div className="flex flex-col justify-center space-y-8 h-full">
            <div className="flex flex-col justify-center flex-grow text-left space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading font-bold tracking-tight leading-snug text-gray-300 text-[clamp(2.1rem,6vw,2.5rem)]"
              >
                Johnson Adebayo
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-xl md:text-xl font-semibold text-gray-300 max-w-md"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt=""
                  className="w-6 h-6"
                />
                Flutter developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-relaxed max-w-80"
              >
                I build sleek apps that feel alive with perfect digital experiences.
              </motion.p>
            </div>
            {/* Context nav (desktop only) + Socials */}
            <div className="flex flex-col items-start gap-8 mt-10">
              {/* Context nav (HIDDEN on mobile) */}
              <div className="hidden md:flex flex-col space-y-4 w-full">
                {sections.map((sec) => {
                  const isActive = activeSection === sec;
                  return (
                    <button
                      key={sec}
                      onClick={() => scrollToSection(sec)}
                      className="flex items-center group text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                      <span
                        className={`h-[1px] bg-purple-500 transition-all duration-300 ${
                          isActive ? "w-16" : "w-8 group-hover:w-16"
                        }`}
                      ></span>
                      <span
                        className={`ml-3 transition-all duration-300 ${
                          isActive
                            ? "text-purple-400 font-semibold"
                            : "group-hover:text-white"
                        }`}
                      >
                        {sec}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Social icons */}
              <div className="flex gap-6">
                <a href="https://github.com/teliej" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <Github size={22} />
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="teliej52@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail size={22} />
                </a>
                <a href="https://x.com/teliej" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <XIcon size={26} />
                </a>
                <a href="https://www.instagram.com/teliej_/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <InstagramIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scrollable right content */}
        <div className="md:ml-[48%] w-full md:w-1/2">
          {/* About Section */}
          <section
            data-section="About"
            className="relative bg-gradient-to-b from-gray-850 to-gray-900 max-w-3xl mx-auto py-10 px-6 md:mt-16 text-left"
          >
            {/* Face image overlap */}
            {/* <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXX5XFluj9yj0C0gdNarbys3qb_vtY26efA&s"
                // alt="Profile face"
                // text-[clamp(2.1rem,6vw,2.5rem)]
                className="
                  absolute 
                  top-[-8rem] 
                  right-0
                  w-48 h-48
                  rounded-full

                  sm:top-[-12rem]
                  sm:w-64 sm:h-64
                  
                  md:relative
                  md:top-0
                  md:right-0
                  md:mx-auto

                  md:w-full
                  md:h-auto
                  md:max-h_full
                  md:rounded-none
                  object_contain
                "
              />
            </div> */}

            <h2 className="text-xl font-bold mb-1 text-purple-400 py-4
            ">ABOUT</h2>
            <div className="space-y-5">
              <p className="text-gray-300 leading-relaxed">
                I’m a tech artist who builds experiences people actually enjoy using.
                I’ve spent the last few years mastering{" "}
                <span className="text-white font-semibold">
                JavaScript, Python, and Flutter 
                </span>
                {" "}shaping,
                turning ideas into clean, interactive and modern apps that don't just work but feel right.
                I craft flow, emotion, and precision into every click, and swipe.

              </p>
              <p className="text-gray-400 italic">
                When I’m not coding, I’m exploring design vibes and cinematic anime
                soundtracks.
              </p>







  <h3 className="text-gray-200 font-semibold text-xl pt-4">What I Do?</h3>
  {/* Glass Cards */}
  <div className="flex flex-wrap gap-4 pt-4">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 * 0.1 }}
      className="flex-1 min-w-[150px] max-w-sm 
                backdrop-blur-xl bg-white/10 border border-white/20 
                rounded-xl p-4 shadow-lg 
                flex flex-col items-center text-center space-y-2">
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-gray-200 font-semibold text-base">Fast Learning</h3>
      <p className="text-gray-300 text-sm">
        I quickly adapt to new tools and frameworks, always keeping up with
        modern tech.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 * 0.1 }}
      className="flex-1 min-w-[150px] max-w-sm
                      backdrop-blur-xl bg-white/10 border border-white/20 
                      rounded-xl p-4 shadow-lg 
                      flex flex-col items-center text-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-gray-200 font-semibold text-base">Clean Code</h3>
      <p className="text-gray-300 text-sm">
        Writing maintainable and scalable code is at the core of my development
        approach.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 * 0.1 }}
      className="flex-1 min-w-[150px] max-w-sm
                      backdrop-blur-xl bg-white/10 border border-white/20 
                      rounded-xl p-4 shadow-lg 
                      flex flex-col items-center text-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-pink-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h3 className="text-gray-200 font-semibold text-base">UI/UX Focused</h3>
      <p className="text-gray-300 text-sm">
        I love crafting smooth and visually appealing experiences for users.
      </p>
    </motion.div>
  </div>








            </div>
          </section>

         

    <section
      data-section="Projects"
      className="bg-gray-900 max-w-6xl mx-auto py-8 px-6"
    >
      <h2 className="text-3xl font-bold mb-12 text-purple-400 text-center">
        Ongoing Projects
      </h2>

      <div className="space-y-1">
        {projects.map((project, index) => (
          <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-row ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } items-center gap-4`}
            >


            <div className="relative mx-auto w-[40%] md:w-[30%] max-w-[250px] aspect-[9/19.5] bg-gray-900 rounded-[1rem] border-[4px] border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">


              {/* Punch Hole Camera */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full border border-gray-600 shadow-[0_0_6px_rgba(255,255,255,0.2)] z-20"></div>

              {/* Screen Area */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                {/* Image */}

                <video
                  src={project.img}
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  aria-hidden
                  className="w-full shadow-lg"
                /> 
                {/* <p className="text-white font-semibold text-lg">App Preview</p> */}
              </div>

              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

            </div>




            {/* Card */}
            <div className="w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 
                    rounded-xl p-4 shadow-lg">
              <div className="text-start">
                <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold text-gray-200 mb-3">
                  {project.title}
                </h3>
                <p className="text-[clamp(0.8rem,1.5vw,1rem)] text-gray-400 mb-4">
                  {project.summary}
                </p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 hover:bg-purple-300 
                            rounded-lg border-[2px] border-purple-500 text-purple-600 font-medium text-[clamp(0.8rem,1.5vw,1rem)]"
                >
                  Read More
                </button>
              </div>
            </div>
          {/* </div> */}
        </motion.div>
        ))}
      </div>


      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900 rounded-2xl shadow-2xl 
                         max-w-2xl w-full mx-4 p-8 overflow-y-auto max-h-[80vh]"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* Modal Body */}
              <h2 className="text-2xl font-bold text-purple-400 mb-4">
                {activeProject.title}
              </h2>
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="rounded-lg mb-6"
              />
              <p className="text-gray-300 leading-relaxed mb-4">
                {activeProject.details}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {activeProject.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 
                               rounded-full text-xs font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 
                           rounded-lg text-white font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>









<section
      data-section="Experience"
      className="bg-gray-900 py-4 px-2"
    >
      {/* <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
        Experience
      </h2> */}
      <div className="relative mx-auto">

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row md:items-start items-center`}
            >

              {/* Card */}
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-xl shadow-lg p-6 w-full">
                <h3 className="text-xl font-semibold text-gray-200 mb-1">
                  {exp.role}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-2">
                  {exp.place} • {exp.year}
                </p>
                <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1 mb-3">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* view full resume */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-xl md:text-xl font-semibold text-gray-300 py-4 px-4 max-w-md"
          >
            View Full Resume
            <ArrowUpRight size={24} />
          </motion.h2>

        </div>
      </div>
    </section>













          {/* Skills Section */}
          <section
  data-section="Skills"
  className="max-w-5xl mx-auto py-10 px-6 text-center"
>
  {/* Heading */}
  <h2 className="text-3xl font-bold mb-12 text-purple-400">
    Tech Stack
  </h2>

  <div className="grid gap-6">
    {/* Frontend */}
    <div>
      <h3 className="text-xl text-start font-semibold text-gray-400 mb-6">Frontend</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
          <SiFlutter className="text-blue-400 text-5xl" />
          <span className="font-medium text-gray-400">Flutter</span>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
          <SiDart className="text-sky-400 text-5xl" />
          <span className="font-medium text-gray-400">Dart</span>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
          <FaJsSquare className="text-yellow-400 text-5xl" />
          <span className="font-medium text-gray-400">JavaScript</span>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
          <SiTailwindcss className="text-cyan-400 text-5xl" />
          <span className="font-medium text-gray-400">Tailwind CSS</span>
        </div>
      </div>
    </div>


    {/* Backend / Services */}
    <div>
      <h3 className="text-xl text-start font-semibold text-gray-400 mb-6">
        Backend & Services
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {/* Firebase */}
        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
          <SiFirebase className="h-12 w-12 text-yellow-400" />
          <span className="font-medium text-gray-400">Firebase</span>
        </div>

        {/* Firebase */}
        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
          <SiSupabase className="h-12 w-12 text-yellow-400" />
          <span className="font-medium text-gray-400">Supabase</span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
          <SiNodedotjs className="h-12 w-12 text-green-500" />
          <span className="font-medium text-gray-400">Node.js (basic)</span>
        </div>

        {/* SQL */}
        <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
          <SiMysql className="h-12 w-12 text-blue-400" />
          <span className="font-medium text-gray-400">SQL</span>
        </div>
      </div>
    </div>
  </div>
</section>



          {/* Skills Section */}
          {/* <section
            data-section="Skills"
            className="max-w-5xl mx-auto py-20 px-6 text-center"
            >
            <h2 className="text-3xl font-bold mb-12 text-purple-400">
              Blog / Writing Section
            </h2>
            <p>
              Share learnings about Flutter, Firebase, UI tips, etc.
              Even 2–3 short posts makes you look like a thought leader.
            </p>
            <h2 className="text-3xl font-bold mb-12 text-purple-400">
              Fun / Personality Section
            </h2>
            <p>
              Hobbies, values, or a “Beyond Code” mini-section.
              Could be styled playful but short (don’t overshadow main dev profile).
            </p>
          </section> */}




          {/* Personality Section */}
          <section
            data-section="Personality"
            className="relative max-w-5xl mx-auto py-4 px-2 text-center"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-indigo-900/10 rounded-3xl blur-2xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-400 relative z-10">
              Beyond Code
            </h2>

            <div className="relative grid md:grid-cols-2 gap-3 z-10">
              {/* Left: personal story */}
              <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 text-left shadow-lg hover:shadow-purple-800/20 transition">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  Calm • Creative • Curious
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I’m a Flutter developer who enjoys crafting clean, fluid interfaces and
                  experiences that just click.  
                  My process is simple keep things smooth, meaningful, and slightly
                  unexpected.  
                  I don’t just build apps; I design the flow that makes people feel something when they use them.
                </p>
              </div>

              {/* Right: fun side + personality */}
              <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 text-left shadow-lg hover:shadow-purple-800/20 transition">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  A Bit About Me
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>⚡ I love designs that talk before the code even runs.</li>
                  <li>🎧 Usually coding with lo-fi or amapiano on repeat.</li>
                  <li>🧩 Big on building smooth experiences no clutter, no stress.</li>
                  <li>🌍 Currently exploring how to blend creativity, logic, and flow into every project I touch.</li>
                </ul>
              </div>
            </div>
          </section>




          <section
            data-section="Vision"
            className="relative max-w-4xl mx-auto py-10 px-6 text-center"
          >
            {/* Soft gradient glow behind text */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-indigo-900/20 blur-3xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 relative z-10">
              My Vision
            </h2>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed relative z-10">
              I believe apps should do more than work, they should{" "}
              <span className="font-semibold text-gray-400">
                feel alive.{" "}
              </span>
              Every button, color, and animation should speak the same language, clarity and flow.  
              My goal is to build digital spaces that feel{" "}
              <span className="font-bold text-gray-400">
                personal, fluid, and intentional{" "} 
              </span>
              where technology fades into the background and the{" "}
              <span className="font-semibold text-gray-400">
                experience{" "} 
              </span>
              takes center stage.
            </p>

            <div className="mt-12 relative z-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                ⚡ Craft. Flow. Emotion. Precision.
              </p>
            </div>
          </section>




          {/* Contact Section */}
          <section
            data-section="Contact"
            className="bg-gray-900 rounded-2xl py-16 px-10 border-t border-gray-700"
          >
            <div className="max-w-2xl mx-auto text-center">
              {/* Section Label */}
              <p className="uppercase tracking-widest text-sm text-gray-400 mb-2">
                Contact
              </p>

              {/* Headline */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-100">
                Got a Project? Let’s Build It Together 🚀
              </h2>

              {/* Subtext */}
              <p className="text-gray-400 mb-8">
                I’m always open to freelance gigs, collabs, or full-time roles.  
                Reach out below. I reply within <span className="font-semibold text-gray-200">24 hours</span>.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-2 justify-center items-center">
                
                {/* Gmail with Copy */}
                <button
                  onClick={copyEmail}
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-gray-300 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-4 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 13.065l11.999-7.065v13h-24v-13z" />
                    <path d="M12 10.935l-12-7.065h24z" />
                  </svg>
                  <span className="font-medium">
                    {copied ? "Copied!" : "teliej52@gmail.com"}
                  </span>
                </button>


                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-600 text-white px-6 py-4 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4zM8.5 8.5h3.8v2.1h.1c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.5c0-1.8 0-4-2.5-4s-2.9 2-2.9 3.9V24h-4z"/>
                  </svg>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348032174423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-green-700 hover:bg-green-600 text-white px-6 py-4 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48C18.21 1.17 15.21 0 12 0 5.37 0 0 5.37 0 12c0 2.11.55 4.14 1.6 5.94L0 24l6.22-1.63c1.71.94 3.63 1.44 5.78 1.44 6.63 0 12-5.37 12-12 0-3.21-1.17-6.21-3.48-8.52zM12 21.33c-1.78 0-3.47-.48-4.96-1.39l-.36-.21-3.69.97.99-3.59-.24-.37c-1-1.54-1.52-3.33-1.52-5.15 0-5.48 4.45-9.93 9.93-9.93 2.65 0 5.14 1.03 7.01 2.9 1.87 1.87 2.9 4.36 2.9 7.03 0 5.48-4.45 9.93-9.93 9.93zm5.55-7.42c-.3-.15-1.78-.88-2.06-.97-.28-.1-.48-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.57-.48-.49-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.13-.28-.2-.57-.35z" />
                  </svg>
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}







// // what comes to mind when you wanted a page for your business, product or whatever 
// // is make it look good, well branded, proffesional, look legit 
// // but then you seem to forget that while those things
// // does help your brand it not enough, 

// // these requirement are the norms of today, they are mediocre, 
// // everybody do this, 
// // most page looks good well branded, proffesional 
// // however this is not enough to secure sales.

// // imaging the hassle of getting some leads then the total waist when leads bounce off your page

// // your leads intrest are like fagrance, once a spack of intrest has been lit it dies quickly, 
// // this means your product page must be ready to keep the spack lit

// // your product page must be built for this
// // your product page needs to be smarter more adaptive, carefully crafted, built right

// // let me explain => feauture of the pages.