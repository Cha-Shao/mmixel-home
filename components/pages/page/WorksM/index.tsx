import Card from "@/components/base/Card"
import Link from "next/link"
import Image from "next/image"
import Title from "@/components/base/Title"
import BigTitle from "@/components/base/BigTitle"
import { Work } from "@/types/works"

const getWorks = async () => {
  const works: Work[] = [{
    label: '映素工坊',
    icon: 'model',
    href: 'https://art.mmixel.com',
    grid: [3, 4]
  }, {
    label: '映素工坊',
    icon: 'model',
    href: 'https://art.mmixel.com',
    grid: [3, 3]
  }, {
    label: '映素工坊',
    icon: 'model',
    href: 'https://art.mmixel.com',
    grid: [3, 4]
  }, {
    label: '映素工坊',
    icon: 'model',
    href: 'https://art.mmixel.com',
    grid: [3, 3]
  }]

  return works
}
const WorksM = async () => {
  const works = await getWorks()
  return (
    <section className="mb-24">
      <BigTitle title={['映素', '团队']} className="flex w-fit mb-12 ml-6" />
      <div className="flex snap-x snap-mandatory overflow-x-auto">
        <div className="snap-start scroll-mx-6 mr-6 shrink-0" />
        {works.map((work, i) => (
          <Link href={work.href} target="_blank" key={i} className="snap-start scroll-mx-6 mr-6 shrink-0">
            <Card className="flex">
              <div className="m-auto text-center py-6">
                <Image
                  src={`/works/${work.icon}.png`} alt='Icon'
                  width={128} height={128}
                  quality={100}
                  className="mb-4 h-32 w-32"
                />
                <Title size="md">{work.label}</Title>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default WorksM
