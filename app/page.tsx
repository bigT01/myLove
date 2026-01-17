'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";


const sections = [
  {
    title: 'Erasmus. November.',
    text: `I saw you and thought:
"Wow… she’s beautiful."
And then I thought:
"Yeah… no chance, she’s unreachable."`,
  },
  {
    title: 'Plot twist 😌',
    text: `Turns out… you already had a crush on me.
I was shocked.
Still processing it to this day.`,
  },
  {
    title: 'The shy phase',
    text: `You were singing, dancing, leading people.
I was watching from distance like:
"Okay… I’ll just breathe and survive."`,
  },
  {
    title: 'Dining room moment',
    text: `Somehow we started talking.
Your eyes were shining.
The whole world stopped.
It was only you.`,
  },
  {
    title: 'Internal drama 🎭',
    text: `There was that Greek guy.
I thought:
"Okay, soldier, retreat."
But my heart said:
"Nope. She’s mine."`,
  },
  {
    title: 'The first kiss',
    text: `A bit drunk.
Outside.
Me, you, Elif.
"Just kiss," she said.
I opened my arms.
You came closer.
And my mind went completely silent.`,
  },
  {
    title: 'Musical Park',
    text: `Sober.
Just you and me.
Your finger moved:
"Come here."
I took all my courage,
held your belt,
and kissed you.
Butterflies everywhere.`,
  },
  {
    title: 'Distance begins ✈️',
    text: `"What will we do?"
"We continue."
You didn’t fully believe me.
But we did.`,
  },
  {
    title: 'Girl Math 🧮',
    text: `14 days = 2 weeks
15 days = 2 weeks + 1 day
Science confirmed.`,
  },
  {
    title: '6-hour calls',
    text: `Every day.
Video calls.
Questions.
Laughs.
Stranger Things.
Together, even apart.`,
  },
  {
    title: 'Seeing you again',
    text: `You were real.
Not a screen.
I couldn’t believe my eyes.
One week of pure happiness.`,
  },
  {
    title: 'Us',
    text: `Cooking.
Walking.
Eating.
Loving.
Every moment mattered.`,
  },
  {
    title: 'Christmas together 🎄',
    text: `From December 26 to January 5.
Another memory.
Another proof.
This is real.`,
  },
];

export default function Home() {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const target = new Date('2026-01-23');
    const now = new Date();
    const diff = Math.ceil(
      (target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDaysLeft(diff > 0 ? diff : 0);
  }, []);
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          My love, happy birthday 🎂
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="opacity-80"
        >
          You turn <b>22</b> today ✨  
          Scroll slowly.
        </motion.p>
      </section>

      {/* STORY */}
      {sections.map((s, i) => (
        <motion.section
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto px-6 py-16"
        >
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="h-40 bg-white/10 rounded-xl mb-4 flex items-center justify-center text-xs opacity-60">
              photo placeholder
            </div>

            <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
            <p className="opacity-80 whitespace-pre-line">{s.text}</p>
          </div>
        </motion.section>
      ))}

      {/* TREE & LEAVES */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Tree */}
        <div className="absolute bottom-0 w-40 h-64 bg-gradient-to-t from-brown-900 to-brown-700 rounded-t-full opacity-60" />
        <div className="absolute bottom-40 w-64 h-40 bg-green-900/40 rounded-full blur-xl" />

        {/* Leaves */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: Math.random() * 300 - 150,
              opacity: 0,
            }}
            animate={{
              y: 600,
              opacity: [0, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
            className="absolute top-0 text-green-400 text-xl"
          >
            🍃
          </motion.div>
        ))}

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4 z-10"
        >
          Leaves fall…
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="opacity-80 z-10"
        >
          until our next meet ❤️  
          <br />
          <b>23 January — Italy 🇮🇹</b>
          <br />
          {daysLeft} days left
        </motion.p>
      </section>

      {/* VIDEO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          One more thing 🎥
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-md aspect-video bg-white/10 rounded-2xl flex items-center justify-center text-sm opacity-60"
        >
          Video placeholder  
          <br />
          (Add our memory here)
        </motion.div>

        <p className="mt-6 opacity-80 max-w-md">
          This is just the beginning.
          <br />
          I’m waiting for you.
        </p>
      </section>

      {/* FINAL */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Happy Birthday, my love ❤️
        </motion.h2>

        <p className="opacity-80 max-w-md">
          No matter the distance,
          no matter the days,
          I choose you.
        </p>
      </section>
    </main>
  );
}
