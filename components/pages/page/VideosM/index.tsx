import BigTitle from "@/components/base/BigTitle"
import Link from "next/link"
import classNames from "classnames"
import Title from "@/components/base/Title"
import { Video } from "@/types/videos"

const getVideos = async () => {
  const videos: Video[] = [{
    title: '用Minecraft的方式打开『明日方舟』',
    desc: '鹰角网络『明日方舟』\n『是时候启航了』',
    cover: 'b832e19a2d2f2f9ff22719ad51c7d3496bb8f6a0',
    link: 'https://www.bilibili.com/video/BV1R7411a7Si/?spm_id_from=333.337.search-card.all.click'
  }, {
    title: '【2022华灯宴单品】爱丽丝梦游仙境',
    desc: '由MineCraft幻想乡、映素作坊联合制作的东方同人音乐剧MC动画，原曲：あの日の夢のアリス',
    cover: '772e01ee6e2526a5e3e837ce78ee3bf2973b8342',
    link: 'https://www.bilibili.com/video/BV1vb4y177KH/?spm_id_from=333.337.search-card.all.click'
  }, {
    title: '🎷萨克斯方豹🎷',
    desc: '🎷∠( ＞w＜ 」∠)_',
    cover: 'ee239d1f066a54cf368106399f2ce5375504a714',
    link: 'https://www.bilibili.com/video/BV1E3411N7qe/?spm_id_from=333.337.search-card.all.click'
  }, {
    title: '【波兰方球】一 个 喷 嚏',
    desc: '呃乌 距离上次做视频很久了，我们这段时间没动静是因为参与了华灯宴与mc拜年祭，希望你们喜欢我们的整活喔~',
    cover: '322f1379a53d8ebe280fa8c02f746efa95317822',
    link: 'https://www.bilibili.com/video/BV1XV411y7PC/?spm_id_from=333.337.search-card.all.click'
  }]

  return videos
}

const VideosM = async () => {
  const videos = await getVideos()
  return (
    <section className="mb-24">
      <BigTitle title={['动画', '作品']} className="flex w-fit mb-12 ml-6" />
      <div className="flex snap-x snap-mandatory overflow-x-auto">
        <div className="snap-start scroll-mx-6 mr-6 shrink-0" />
        {videos.map((video, i) => (
          <Link href={video.link} target="_blank" key={i} className="snap-start scroll-mx-6 mr-6 shrink-0 h-96 w-64">
            <div className="rounded-xl overflow-hidden shadow-sm bg-cover bg-center h-full"
              style={{ backgroundImage: `url('/videos/${video.cover}.jpg')` }}>
              <div className={classNames(
                'h-full w-full',
                'bg-gradient-to-t from-black/50 to-transparent',
                'p-4',
                'flex flex-col justify-end'
              )}>
                <Title className={classNames(
                  'text-white line-clamp-2',
                  { '-indent-3': video.title.startsWith('【') }
                )}>{video.title}</Title>
                <p className="opacity-80 text-white line-clamp-2">
                  {video.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default VideosM
