import Hero from "@/components/pages/page/Hero";
import Members from "@/components/pages/page/Members";
import MembersM from "@/components/pages/page/MembersM";
import Toys from "@/components/pages/page/Toys";
import ToysM from "@/components/pages/page/ToysM";
import Videos from "@/components/pages/page/Videos";
import VideosM from "@/components/pages/page/VideosM";
import Works from "@/components/pages/page/Works";
import WorksM from "@/components/pages/page/WorksM";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Desktop */}
      <div className="hidden md:block max-w-screen-xl mx-auto px-16">
        <Works />
        <Videos />
        <Toys />
        <Members />
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <WorksM />
        <VideosM />
        <ToysM />
        <MembersM />
      </div>
    </main>
  )
}
