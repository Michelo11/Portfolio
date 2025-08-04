"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next.js and Stripe",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Discord Bot Framework",
      description: "Modular Discord bot with advanced command handling",
      tech: ["Node.js", "Discord.js", "MongoDB", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Plugin Management System",
      description: "WordPress plugin for advanced content management",
      tech: ["PHP", "JavaScript", "MySQL", "WordPress"],
      github: "#",
      demo: "#",
    },
    {
      title: "Server Monitoring Dashboard",
      description: "Real-time server monitoring with custom alerts",
      tech: ["Vue.js", "Node.js", "Socket.io", "Linux"],
      github: "#",
      demo: "#",
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
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
