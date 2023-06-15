import BigTitle from "@/components/base/BigTitle"
import Card from "@/components/base/Card"
import WorkCard from "./WorkCard"

export interface Work {
  label: string
  icon: string
  href: string
  grid: [number, number]
}

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

const Works = async () => {
  const works = await getWorks()
  return (
    <div className="h-screen max-h-[48rem] flex">
      <div className='grid grid-cols-10 grid-rows-7 gap-4 h-[36rem] m-auto w-full'>
        <WorkCard {...works[0]} />
        <Card className="col-span-4 row-span-7 flex">
          <BigTitle title={['映素', '团队']} className="m-auto text-center flex" />
        </Card>
        <WorkCard {...works[1]} />
        <WorkCard {...works[2]} />
        <WorkCard {...works[3]} />
      </div>
    </div>
  )
}

export default Works
