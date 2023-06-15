import { HTMLAttributes } from 'react'
import Title from '../base/Title'

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: [string, string]
}

const BigTitle = (props: Props) => {
  return (
    <div className={`relative ${props.className}`}>
      <Title size="xl" className="text-main z-10">{props.title[0]}</Title>
      <Title size="xl" className="z-10">{props.title[1]}</Title>
      <h1 className="text-[5rem] text-error blur-2xl absolute left-4 -top-12 select-none opacity-80">模</h1>
      <h1 className="text-[5rem] text-main blur-2xl absolute right-4 -top-4 select-none opacity-80">糊</h1>
    </div>
  )
}

export default BigTitle
