"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

type HeroProps = {
  scrollToSection: (sectionId: string) => void;
};

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          HELLO, MY NAME IS <span className="text-blue-400">MICHELE</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
          <Typewriter
            options={{
              strings: [
                "FULL STACK WEB DEVELOPER",
                "DISCORD BOT DEVELOPER",
                "PLUGIN DEVELOPER",
                "LINUX SYSTEM ADMINISTRATOR",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer from Italy, specialized in creating modern
          websites, functional Discord bots and other platforms, custom plugins,
          and advanced Linux system administration. With both frontend and
          backend skills, I offer complete solutions for all your digital needs.
        </p>

        <Button
          onClick={() => scrollToSection("about")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          EXPLORE MY WORK
        </Button>
      </div>
    </section>
  );
}
