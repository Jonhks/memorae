import { setRequestLocale, getTranslations } from "next-intl/server";

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";

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
      {t("title")}
      <HeroHeader />
      <HeroSection />
    </div>
  );
}
