"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CTAProps = {
  scrollToSection: (sectionId: string) => void;
};

export default function CTA({ scrollToSection }: CTAProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              GET A QUOTE!
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Interested in working together on your project? Get a rough
              quote instantly contacting me on Discord!
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              CONTACT ME
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
