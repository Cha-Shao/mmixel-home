import classNames from "classnames"
import { HTMLAttributes, PropsWithChildren } from "react"
import { SizeType } from "@/types/components"

interface Props extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  size?: | SizeType | 'xl'
}

const Title = (props: Props) => {
  switch (props.size) {
    case 'xl':
      return <h1 className={classNames('text-xl', props.className)}>{props.children}</h1>
    case 'lg':
      return <h2 className={classNames('text-lg', props.className)}>{props.children}</h2>
    case 'sm':
      return <h4 className={classNames('text-sm', props.className)}>{props.children}</h4>
    case 'ty':
      return <h5 className={classNames('text-ty', props.className)}>{props.children}</h5>
    default: // md
      return <h3 className={classNames('text-md', props.className)}>{props.children}</h3>
  }
}

export default Title