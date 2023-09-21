import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-lbg dark:bg-dbg py-8 border-t border-zinc-500/20">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
        <Link href={'/'} className="text-sm">
          Copyright © 2023 MMixel
        </Link>
        <Link href="https://beian.miit.gov.cn/" target="_blank" className="text-sm flex items-center">
          黑ICP备19000898号-5
        </Link>
      </div>
    </div>
  )
}

export default Footer
