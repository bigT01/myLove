'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import AnimatedBackground from './component/AnimatedBackground';
import Image from 'next/image';


const sections = [
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-1.jpg',
    title: 'Erasmus. November.',
    text: `I saw you and thought:
"Wow… she’s beautiful."
And then I thought:
"Yeah… no chance, she’s unreachable."`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-2.jpg',
    title: 'Plot twist 😌',
    text: `Turns out… you already had a crush on me.
I was shocked.
Still processing it to this day.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-3.jpg',
    title: 'The shy phase',
    text: `You were singing, dancing, leading people.
I was watching from distance like:
"Okay… I’ll just breathe and survive."`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-4.jpg',
    title: 'Dining room moment',
    text: `Somehow we started talking.
Your eyes were shining.
The whole world stopped.
It was only you.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-5.jpg',
    title: 'Internal drama 🎭',
    text: `There was that Greek guy.
I thought:
"Okay, soldier, retreat."
But my heart said:
"Nope. She’s mine."`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-6.JPG',
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
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-7.jpg',
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
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-7-5.jpg',
    title: 'Distance begins ✈️',
    text: `"What will we do?"
"We continue."
You didn’t fully believe me.
But we did.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-8.jpeg',
    title: 'Girl Math 🧮',
    text: `14 days = 2 weeks
15 days = 2 weeks + 1 day
Science confirmed.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-9.jpeg',
    title: '6-hour calls',
    text: `Every day.
Video calls.
Questions.
Laughs.
Stranger Things.
Together, even apart.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-10.jpeg',
    title: 'Seeing you again',
    text: `You were real.
Not a screen.
I couldn’t believe my eyes.
One week of pure happiness.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-11.jpg',
    title: 'Us',
    text: `Cooking.
Walking.
Eating.
Loving.
Every moment mattered.`,
  },
  {
    image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-12.jpeg',
  title: 'Christmas & New Year 🎄',
  text: `There’s a saying:
“How you spend New Year’s Eve —
that’s how your whole year will go.”

I spent it with you.
And honestly?
It was the happiest New Year I remember.

So yes —
I want to spend the next one with you.
And the one after that too.`,
},
{
  image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-13.jpeg',
  title: 'You and your big heart 🎁',
  text: `We were together,
preparing gifts for everyone.
Wrapping them.
Thinking about people.

Everyone was so happy.
And I was just standing there thinking:
“Wow… this is who you are.”

You care.
You think about others.
And not everyone can do that.
That really impressed me.`,
},

{
  image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-14.jpeg',
  title: 'That moment',
  text: `Even though we were together,
I felt like we didn’t really have time just for us.

I tried to keep it inside.
But I couldn’t.

In front of you.

We talked.
And after that,
I felt calm.
Like I could finally breathe.`,
},

{
  image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-15.jpeg',
  title: 'My safe place 🏠',
  text: `With you,
I don’t need to pretend.
I don’t need to hide how I feel.

You know I’m a bit shy.
Not always good with emotions.
Sometimes a bit lost.

But one thing is very clear to me:
You are my home.
And you are the one thing
I never want to lose.`,
},
{
  image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-17.jpeg',
  title: 'This story is about you',
  text: `Everything you read here
is our story —
but told from my point of view.

I chose storytelling
because it’s the best way I know
to show who you really are.

Through moments.
Through actions.
Through the way you care.

You are kind.
You are warm.
You think about others.
You love deeply,
even when it’s not easy.

And if I have one wish,
it’s this:

That you always stay yourself.
That you never forget
how special you are.
And that I get to keep
writing stories with you.`,
},
{
  image: 'https://x7eoz2niieu08urz.public.blob.vercel-storage.com/picture-16.jpeg',
  title: 'Only for you 🔒',
  text: 'Touch and hold',
},
];

function BirthdayStory() {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  let holdTimer: NodeJS.Timeout;

  useEffect(() => {
    const target = new Date('2026-01-23');
    const now = new Date();
    const diff = Math.ceil(
      (target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDaysLeft(diff > 0 ? diff : 0);
  }, []);

  const handleHoldStart = () => {
    holdTimer = setTimeout(() => {
      setIsUnlocked(true);
    }, 1500);
  };

  const handleHoldEnd = () => {
    clearTimeout(holdTimer);
  };
  return (
    <div className="relative pt-20">
      <div className='relative z-20'>
         {/* HERO */}
      <section className="h-[80vh] z-30 flex flex-col justify-center items-center text-center px-6">
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
            <div className="h-40 bg-white/10 relative rounded-xl mb-4 flex items-center justify-center text-xs opacity-60">
              {s.image ? (
                <Image src={s.image} alt="Picture" fill className="object-cover rounded-xl" />
              ) : (
                'Picture coming soon 📸'
              )}
            </div>

            <h2 className="text-2xl font-semibold mb-4">{s.title}</h2>

{s.title === 'Only for you 🔒' ? (
  !isUnlocked ? (
    <div
      onTouchStart={handleHoldStart}
      onTouchEnd={handleHoldEnd}
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      className="opacity-60 text-center select-none"
    >
      <div className="text-4xl mb-3">🔒</div>
      <p>Touch and hold</p>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="opacity-90 whitespace-pre-line"
    >
      You are my person.
      <br />
      My peace.
      My home.
      <br /><br />
      I choose you —
      today,
      tomorrow,
      and every day after.
      ❤️
    </motion.div>
  )
) : (
  <p className="opacity-80 whitespace-pre-line">{s.text}</p>
)}
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
      </div>
    </div>
  );
}

function SixMonthsAnniversary() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 pb-20 overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 z-10"
      >
        Happy 6 Months, My Love 🥂
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-white/80 max-w-2xl text-center mb-12 z-10"
      >
        Half a year of us. Half a year of the best days of my life. 
        I made this little video to remind you how much you mean to me.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,105,180,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm z-10"
      >
        <video 
          src="https://x7eoz2niieu08urz.public.blob.vercel-storage.com/love.mp4" 
          controls 
          className="w-full h-full object-cover rounded-3xl"
          playsInline
          preload="metadata"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-16 text-center space-y-4 z-10"
      >
        <p className="text-xl font-medium text-pink-200">
          And this is just the beginning... ❤️
        </p>
        <div className="flex justify-center gap-2 text-2xl">
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>✨</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}>💖</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}>🌟</motion.span>
        </div>
      </motion.div>

      {/* Floating background hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{
            y: "100vh",
            x: Math.random() * 100 - 50 + "vw",
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="absolute text-pink-500/30 text-2xl z-0 pointer-events-none"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'birthday' | '6months'>('6months');

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Tab Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full p-1.5 flex gap-1 border border-white/20 shadow-2xl">
        <button
          onClick={() => setActiveTab('birthday')}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === 'birthday' ? 'bg-white text-black shadow-lg scale-105' : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          Birthday Story
        </button>
        <button
          onClick={() => setActiveTab('6months')}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === '6months' ? 'bg-white text-black shadow-lg scale-105' : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          6 Months 🥂
        </button>
      </nav>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'birthday' ? (
          <motion.div 
            key="birthday" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full min-h-screen"
          >
             <BirthdayStory />
          </motion.div>
        ) : (
          <motion.div 
            key="6months" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full min-h-screen"
          >
             <SixMonthsAnniversary />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
