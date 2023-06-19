'use client'
import ClientIcon from "@/components/base/ClientIcon";
import Title from "@/components/base/Title";
import classNames from "classnames";
import Image from "next/image";
import { useMediaQuery } from '@material-ui/core'

const Hero = () => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')
  return (
    <div className={classNames(
      isDark ? 'bg-hero-dark' : 'bg-hero',
      // 'bg-cover aspect-[1920/1440]'
      'bg-cover bg-center'
    )}>
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
      <div className="h-[calc(100vh/4)] bg-gradient-to-b from-transparent to-lpbg dark:to-dpbg" />
    </div>
  )
};

export default Hero;
