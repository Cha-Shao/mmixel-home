import Title from "@/components/base/Title"
import type { Video } from "."
import classNames from "classnames"
import Link from "next/link"

const VideoCard = (props: Video & { main?: boolean }) => {
  return (
    <Link
      href={props.link}
      target="_blank"
      className={classNames(
        props.main ? 'col-span-3' : 'col-span-2',
        { 'row-span-2': props.main }
      )}>
      <div
        className="rounded-xl overflow-hidden shadow-sm bg-cover h-full"
        style={{ backgroundImage: `url('/videos/${props.cover}.jpg')` }}>
        <div className={classNames(
          'h-full w-full',
          'bg-gradient-to-t from-black/50 to-transparent',
          'p-4',
          'flex flex-col justify-end'
        )}>
          <Title size="md" className={classNames(
            'text-white line-clamp-2',
            { '-indent-3': props.title.startsWith('【') }
          )}>{props.title}</Title>
          <p className="opacity-80 text-white line-clamp-2">
            {props.desc}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
