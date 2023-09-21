import Card from "@/components/base/Card"
import Title from "@/components/base/Title"
import Image from "next/image"
import ClientIcon from "@/components/base/ClientIcon"
import ExternalLinkLine from '@iconify/icons-ri/external-link-line'
import Link from "next/link"
import { Member } from "@/types/members"

const Content = (props: Member) => {
  return (
    <Card className="mb-2 relative">
      <div className="flex items-start mb-2">
        <Image src={props.avatar} alt="Avatar"
          width={48} height={48}
          className="mr-4 rounded-full" />
        <div>
          <Title size="sm">{props.name}</Title>
          <p className="opacity-50 text-sm">{props.brief}</p>
        </div>
      </div>
      <p>{props.content}</p>
      {props.link && (
        <ClientIcon
          icon={ExternalLinkLine}
          className="absolute top-6 right-6 opacity-50"
        />
      )}
    </Card>
  )
}

const MemberCard = (props: Member) => {
  return props.link ? (
    <Link href={props.link} target="_blank">
      <Content {...props} />
    </Link>
  ) : (
    <Content {...props} />
  )
}

export default MemberCard
