"use client";

import { Code2, Server, Bot, Puzzle } from "lucide-react";

export default function Skills() {
  const roles = [
    { title: "Front-End Developer", years: "3+ Years", icon: Code2 },
    { title: "Back-End Developer", years: "3+ Years", icon: Server },
    { title: "System Administrator", years: "2+ Years", icon: Server },
    { title: "Bot Developer", years: "2+ Years", icon: Bot },
    { title: "Plugin Developer", years: "1+ Years", icon: Puzzle },
  ];

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "Java", level: 75 },
    { name: "React / Next.js", level: 85 },
    { name: "Laravel", level: 80 },
    { name: "React Native", level: 80 },
    { name: "Astro", level: 75 },
    { name: "TypeScript", level: 87 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Linux", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold">- 02 -</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">MY SKILLS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="p-3 rounded-lg bg-blue-600/20">
                  <role.icon size={24} className="text-blue-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{role.title}</h3>
                  <p className="text-gray-400 text-sm">{role.years}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-blue-400 text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
