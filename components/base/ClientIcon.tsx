'use client'
import { Icon, IconProps } from "@iconify/react"

interface Props extends IconProps {
}

const ClientIcon = (props: Props) => {
  return (
    <Icon
      {...props}
    />
  )
}

export default ClientIcon
