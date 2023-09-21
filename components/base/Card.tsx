import { HTMLAttributes, PropsWithChildren } from "react"
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {

}

const Card = (props: Props) => {
  return (
    <div className={classNames(
      props.className,
      'shadow-sm',
      'bg-lbg dark:bg-dbg border border-zinc-500/20',
      'rounded-xl',
      'p-6'
    )}>
      {props.children}
    </div>
  )
}

export default Card
