"use client";
import Link from "next/link";
import logo2 from "../assets/logo/logo.svg";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroHeader = () => {
  const t = useTranslations("Header");

  const menuItems = [
    // { name: t("menuItem1"), href: "#hero" },
    { name: t("menuItem2"), href: "#que-es" },
    { name: t("menuItem3"), href: "#funciona" },
    { name: t("menuItem4"), href: "#contacto" },
  ];

  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Botón sencillo para cambiar idioma
  function LocaleButton() {
    const [locale, setLocale] = React.useState("en");
    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const pathParts = window.location.pathname.split("/");
        setLocale(pathParts[1] === "es" ? "es" : "en");
      }
    }, []);
    const otherLocale = locale === "en" ? "es" : "en";
    const handleClick = () => {
      if (typeof window !== "undefined") {
        const pathParts = window.location.pathname.split("/");
        pathParts[1] = otherLocale;
        window.location.pathname = pathParts.join("/");
      }
    };
    return (
      <button
        onClick={handleClick}
        className="ml-2 rounded px-2 py-1 border border-muted-foreground bg-background text-muted-foreground hover:bg-muted-foreground hover:text-background transition-colors text-xs"
        aria-label={`Cambiar idioma a ${otherLocale}`}
      >
        {otherLocale.toUpperCase()}
      </button>
    );
  }

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              {/* <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              > */}
              {/* {logo2} */}
              <Image
                src={logo2}
                alt="Logo"
                width={100}
                height={100}
              />
              {/* </Link> */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="ml-4 flex items-center">
                <span className="mr-2 text-xs text-muted-foreground"></span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted-foreground rounded-full peer peer-focus:ring-2 peer-focus:ring-accent-foreground dark:bg-zinc-700 peer-checked:bg-accent-foreground transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-background rounded-full transition-transform peer-checked:translate-x-5"></div>
                </label>
              </button>
              {/* <LocaleButton /> */}
              {/* <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <Link href="#">
                    <span>Sign Up</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                >
                  <Link href="#">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
