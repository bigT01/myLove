import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      {/* Gradient blobs */}
      <motion.div
        animate={{ x: [0, 120, -120, 0], y: [0, -80, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full "
      />

      <motion.div
        animate={{ x: [0, -150, 150, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* STARS */}
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * 100 + '%',
            y: '110%',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: '-10%',
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'linear',
          }}
          className="absolute w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
        />
      ))}
    </div>
  );
}
