import BigTitle from "@/components/base/BigTitle"
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

const ToysM = async () => {
  const toys = await getToys()
  return (
    <section className="mb-24">
      <BigTitle title={['周边', '研发']} className="flex w-fit mb-12 ml-6" />
      <div className="flex snap-x snap-mandatory overflow-x-auto">
        <div className="snap-start scroll-mx-6 mr-6 shrink-0" />
        {toys.map((toy, i) => (
          <Image src={`/toys/${toy}.jpg`} alt='Toy' key={i}
            width={512} height={512}
            className="rounded-xl shadow-sm object-cover snap-start scroll-mx-6 mr-6 shrink-0 h-96 w-64" />
        ))}
      </div>
    </section>
  )
}

export default ToysM
