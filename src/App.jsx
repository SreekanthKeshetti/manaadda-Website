import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Problem } from "./components/Problem";
import { HowItWorks } from "./components/HowItWorks";
import { VideoReels } from "./components/VideoReels";
import { Features } from "./components/Features";
import { DualRole } from "./components/DualRole";
import { ForContractors } from "./components/ForContractors";
import { AddaExplorer } from "./components/AddaExplorer";
import { SocialFeed } from "./components/SocialFeed";
import { DownloadSection } from "./components/Download";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-bg text-warm-dark selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <VideoReels />
        <Features />
        <DualRole />
        <ForContractors />
        <AddaExplorer />
        <SocialFeed />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
