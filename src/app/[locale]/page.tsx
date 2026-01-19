import { setRequestLocale, getTranslations } from "next-intl/server";

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Footer } from "@/components/Footer";
import { Waitlist } from "@/components/Waitlist";

interface HomeProps {
  params: {
    locale: string;
    [key: string]: unknown;
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <Waitlist />
      <Footer />
    </div>
  );
}
