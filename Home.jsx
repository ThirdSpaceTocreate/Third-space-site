import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-100 text-gray-800 font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Third Space</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A calm, creative space where integration, healing, and expression meet. Rooted in occupational therapy and the arts.
        </p>
        <div className="mt-4 space-y-2">
          <a
            href="https://instagram.com/Olympio_official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline text-lg block"
          >
            Follow Raphael on Instagram @Olympio_official
          </a>
          <a
            href="https://open.spotify.com/artist/0X3Acz7PGeQTXExGB7FwLJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline text-lg block"
          >
            Listen on Spotify
          </a>
          <a
            href="https://www.buymeacoffee.com/olympio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline text-lg block"
          >
            Tap here to support me with a donation or a coffee ☕
          </a>
        </div>
      </header>
      {/* Additional content truncated for brevity */}
    </div>
  );
}