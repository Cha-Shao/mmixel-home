import Hero from "@/components/pages/page/Hero";
import Members from "@/components/pages/page/Members";
import Toys from "@/components/pages/page/Toys";
import Videos from "@/components/pages/page/Videos";
import Works from "@/components/pages/page/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-screen-xl mx-auto px-16">
        <Works />
        <Videos />
        <Toys />
        <Members />
      </div>
    </main>
  )
}
