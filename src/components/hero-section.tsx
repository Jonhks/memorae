import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import { useTranslations } from "next-intl";
import ImgBosque from "../assets/img/playa.png";
import { Card, CardContent } from "@/components/ui/card";
import HowItWorks from "./HowItWorks";
import { Experiences } from "./Experiences";
import { Privacy } from "./Privacy";
import { Plans } from "./Plans";
import { Waitlist } from "./Waitlist";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const t = useTranslations("HomePage");
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section id="hero">
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 0.5,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20 "
            >
              <Image
                src={ImgBosque}
                alt="imgBosque"
                className="absolute inset-x-0 top-80 -z-20 lg:top-32 dark:block object-bottom"
                width="3276"
                height="4095"
                priority
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#contacto"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      {t("btnActionInicio")}
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-6 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  {t("title")}
                </TextEffect>
                {/* <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  className="mt-0 text-balance text-4xl md:text-6xl lg:mt-8 xl:text-[4.25rem]"
                >
                  {t("subtitle")}
                </TextEffect> */}
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-3xl text-balance text-lg"
                >
                  {t("secondSubtitle")}
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  {/* <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div> */}
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-wrap">
                        {t("btnActionUnirse")}
                      </span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-85%"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <AnimatedGroup
                  triggerOnScroll
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.1,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                >
                  <section
                    id="que-es"
                    className="w-full py-24 px-6 scroll-mt-24"
                  >
                    <div className="mx-auto max-w-3xl text-center">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                        ¿Qué es inTime?
                      </h2>

                      <Card className="bg-transparent border-none shadow-none">
                        <CardContent className="p-0 space-y-6 text-lg text-muted-foreground leading-relaxed">
                          <p>
                            inTime es un espacio privado donde las personas
                            pueden dejar mensajes para quienes forman parte de
                            su vida. Mensajes que no siempre pueden decirse a
                            tiempo, pero que merecen ser leídos.
                          </p>

                          <p>
                            Cada mensaje es personal, confidencial y dirigido a
                            alguien específico. El usuario decide qué decir, a
                            quién va dirigido y <strong>NOSOTROS</strong> nos
                            encargamos de que sea recibido a tiempo.
                          </p>

                          <p className="text-foreground font-medium">
                            inTime no es una red social ni un lugar público. Es
                            un espacio íntimo para dejar palabras, decisiones y
                            deseos que importan.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
                  <section
                    id="funciona"
                    className="scroll-mt-24"
                  >
                    <HowItWorks />
                  </section>
                  <section>
                    <Experiences />
                  </section>
                  <section>
                    <Privacy />
                  </section>
                  <section>
                    <Plans />
                  </section>
                </AnimatedGroup>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
