import Card from "@/components/base/Card"
import Title from "@/components/base/Title"
import { Work } from "@/types/works"
import Image from "next/image"
import Link from "next/link"

const WorkCard = (props: Work) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      style={{
        gridColumn: `span ${props.grid[0]} / span ${props.grid[0]}`,
        gridRow: `span ${props.grid[1]} / span ${props.grid[1]}`
      }}>
      <Card className="flex h-full">
        <div className="m-auto text-center">
          <Image
            src={`/works/${props.icon}.png`} alt='Icon'
            width={128} height={128}
            quality={100}
            className="mb-4 h-32 w-32"
          />
          <Title size="md">{props.label}</Title>
        </div>
      </Card>
    </Link>
  )
}

export default WorkCard
