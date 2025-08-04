"use client";

import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold">- 01 -</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">ABOUT ME</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6">
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-300">
                  <div className="text-blue-400">
                    {"const"} <span className="text-white">developer</span> ={" "}
                    {"{"}
                  </div>
                  <div className="ml-4 text-green-400">
                    name: <span className="text-yellow-400">&apos;Michele&apos;</span>,
                  </div>
                  <div className="ml-4 text-green-400">
                    location: <span className="text-yellow-400">&apos;Italy&apos;</span>,
                  </div>
                  <div className="ml-4 text-green-400">
                    skills:{" "}
                    <span className="text-white">
                      [&apos;fullstack&apos;, &apos;bots&apos;, &apos;plugins&apos;]
                    </span>
                  </div>
                  <div className="text-blue-400">{"}"}</div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a developer and system administrator from Italy. I have a
              passion for creating fullstack websites, Discord bots, plugins,
              and managing systems. I love to learn new technologies and
              improve my skills every day.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              You can learn more about my skills and the technologies I know
              below.
            </p>
            <div className="text-right">
              <span className="text-blue-400 font-semibold text-lg">
                - Michele
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
