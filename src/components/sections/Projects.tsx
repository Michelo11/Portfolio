"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Dashy",
      description:
        "A customizable Discord bot designed to enhance server functionality and user experience.",
      tech: ["Next.js", "Discord API", "PostgreSQL", "Hono"],
      github: "https://github.com/Michelo11/Dashy",
      demo: "https://dashy.michelemanna.me",
      showDemo: true,
    },
    {
      title: "Phpit",
      description:
        "A simple and dynamic platform for sharing short messages, images, in real time.",
      tech: ["Laravel", "React", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/Michelo11/Phpit",
      demo: "#",
      showDemo: false,
    },
    {
      title: "Drive",
      description:
        "A simple drive app for storing and managing files.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/Michelo11/Drive",
      demo: "#",
      showDemo: false,
    },
    {
      title: "Whatsapp",
      description:
        "A whatsapp clone using websocket and RSA encryption.",
      tech: ["React Native", "Hono", "PostgreSQL", "WebSocket"],
      github: "https://github.com/Michelo11/Whatsapp",
      demo: "#",
      showDemo: false,
    },
    {
      title: "Phone Plugin",
      description:
        "A minecraft plugin for receiving phone calls and sending messages with a minecraft phone.",
      tech: ["Java", "Spigot", "Maven"],
      github: "https://github.com/Michelo11/Phone",
      demo: "https://www.spigotmc.org/resources/phone.115808",
      showDemo: true,
    },
    {
      title: "Wallet Plugin",
      description:
        "A minecraft plugin that allows players to manage their in-game currency, transactions and documents.",
      tech: ["Java", "Spigot", "Maven"],
      github: "https://github.com/Michelo11/Wallet",
      demo: "https://www.spigotmc.org/resources/wallet.120318/",
      showDemo: true,
    },
    {
      title: "Kingdoms Plugin",
      description:
        "A minecraft plugin that adds clans, territorial wars, and an economy system to your server.",
      tech: ["Java", "Spigot", "Maven"],
      github: "https://github.com/Michelo11/Kingdoms",
      demo: "#",
      showDemo: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold">- 04 -</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">MY PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-400 border-blue-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                    asChild
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title}`}>
                      Code
                    </Link>
                  </Button>
                  {project.showDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                      asChild
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Visualizza demo di ${project.title}`}>
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
