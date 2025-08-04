"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold">- 05 -</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">MY SOCIALS</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="p-4 rounded-lg bg-red-600/20 w-fit mx-auto mb-4">
                <Mail size={32} className="text-red-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <Link href="mailto:hello@michelemanna.me" aria-label="Send an email to Michele">
                <p className="text-blue-400">hello@michelemanna.me</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="p-4 rounded-lg bg-indigo-600/20 w-fit mx-auto mb-4">
                <MessageCircle size={32} className="text-indigo-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Discord
              </h3>
              <Link href="https://discord.com/users/573539095452844052" target="_blank" rel="noopener noreferrer" aria-label="Contact Michele on Discord">
                <p className="text-blue-400">michele0001</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="p-4 rounded-lg bg-gray-600/20 w-fit mx-auto mb-4">
                <Github size={32} className="text-gray-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                GitHub
              </h3>
              <Link href="https://github.com/Michelo11" target="_blank" rel="noopener noreferrer" aria-label="Visit Michele's GitHub profile">
                <p className="text-blue-400">Michelo11</p>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
