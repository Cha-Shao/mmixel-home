import Card from "@/components/base/Card"
import VideoCard from "./VideoCard"
import BigTitle from "@/components/base/BigTitle"
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

const Videos = async () => {
  const videos = await getVideos()
  return (
    <div className="h-screen max-h-[48rem] flex">
      <div className="grid grid-cols-7 grid-rows-2 gap-4 h-[36rem] m-auto w-full">
        <VideoCard {...videos[1]} />
        <VideoCard {...videos[2]} />
        <VideoCard {...videos[0]} main />
        <Card className="flex col-span-2">
          <BigTitle title={['动画', '作品']} className="m-auto text-center flex" />
        </Card>
        <VideoCard {...videos[3]} />
      </div>
    </div>
  )
}

export default Videos
