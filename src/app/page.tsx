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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
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
    className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-8"
  >
    <div className="flex w-full flex-col items-center text-center">

      <p
        className={`${cormorant.className} mb-10 text-2xl uppercase tracking-[0.7em] text-amber-400 md:text-3xl`}
      >
        CALLED TO IGNITE NATIONS
      </p>

      <h1
        className={`${cormorant.className} whitespace-nowrap text-6xl font-semibold tracking-[0.12em] text-white md:text-[6.5rem]`}
      >
        PROPHETIC EVANGELIST
      </h1>

      <h2
        className={`${cormorant.className} mt-8 whitespace-nowrap text-7xl font-bold leading-none text-amber-400 md:text-[8.5rem]`}
      >
        LUKAS PUCHALSKI
      </h2>

      <div className="my-10 flex items-center justify-center gap-6">
        <div className="h-px w-24 bg-amber-500" />
        <span className="text-amber-400 text-2xl">✝</span>
        <div className="h-px w-24 bg-amber-500" />
      </div>

      <p
        className={`${cormorant.className} mx-auto max-w-3xl text-[1.8rem] leading-[1.8] text-zinc-300`}
      >
        Awakening a generation. Reviving the Church. Preaching Jesus Christ
        to the nations through prophetic evangelism, the power of the Holy
        Spirit, and the love of the Father.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-6">

        <button className="rounded-xl bg-amber-500 px-12 py-5 text-lg font-semibold text-black transition hover:bg-amber-400">
          Invite Lukas
        </button>

        <button className="rounded-xl border border-amber-500 px-12 py-5 text-lg transition hover:bg-amber-500 hover:text-black">
          Watch Messages
        </button>

      </div>

    </div>
  </motion.div>

</section>
 {/* ABOUT */}

<section
  id="about"
  className="relative overflow-hidden bg-black px-8 py-40 text-white"
>
  <div className="absolute left-1/3 top-1/2 h-[1000px] w-[1000px] -translate-y-1/2 rounded-full bg-amber-500/20 blur-[280px]" />

 <div className="relative mx-auto grid max-w-[1800px] gap-24 lg:grid-cols-[0.95fr_1.25fr]">

    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4 }}
      className="self-start"
    >
      <img
        src="/lukas.jpg"
        alt="Lukas Puchalski"
        className="w-full max-w-[720px] rounded-[30px] border border-amber-500/20 shadow-[0_0_150px_rgba(245,158,11,0.35)]"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4 }}
      className="self-start"
    >
     <p
  className={`${cormorant.className} mb-8 uppercase tracking-[0.4em] text-amber-400 text-xl md:text-2xl`}
>
  ABOUT LUKAS
</p>

<h2
  className={`${cormorant.className} mb-12 max-w-[1300px] text-white font-bold leading-[0.95] tracking-[0.02em] text-7xl md:text-[7.5rem]`}
>
  A Voice For This
  <br />
  Generation
</h2>

      <p
        className={`${cormorant.className} mb-8 text-[1.7rem] leading-[1.9] text-zinc-300`}
      >
        Lukas is a prophetic evangelist carrying a burning message of revival,
        identity, and the Father's love for this generation. Marked by a
        radical transformation from darkness to light, his life became a
        testimony of God's redeeming power and the reality of Jesus Christ.
      </p>

      <p
        className={`${cormorant.className} mb-8 text-[1.7rem] leading-[1.9] text-zinc-300`}
      >
        Through prophetic evangelism, the power of the Holy Spirit, and the
        love of the Father, Lukas ministers with a passion to see hearts
        healed, chains broken, and lives set on fire for Jesus.
      </p>

      <p
        className={`${cormorant.className} mb-8 text-[1.7rem] leading-[1.9] text-zinc-300`}
      >
        His heart burns for a generation lost in confusion, pain, addiction,
        and fatherlessness — raising sons and daughters who know their
        identity and walk in intimacy with God.
      </p>

      <p
        className={`${cormorant.className} text-[1.7rem] leading-[1.9] font-semibold text-amber-400`}
      >
        His vision is clear: to see nations awakened, churches revived, and a
        generation arise carrying the fire, purity, power, and love of Jesus
        Christ.
      </p>

      <button className="mt-12 rounded-lg border border-amber-500 px-8 py-4 text-amber-400 transition hover:bg-amber-500 hover:text-black">
        Read My Story
      </button>
    </motion.div>

  </div>
</section>

{/* STORY */}

<section
  id="story"
  className="relative overflow-hidden bg-black px-8 py-40 text-white"
>
  <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[250px]" />

  <div className="relative mx-auto max-w-[1600px]">

```
<motion.div
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2 }}
>
  <p
  className={`${cormorant.className} mb-8 text-center uppercase tracking-[0.4em] text-amber-400 text-xl md:text-2xl`}
>
  THE STORY
</p>

  <h2
    className={`${cormorant.className} mb-24 text-center font-bold text-white text-7xl md:text-[7.5rem]`}
  >
    From Darkness To Light
  </h2>
</motion.div>

<div className="grid items-center gap-32 lg:grid-cols-[0.95fr_1.05fr]">

  <motion.div
    initial={{ opacity: 0, x: -150 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.4 }}
  >
    <img
      src="/story.jpg"
      alt="From Darkness To Light"
      className="w-full rounded-[30px] border border-amber-500/20 shadow-[0_0_120px_rgba(245,158,11,0.25)]"
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 150 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.4 }}
  >
    <p
      className={`${cormorant.className} mb-8 text-[1.7rem] leading-[1.9] text-zinc-300`}
    >
      Lukas grew up in a broken family without siblings, in a Polish nation
      marked by deep historical trauma — from the partitions of Poland,
      to the devastation of world wars, and the oppression of the
      communist regime.
    </p>

    <p
      className={`${cormorant.className} mb-8 text-[1.7rem] leading-[1.9] text-zinc-300`}
    >
      Darkness slowly started consuming him, and throughout his life he
      became a lost sheep in a world of wolves, while at the same time
      becoming a wolf himself. Yet deep within the darkness, there was still
      a wounded and forgotten child crying out for true purpose, identity,
      and love.
    </p>

    <p
      className={`${cormorant.className} mb-8 text-[1.7rem] leading-[1.9] text-zinc-300`}
    >
      From a life marked by crime, addiction, destruction, and prisons in
      three different countries, God radically transformed his life from
      darkness to light. What the enemy meant for death, God turned into
      redemption, purpose, and fire for the Kingdom of God.
    </p>

    <p
      className={`${cormorant.className} text-[1.7rem] leading-[1.9] font-semibold text-amber-400`}
    >
      Today, his life stands as a testimony that no one is too far gone for
      the mercy, healing, and transforming power of Jesus Christ.
    </p>

    <a href="#testimony">
      <button className="mt-12 rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400">
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
  className="relative overflow-hidden bg-black px-8 py-40 text-white"
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
        className={`${cormorant.className} mb-8 text-center uppercase tracking-[0.4em] text-amber-400 text-xl md:text-2xl`}
      >
        THE MISSION
      </p>

      <h2
        className={`${cormorant.className} mb-12 text-center font-bold text-white text-6xl md:text-[6rem] leading-[1.1]`}
      >
        Inspired.
        <span className="mx-6 text-white">Equipped.</span>
        <span className="text-amber-400">Activated.</span>
      </h2>

      <p
        className={`${cormorant.className} mx-auto mb-24 max-w-5xl text-center text-[1.8rem] leading-[1.9] text-zinc-300`}
      >
        Lukas carries a passion to see believers inspired by the love of
        Jesus, equipped through prophetic evangelism, and activated to
        reach their communities with the Gospel. His mission is to raise
        ordinary believers who hear God's voice, boldly share their
        faith, and demonstrate the reality of the Holy Spirit wherever
        they go.
      </p>
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
          <Flame size={30} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-6 text-4xl font-bold`}>
          Prophetic Evangelism
        </h3>

        <p className={`${cormorant.className} text-[1.45rem] leading-[1.8] text-zinc-300`}>
          Spirit-led evangelism centered on Jesus Christ, marked by the
          power of the Holy Spirit, prophetic ministry, healing, and the
          uncompromised Gospel. A passion to reach the lost, awaken hearts,
          and lead people into a real encounter with the love and presence
          of God.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
          <Eye size={30} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-6 text-4xl font-bold`}>
          Prophetic Ministry
        </h3>

        <p className={`${cormorant.className} text-[1.45rem] leading-[1.8] text-zinc-300`}>
          Ministering through hearing the voice of God and releasing
          prophetic words that bring encouragement, healing, clarity,
          restoration, and spiritual awakening. Creating space for people
          to encounter the Father's heart and be strengthened in their
          identity and calling.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
          <BookOpen size={30} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-6 text-4xl font-bold`}>
          Discipleship & Activation
        </h3>

        <p className={`${cormorant.className} text-[1.45rem] leading-[1.8] text-zinc-300`}>
          Equipping believers to grow in intimacy with God, hear His voice,
          walk in the gifts of the Holy Spirit, and live boldly for Jesus.
          Focused on helping believers move from passive Christianity into
          Spirit-led lifestyle, evangelism, and authentic relationship with Christ.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
          <Zap size={30} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-6 text-4xl font-bold`}>
          Revival & Awakening
        </h3>

        <p className={`${cormorant.className} text-[1.45rem] leading-[1.8] text-zinc-300`}>
          Gatherings centered on the presence of God, hunger for revival,
          repentance, healing, freedom, and fresh fire from the Holy Spirit.
          A desire to see hearts awakened, lives transformed, and churches
          strengthened through the reality of Jesus Christ.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
        className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur md:col-span-2"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
          <Users size={30} className="text-amber-400" />
        </div>

        <h3 className={`${cormorant.className} mb-6 text-4xl font-bold`}>
          Next Generation
        </h3>

        <p className={`${cormorant.className} text-[1.45rem] leading-[1.8] text-zinc-300`}>
          A heart for the younger generation — especially those struggling
          with identity, addiction, confusion, hopelessness, and
          fatherlessness. Raising sons and daughters rooted in truth,
          purity, boldness, and intimacy with God, carrying the fire and
          love of Jesus Christ.
        </p>
      </motion.div>

    </div>

  </div>
</section>
{/* SPIRITUAL COVERING */}

<section
  id="covering"
  className="relative overflow-hidden bg-black px-8 py-40 text-white"
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
        className={`${cormorant.className} mb-8 text-center uppercase tracking-[0.4em] text-amber-400 text-xl md:text-2xl`}
      >
        SPIRITUAL COVERING & DISCIPLESHIP
      </p>

      <h2
        className={`${cormorant.className} mb-10 text-center font-bold text-white text-7xl md:text-[7rem] leading-[0.95]`}
      >
        Spiritual Covering &
        <br />
        Discipleship
      </h2>

      <p
        className={`${cormorant.className} mb-20 text-center text-4xl md:text-5xl font-semibold text-amber-400`}
      >
        Inspired. Equipped. Activated.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4 }}
      className="mx-auto max-w-6xl text-center"
    >
      <p
        className={`${cormorant.className} mb-12 text-[1.8rem] leading-[2] text-zinc-300`}
      >
        Lukas Puchalski is being discipled through the

        <span className="font-bold text-amber-400">
          {" "}YESURN1 Discipleship Program under Prophet Evangelist Alex Shore-Nye{" "}
        </span>

        , growing in prophetic evangelism, hearing the voice of God,
        and ministering through the power of the Holy Spirit.
      </p>

      <p
        className={`${cormorant.className} mb-12 text-[1.8rem] leading-[2] text-zinc-300`}
      >
        Through discipleship, prophetic activation, and spiritual
        equipping, Lukas carries a growing burden to see believers
        awakened, equipped, and sent into prophetic missions with
        boldness, humility, purity, and the love of Jesus Christ.
      </p>

      <p
        className={`${cormorant.className} text-[1.8rem] leading-[2] text-zinc-300`}
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
</main>
);
}
