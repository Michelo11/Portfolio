"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Bot, Puzzle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I can create responsive fullstack websites with React, Tailwind, and modern frameworks.",
      icon: Code2,
    },
    {
      title: "Bot Development",
      description:
        "I can create a Discord bot for your server, with custom commands and features.",
      icon: Bot,
    },
    {
      title: "System Administration",
      description:
        "I can manage your servers, setup and maintain the systems you need and want.",
      icon: Server,
    },
    {
      title: "Plugin Development",
      description:
        "I can create a plugin for your service, with custom commands and features.",
      icon: Puzzle,
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold">- 03 -</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">MY SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="p-4 rounded-lg bg-blue-600/20 w-fit mx-auto mb-4">
                  <service.icon size={32} className="text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
