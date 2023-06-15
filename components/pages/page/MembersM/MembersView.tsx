'use client'
import { useState } from "react"
import { Member } from "../Members"
import Image from "next/image"
import MemberCard from "../Members/MemberCard"
import classNames from "classnames"

const MembersView = (props: Member[]) => {
  const [index, setIndex] = useState<number>(0)
  const members = Object.entries(props).map(([_, val]) => val)
  return (
    <>
      <div className="flex snap-x snap-mandatory overflow-x-auto mb-6">
        <div className="snap-start scroll-mx-2 mr-6 shrink-0" />
        {members.map((member, i) =>
          <Image key={i} src={member.avatar} alt="Avatar"
            width={48} height={48}
            className={classNames(
              'snap-start scroll-mx-2 mr-2 shrink-0 rounded-full',
              'border-2 duration-200',
              i === index ? 'border-main' : 'border-transparent'
            )}
            onClick={() => { setIndex(i) }} />
        )}
        <div className="snap-start scroll-mx-2 mr-4 shrink-0" />
      </div>
      <div className="mx-6">
        <MemberCard {...members[index]} />
      </div>
    </>
  )
}

export default MembersView
