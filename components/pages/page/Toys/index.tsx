import BigTitle from "@/components/base/BigTitle"
import Card from "@/components/base/Card"
import Image from "next/image"

const getToys = async () => {
  const toys = [
    'c8adf2fc128c55a7d94c558b5ee3121b91b683cd8a63b9d285ec684495e96eed',
    '97e37fb84b0e6cde9d8225edc77dab0750f88dc3862341fa7bf5393b1f54305b',
    '2cb4620a838195c827034d735d92e19e730251e4d1b2d88ea4cf1eaa147874c3',
    'f47c66af07c72974d52932d3da91f3791fe48cc55d2ac49b8ec2ea4dee525321'
  ]
  return toys
}

const Toys = async () => {
  const toys = await getToys()
  return (
    <div className="h-screen max-h-[48rem] flex">
      <div className="grid grid-cols-7 grid-rows-2 gap-4 h-[36rem] m-auto w-full">
        <Image src={`/toys/${toys[0]}.jpg`} alt="Toy"
          width={512} height={512}
          className="rounded-xl shadow-sm col-span-3 row-span-2 h-full object-cover" />
        <Image src={`/toys/${toys[1]}.jpg`} alt="Toy"
          width={512} height={512}
          className="rounded-xl shadow-sm col-span-2 h-full object-cover" />
        <Image src={`/toys/${toys[2]}.jpg`} alt="Toy"
          width={512} height={512}
          className="rounded-xl shadow-sm col-span-2 h-full object-cover" />
        <Image src={`/toys/${toys[3]}.jpg`} alt="Toy"
          width={512} height={512}
          className="rounded-xl shadow-sm col-span-2 h-full object-cover" />
        <Card className="flex col-span-2">
          <BigTitle title={['周边', '研发']} className="m-auto text-center flex" />
        </Card>
      </div>
    </div>
  )
}

export default Toys
