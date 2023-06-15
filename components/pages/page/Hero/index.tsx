import ClientIcon from "@/components/base/ClientIcon";
import Title from "@/components/base/Title";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-hero bg-[length:100%_100%]">
      <div className="flex flex-col justify-center items-center text-center h-screen relative px-6">
        <Image src='/icon.svg' alt='Logo'
          width={384} height={384}
          className="mx-auto mb-16 w-48 xl:w-96"
        />
        <Title size="xl" className="mb-4">晚点再想（）</Title>
        <p>因为年轻，什么都敢于尝试 因为年轻 我们不怕碰壁</p>
        <p>因为年轻，我们敢为自己爱好奋斗， 我们可能奔向那个未来，也可能因此堕入深渊</p>
        <p>但我们从未害怕过</p>
        <ClientIcon icon="ri:arrow-down-double-line" width={32} className="absolute opacity-25 bottom-4 animate-bounce" />
      </div>
      <div className="h-48 hidden md:block" />
    </div>
  )
};

export default Hero;
