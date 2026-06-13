"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { Flame, Eye, BookOpen, Zap, Users } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* NAVBAR */}

<header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
  <div className="flex w-full items-center justify-between px-16 py-5">

    <h2 className="text-2xl tracking-[0.2em]">
      <span className="text-amber-400">LUKAS</span> PUCHALSKI
    </h2>

    <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
      <a href="#about">About</a>
      <a href="#story">Story</a>
      <a href="#mission">Mission</a>
      <a href="#contact">Contact</a>
    </nav>

    <button className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-black">
      Invite Lukas
    </button>

  </div>
</header>
 {/* HERO */}

<section className="relative min-h-screen overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/revival.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/60" />

  <motion.div
    initial={{ opacity: 0, y: 120 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4 }}
    className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-8"
  >
    <div className="flex w-full flex-col items-center text-center">

      <p
        className={`${cormorant.className} mb-8 text-lg uppercase tracking-[0.5em] text-amber-400 md:text-2xl`}
      >
        CALLED TO IGNITE NATIONS
      </p>

      <h1
        className={`${cormorant.className} whitespace-nowrap text-5xl font-semibold tracking-[0.08em] text-white md:text-[4.5rem]`}
      >
        PROPHETIC EVANGELIST
      </h1>

      <h2
        className={`${cormorant.className} mt-4 whitespace-nowrap text-6xl font-bold leading-none text-amber-400 md:text-[6rem]`}
      >
        LUKAS PUCHALSKI
      </h2>

      <div className="my-8 flex items-center justify-center gap-6">
        <div className="h-px w-20 bg-amber-500" />
        <span className="text-xl text-amber-400">✝</span>
        <div className="h-px w-20 bg-amber-500" />
      </div>

      <p
        className={`${cormorant.className} mx-auto max-w-2xl text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Awakening a generation. Reviving the Church. Preaching Jesus Christ
        to the nations through prophetic evangelism, the power of the Holy
        Spirit, and the love of the Father.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <button className="rounded-xl bg-amber-500 px-10 py-4 text-base font-semibold text-black transition hover:bg-amber-400">
          Invite Lukas
        </button>

        <button className="rounded-xl border border-amber-500 px-10 py-4 text-base transition hover:bg-amber-500 hover:text-black">
          Watch Messages
        </button>

      </div>

    </div>
  </motion.div>

</section>
 {/* ABOUT */}

<section
  id="about"
  className="relative overflow-hidden bg-black px-8 py-28 text-white"
>
  <div className="absolute left-1/3 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-amber-500/15 blur-[220px]" />

  <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.1fr]">

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className="self-start"
    >
      <img
        src="/lukas.jpg"
        alt="Lukas Puchalski"
        className="w-full max-w-[560px] rounded-[24px] border border-amber-500/20 shadow-[0_0_80px_rgba(245,158,11,0.25)]"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className="self-start"
    >
      <p
        className={`${cormorant.className} mb-6 uppercase tracking-[0.35em] text-amber-400 text-lg md:text-xl`}
      >
        ABOUT LUKAS
      </p>

      <h2
        className={`${cormorant.className} mb-10 text-white font-bold leading-[0.95] tracking-[0.01em] text-5xl md:text-[5rem]`}
      >
        A Voice For This
        <br />
        Generation
      </h2>

      <p
        className={`${cormorant.className} mb-6 text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Lukas is a prophetic evangelist carrying a burning message of revival,
        identity, and the Father's love for this generation. Marked by a
        radical transformation from darkness to light, his life became a
        testimony of God's redeeming power and the reality of Jesus Christ.
      </p>

      <p
        className={`${cormorant.className} mb-6 text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Through prophetic evangelism, the power of the Holy Spirit, and the
        love of the Father, Lukas ministers with a passion to see hearts
        healed, chains broken, and lives set on fire for Jesus.
      </p>

      <p
        className={`${cormorant.className} mb-6 text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        His heart burns for a generation lost in confusion, pain, addiction,
        and fatherlessness — raising sons and daughters who know their
        identity and walk in intimacy with God.
      </p>

      <p
        className={`${cormorant.className} text-[1.35rem] leading-[1.8] font-semibold text-amber-400`}
      >
        His vision is clear: to see nations awakened, churches revived, and a
        generation arise carrying the fire, purity, power, and love of Jesus
        Christ.
      </p>

      <button className="mt-10 rounded-lg border border-amber-500 px-7 py-3 text-amber-400 transition hover:bg-amber-500 hover:text-black">
        Read My Story
      </button>
    </motion.div>

  </div>
</section>
{/* STORY */}

<section
  id="story"className="relative overflow-hidden bg-black px-8 py-28 text-white"
>
  <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[250px]" />

  <div className="relative mx-auto max-w-[1600px]">


<motion.div
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2 }}
>
 <p
  className={`${cormorant.className} mb-6 text-center uppercase tracking-[0.35em] text-amber-400 text-lg md:text-xl`}
>
  THE STORY
</p>

<h2
  className={`${cormorant.className} mb-16 text-center font-bold text-white text-5xl md:text-[5rem] leading-[0.95]`}
>
  From Darkness To Light
</h2>
</motion.div>

<div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2 }}
  >
    <img
      src="/story.jpg"
      alt="From Darkness To Light"
      className="w-full max-w-[560px] rounded-[24px] border border-amber-500/20 shadow-[0_0_80px_rgba(245,158,11,0.25)]"
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2 }}
  >
    <p
      className={`${cormorant.className} mb-6 text-[1.35rem] leading-[1.8] text-zinc-300`}
    >
      Lukas grew up in a broken family without siblings, in a Polish nation
      marked by deep historical trauma — from the partitions of Poland,
      to the devastation of world wars, and the oppression of the
      communist regime.
    </p>

    <p
      className={`${cormorant.className} mb-6 text-[1.35rem] leading-[1.8] text-zinc-300`}
    >
      Darkness slowly started consuming him, and throughout his life he
      became a lost sheep in a world of wolves, while at the same time
      becoming a wolf himself. Yet deep within the darkness, there was still
      a wounded and forgotten child crying out for true purpose, identity,
      and love.
    </p>

    <p
      className={`${cormorant.className} mb-6 text-[1.35rem] leading-[1.8] text-zinc-300`}
    >
      From a life marked by crime, addiction, destruction, and prisons in
      three different countries, God radically transformed his life from
      darkness to light. What the enemy meant for death, God turned into
      redemption, purpose, and fire for the Kingdom of God.
    </p>

    <p
      className={`${cormorant.className} text-[1.35rem] leading-[1.8] font-semibold text-amber-400`}
    >
      Today, his life stands as a testimony that no one is too far gone for
      the mercy, healing, and transforming power of Jesus Christ.
    </p>

    <a href="#testimony">
      <button className="mt-10 rounded-lg bg-amber-500 px-7 py-3 font-semibold text-black transition hover:bg-amber-400">
        Watch Testimony
      </button>
    </a>

  </motion.div>

</div>
```

  </div>
</section>


{/* MISSION */}
<section
  id="mission"
  className="relative overflow-hidden bg-black px-8 py-28 text-white"
>
  <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[220px]" />

  <div className="relative mx-auto max-w-[1400px]">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <p
        className={`${cormorant.className} mb-6 text-center uppercase tracking-[0.35em] text-amber-400 text-lg md:text-xl`}
      >
        THE MISSION
      </p>

      <h2
        className={`${cormorant.className} mb-10 text-center font-bold text-white text-5xl md:text-[5rem] leading-[1.05]`}
      >
        Inspired.
        <span className="mx-4 text-white">Equipped.</span>
        <span className="text-amber-400">Activated.</span>
      </h2>

      <p
        className={`${cormorant.className} mx-auto mb-16 max-w-4xl text-center text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Lukas carries a passion to see believers inspired by the love of
        Jesus, equipped through prophetic evangelism, and activated to
        reach their communities with the Gospel. His mission is to raise
        ordinary believers who hear God's voice, boldly share their
        faith, and demonstrate the reality of the Holy Spirit wherever
        they go.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <Flame size={26} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-4 text-3xl font-bold`}>
          Prophetic Evangelism
        </h3>

        <p className={`${cormorant.className} text-[1.2rem] leading-[1.75] text-zinc-300`}>
          Spirit-led evangelism centered on Jesus Christ, marked by the
          power of the Holy Spirit, prophetic ministry, healing, and the
          uncompromised Gospel.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <Eye size={26} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-4 text-3xl font-bold`}>
          Prophetic Ministry
        </h3>

        <p className={`${cormorant.className} text-[1.2rem] leading-[1.75] text-zinc-300`}>
          Ministering through hearing the voice of God and releasing
          prophetic words that bring encouragement, healing, clarity,
          restoration, and spiritual awakening.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <BookOpen size={26} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-4 text-3xl font-bold`}>
          Discipleship & Activation
        </h3>

        <p className={`${cormorant.className} text-[1.2rem] leading-[1.75] text-zinc-300`}>
          Equipping believers to grow in intimacy with God, hear His voice,
          walk in the gifts of the Holy Spirit, and live boldly for Jesus.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <Zap size={26} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-4 text-3xl font-bold`}>
          Revival & Awakening
        </h3>

        <p className={`${cormorant.className} text-[1.2rem] leading-[1.75] text-zinc-300`}>
          Gatherings centered on the presence of God, hunger for revival,
          repentance, healing, freedom, and fresh fire from the Holy Spirit.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur md:col-span-2"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <Users size={26} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-4 text-3xl font-bold`}>
          Next Generation
        </h3>

        <p className={`${cormorant.className} text-[1.2rem] leading-[1.75] text-zinc-300`}>
          A heart for the younger generation — especially those struggling
          with identity, addiction, confusion, hopelessness, and
          fatherlessness.
        </p>
      </motion.div>

    </div>

  </div>
</section>
{/* SPIRITUAL COVERING */}

<section
  id="covering"
  className="relative overflow-hidden bg-black px-8 py-28 text-white"
>
  <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[220px]" />

  <div className="relative mx-auto max-w-[1400px]">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <p
        className={`${cormorant.className} mb-6 text-center uppercase tracking-[0.35em] text-amber-400 text-lg md:text-xl`}
      >
        SPIRITUAL COVERING & DISCIPLESHIP
      </p>

     <h2
  className={`${cormorant.className} mb-10 text-center font-bold text-white text-6xl md:text-[5.5rem] leading-[0.95]`}
>
  Spiritual Covering{" "}
  <span className="text-amber-400">&</span>{" "}
  Discipleship
</h2>
     <p
  className={`${cormorant.className} mb-14 text-center text-2xl md:text-3xl font-semibold`}
>
  <span className="text-white">Inspired. </span>
  
  <span className="text-white">Equipped. </span>
  
  <span className="text-amber-400">Activated. </span>
</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className="mx-auto max-w-5xl text-center"
    >
      <p
        className={`${cormorant.className} mb-8 text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Lukas Puchalski is being discipled through the

        <span className="font-bold text-amber-400">
          {" "}YESURN1 Discipleship Program under Prophet Evangelist Alex Shore-Nye{" "}
        </span>

        growing in prophetic evangelism, hearing the voice of God,
        and ministering through the power of the Holy Spirit.
      </p>

      <p
        className={`${cormorant.className} mb-8 text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Through discipleship, prophetic activation, and spiritual
        equipping, Lukas carries a growing burden to see believers
        awakened, equipped, and sent into prophetic missions with
        boldness, humility, purity, and the love of Jesus Christ.
      </p>

      <p
        className={`${cormorant.className} text-[1.35rem] leading-[1.8] text-zinc-300`}
      >
        Lukas carries a heart to serve and strengthen the local church by
        awakening evangelistic fire, prophetic boldness, and spiritual
        hunger. His mission aligns with the

        <span className="font-bold text-amber-400">
          {" "}YESURN1 Discipleship vision{" "}
        </span>

        established through Prophet Evangelist Alex Shore-Nye: to proclaim
        Jesus boldly,

        <span className="font-bold text-amber-400">
          {" "}equip the saints{" "}
        </span>

        and

        <span className="font-bold text-amber-400">
          {" "}activate the Church{" "}
        </span>

        to carry the Gospel into the

        <span className="font-bold text-amber-400">
          {" "}streets, cities, and nations{" "}
        </span>

        through the power of the Holy Spirit.
      </p>
    </motion.div>

  </div>
</section>
{/* JOURNEY TO THE NATIONS */}

<section
  id="journey"
  className="relative overflow-hidden bg-black px-8 py-32 text-white"
>
  <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[250px]" />

  <div className="relative mx-auto max-w-[1600px]">

    <section
  id="journey"
  className="relative overflow-hidden bg-black px-8 py-32 text-white"
>
  <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[250px]" />

  <div className="relative mx-auto max-w-[1600px]">

```
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2 }}
>
  <p
    className={`${cormorant.className} mb-6 text-center uppercase tracking-[0.4em] text-amber-400 text-lg md:text-xl`}
  >
    THE JOURNEY
  </p>

  <h2
    className={`${cormorant.className} mb-8 text-center font-bold text-white text-5xl md:text-[5.5rem] leading-[1]`}
  >
    From Poland
    <span className="text-amber-400"> To </span>
    The Nations
  </h2>

  <p
    className={`${cormorant.className} mx-auto mb-20 max-w-4xl text-center text-2xl md:text-3xl text-zinc-300`}
  >
    A journey of transformation, preparation, and obedience to God's calling.
  </p>
</motion.div>

<div className="grid items-start gap-20 lg:grid-cols-[0.95fr_1.05fr]">

  <motion.div
    initial={{ opacity: 0, x: -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.3 }}
    className="space-y-8"
  >
    <img
      src="/mission.jpg"
      alt="Mission Philippines"
      className="w-full rounded-[30px] border border-amber-500/20 shadow-[0_0_120px_rgba(245,158,11,0.25)]"
    />

    <img
      src="/mission2.jpg"
      alt="Mission Team Philippines"
      className="w-full rounded-[30px] border border-amber-500/20 shadow-[0_0_120px_rgba(245,158,11,0.25)]"
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 120 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.3 }}
  >
    <p className={`${cormorant.className} mb-8 text-[1.35rem] leading-[1.9] text-zinc-300`}>
      Born and raised in Poland, Lukas grew up in a nation shaped by
      resilience, faith, and a complex history. Through seasons of
      brokenness, struggle, and personal transformation, God began
      writing a new story — a story of redemption, purpose, and calling.
    </p>

    <p className={`${cormorant.className} mb-8 text-[1.35rem] leading-[1.9] text-zinc-300`}>
      As God continued to shape his life, Lukas spent years living in
      Germany and later in the Netherlands. These nations became part
      of his preparation, exposing him to different cultures, people,
      and perspectives while expanding his vision beyond national borders.
    </p>

    <p className={`${cormorant.className} mb-8 text-[1.35rem] leading-[1.9] text-zinc-300`}>
      <span className="font-semibold text-amber-400">
        Current Mission Field:
      </span>{" "}
      The Philippines.
      <br />
      <br />
      Lukas serves as a missionary in the Philippines, partnering with
      local believers, ministries, and communities to preach the Gospel,
      make disciples, and demonstrate the love and power of Jesus Christ
      through evangelism, prayer, and prophetic ministry.
    </p>

    <p className={`${cormorant.className} mb-8 text-[1.35rem] leading-[1.9] text-zinc-300`}>
      What began as a personal journey of redemption has become a
      growing call to the nations. Lukas carries a burden to see
      people awakened to their identity in Christ, churches
      strengthened, and communities impacted by the Gospel across
      cultures and generations.
    </p>

    <p className={`${cormorant.className} mb-8 text-[1.45rem] leading-[1.9] font-semibold text-amber-400`}>
      From Poland, through Germany and the Netherlands, to the
      Philippines and beyond — the mission remains the same:
      Preaching Jesus to the Nations.
    </p>


  </motion.div>

</div>

<div className="mt-24 grid gap-8 md:grid-cols-3">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur"
  >
    <div className="mb-4 text-5xl">🇵🇱</div>
    <h3 className={`${cormorant.className} mb-3 text-3xl font-bold`}>
      Poland
    </h3>
    <p className={`${cormorant.className} text-xl text-zinc-300`}>
      Where the story began.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur"
  >
    <div className="mb-4 text-5xl">🇩🇪 🇳🇱</div>
    <h3 className={`${cormorant.className} mb-3 text-3xl font-bold`}>
      Germany & Netherlands
    </h3>
    <p className={`${cormorant.className} text-xl text-zinc-300`}>
      A season of preparation.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.4 }}
    className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur"
  >
    <div className="mb-4 text-5xl">🇵🇭</div>
    <h3 className={`${cormorant.className} mb-3 text-3xl font-bold`}>
      Philippines
    </h3>
    <p className={`${cormorant.className} text-xl text-zinc-300`}>
      Current mission field.
    </p>
  </motion.div>

</div>
```

  </div>
</section>


  </div>
</section>
</main>
);
}
