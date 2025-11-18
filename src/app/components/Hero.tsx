"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-14 pb-8">
      <div className="grid items-center gap-8 md:grid-cols-[160px_1fr]">
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
          <Image
            src="/avatar.jpg" // сложи файл в /public, иначе замени с /next.svg временно
            alt="Anton Tzonev"
            width={160}
            height={160}
            className="rounded-2xl ring-1 ring-slate-800 object-cover bg-slate-900"
            priority
          />
        </motion.div>

        <motion.div
          initial={{opacity:0,y:8}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.05}}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Здрасти, аз съм Антон — QA/Automation инженер, който обича чисти тестове,
            ясни репорти и стабилни билдове.
          </h1>
          <p className="mt-3 text-slate-300">
            Работя с C#, Postman/Newman, JMeter и CI/CD. В свободното време — бягане и
            битка с един твърде любознателен булдог. 🙂
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Anton-CV-BG.pdf"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400"
              download
            >
              📄 Изтегли CV (BG)
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
            >
              ✉️ Свържи се с мен
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
