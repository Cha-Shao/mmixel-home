import BigTitle from "@/components/base/BigTitle"
import { chunk, shuffle } from 'lodash'
import MemberCard from "./MemberCard"
import { Member } from "@/types/members"

const getMembers = async () => {
  const members: Member[] = [{
    name: '哥斯拉',
    brief: '金刚 退 退 退',
    content: '是创立这个组的家伙，每日冒着被组员炖的风险在努力生活与推动小组的发展',
    avatar: '/avatars/gsl.jpg',
    link: 'https://space.bilibili.com/17798027',
  }, {
    name: '叉烧',
    brief: '前端',
    content: 'React真的很好用啊啊啊()',
    avatar: '/avatars/chashao.jpg',
    link: 'https://space.bilibili.com/23265721',
  }, {
    name: '蘑菇',
    brief: '像素画师',
    content: '你是菇，比我更菇',
    avatar: '/avatars/mogu.jpg',
    link: 'https://space.bilibili.com/5706445',
  }, {
    name: '酒石酸菌',
    brief: '既过不恋，当时不杂，过往不恋，未来不迎',
    content: 'Minecraft 模组教程作者、模组开发者、已弃坑模组翻译者。爱好自然科学、历史和计算机。',
    avatar: '/avatars/943.jpg',
    link: 'https://space.bilibili.com/4435845',
  }, {
    name: '火锅料理',
    brief: '地形师',
    content: '负责技术流程研究和场景搭建',
    avatar: '/avatars/huoguoliaoli.jpg',
    link: 'https://space.bilibili.com/13073402',
  }, {
    name: '白X',
    brief: '吃瓜',
    content: '这人没啥用，躺，摆，偶尔出来听个响。',
    avatar: '/avatars/baix.jpg',
  }, {
    name: '天鈴',
    brief: '摸抖儿',
    content: '人不好色好甚么？how are u 吗？',
    avatar: '/avatars/tianling.jpg',
    link: 'https://space.bilibili.com/122954448',
  }, {
    name: '咖啡鱼',
    brief: '脚本师傅',
    content: '好麻烦',
    avatar: '/avatars/kafeiyu.jpg',
    link: 'https://space.bilibili.com/104972076',
  }, {
    name: '冰精',
    brief: 'SMART WINGMAN-B3',
    content: '𐤀𐤌𐤀𐤓𐤀𐤆𐤄𐤍𐤄𐤒𐤈𐤒𐤌𐤎𐤓𐤒𐤕',
    avatar: '/avatars/bingjing.jpg',
  }, {
    name: '包子725',
    brief: '摸鱼的屑',
    content: '摸鱼，盖屑建筑，摸鱼，盖火柴盒，摸鱼，被抓住摸鱼，摸鱼',
    avatar: '/avatars/baozi.jpg',
  }, {
    name: '小格',
    brief: '编曲',
    content: '扣1送水栽竹',
    avatar: '/avatars/xiaoge.jpg',
  }, {
    name: '暗娅',
    brief: '这里有六边形战士，等级一',
    content: '这是什么，鱼，摸一下。这是什么，鱼，摸一下。这是什么，鱼，摸一下。',
    avatar: '/avatars/anya.jpg',
    link: 'https://space.bilibili.com/5718046',
  }, {
    name: 'Normal_sd',
    brief: 'BB爱好者 上色什么的不会啦（绝望）',
    content: '常规3D制作人（咕咕中）稍微能做一些载具和枪械，对人物感兴趣，正在试图学习上色(绝赞混素中)',
    avatar: '/avatars/normalsd.jpg',
    link: 'https://space.bilibili.com/2057712',
  }, {
    name: 'GhastRiv',
    brief: '项目合作商',
    content: '职业Live2D动画师，映素编外项目合作人员',
    avatar: '/avatars/ghastriv.jpg',
    link: 'https://www.pixiv.net/users/3961302',
  }, {
    name: '早',
    brief: '开发者',
    content: '呱！ 走走走 WOC 另一队',
    avatar: '/avatars/zao.jpg',
  }, {
    name: '白石',
    brief: '文案',
    content: '旁友，约稿子伐？三块一斤，十块钱三斤',
    avatar: '/avatars/baishi.jpg',
  }, {
    name: 'Nona_Reeves',
    brief: '摘棉花高手',
    content: '虽然不知道说什么，但还是说点啥吧。',
    avatar: '/avatars/nona.jpg',
    link: 'https://space.bilibili.com/19254145',
  }, {
    name: '东方乐凌',
    brief: '天桥卖艺担当',
    content: `创作方向:主攻管弦乐、电子音乐、室内乐等，民乐电音车万风也能碰
  祝您身体健康，福如东海，寿比南山`,
    avatar: '/avatars/dongfangyueling.jpg',
  }, {
    name: '克洛伊Prime',
    brief: '关卡设计师，程序猿儿',
    content: '好色哦',
    avatar: '/avatars/xiaohei.jpg',
  }, {
    name: '依墨',
    brief: '动画兴趣生',
    content: '渲染 动画',
    avatar: '/avatars/yimo.jpg',
    link: 'https://space.bilibili.com/89814502',
  }, {
    name: 'NaivesSombra',
    brief: '绚烂之红，幽邃之黑',
    content: '猫猫，诶嘿嘿，猫猫',
    avatar: '/avatars/naivessombra.jpg',
  }, {
    name: 'SQwatermark',
    brief: '程序员',
    content: '色',
    avatar: '/avatars/sqwatermark.jpg',
    link: 'http://sqwatermark.com',
  }, {
    name: 'Qan_L',
    brief: '地摊算卦抽签兼祈福',
    content: '( ᐛ )',
    avatar: '/avatars/qanl.jpg',
  }, {
    name: '时雨',
    brief: '六边形',
    content: '鸽子摸鱼大师 争取明年高产',
    avatar: '/avatars/shiyu.jpg',
  }, {
    name: '瑭玟',
    brief: '建模',
    content: '遇事不决，睡大觉！！',
    avatar: '/avatars/tangwen.jpg',
    link: 'https://space.bilibili.com/37153239',
  }, {
    name: '端木',
    brief: '低产动作人，高产摸鱼人',
    content: '头号洒家，精通动作，如有业务请与本人沟通后确定事项，愿老板们能找到合适的打工人',
    avatar: '/avatars/duanmu.jpg',
  }]
  return chunk(shuffle(members), Math.round(members.length / 3))
}

const Members = async () => {
  const members = await getMembers()
  return (
    <div className="my-16">
      <BigTitle title={['映素', '成员']} className="flex w-fit mb-16 mx-auto" />
      <div className="grid grid-cols-3 gap-8">
        {members.map((membersCol, i) => (<div key={i}>
          {membersCol.map((member, i) => <MemberCard {...member} key={i} />)}
        </div>))}
      </div>
    </div>
  )
}

export default Members
