module.exports = {
  base: '/vue-press-blog/',
  title: '以梦为马',
  description: '笔头落下，生活跃然纸上',
  themeConfig: {
    sidebar: [
      {
        title: '诗',   // 必要的
        path: '/poem/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/poem/2019/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ['/poem/2019/May/Dream.md', 'May - 梦'],
              ['/poem/2019/May/Light.md', 'May - 光'],
              ['/poem/2019/May/Akai.md', 'May - 阿凯'],
              ['/poem/2019/May/Lily.md', 'May - 莉莉'],
              ['/poem/2019/May/May.md', 'May - 五月'],
              ['/poem/2019/May/Sound.md', 'May - 歌声'],
              ['/poem/2019/May/I Dreamed.md', 'May - 我梦见'],
              ['/poem/2019/May/Ocean.md', 'May - 大海母亲'],
              ['/poem/2019/May/Ground.md', 'May - 大地母亲'],
              ['/poem/2019/May/Guitar Boy.md', 'May - 吉他少年'],
              ['/poem/2019/June/Boat.md', 'June - 船'],
              ['/poem/2019/June/Light.md', 'June - 光'],
              ['/poem/2019/June/Bridge.md', 'June - 桥'],
              ['/poem/2019/June/Airplane.md', 'June - 飞机'],
              ['/poem/2019/June/Fallen.md', 'June - 落了'],
              ['/poem/2019/June/Gaint.md', 'June - 巨人'],
              ['/poem/2019/June/Time.md', 'June - 时代'],
              ['/poem/2019/June/Change.md', 'June - 交替'],
              ['/poem/2019/June/Girl.md', 'June - 女子'],
              ['/poem/2019/June/You Make Me Feel.md', 'June - 感觉'],
              ['/poem/2019/June/God.md', 'June - 神人'],
              ['/poem/2019/June/Untitle.md', 'June - 无题'],
              ['/poem/2019/June/Huge Tree.md', 'June - 大树'],
              ['/poem/2019/June/Hua Mountain.md', 'June - 华山'],
              ['/poem/2019/June/Basilica.md', 'June - 大殿'],
              ['/poem/2019/June/Lily-2.md', 'June - Lily'],
              ['/poem/2019/June/Lily-1.md', 'June - 莉莉之二'],
              ['/poem/2019/June/Lily-3.md', 'June - 莉莉之三'],
              ['/poem/2019/June/Mr. Zhan.md', 'June - 詹先生'],
              ['/poem/2019/June/Alexander Supertramp.md', 'June - 流浪狗'],
              ['/poem/2019/June/Bagan-1.md', 'June - 蒲甘之一'],
              ['/poem/2019/June/Bagan-2.md', 'June - 蒲甘之二'],
              ['/poem/2019/June/Bagan-3.md', 'June - 蒲甘之三'],
              ['/poem/2019/June/Rain In Yangon.md', 'June - 仰光的雨'],
              ['/poem/2019/June/Yangtze Bridge.md', 'June - 长江大桥'],
            ],
          },
        ],
      },
      {
        title: '写',   // 必要的
        path: '/write/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/write/2019/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ['/write/2019/April/I Cant Keep Peace In My Mind.md', "April - I Can't Keep Peace In My Mind"],
              ['/write/2019/April/Myself.md', 'April - 自我'],
              ['/write/2019/April/Nepal.md', 'April - 记录没有互联网的时间'],
              ['/write/2019/April/Sadness.md', 'April - 悲伤'],
              ['/write/2019/April/Uncle.md', 'April - 舅舅'],
              ['/write/2019/May/Acha.md', 'May - 阿X'],
              ['/write/2019/May/Dance.md', 'May - 跳舞'],
              ['/write/2019/June/IamI.md', 'June - 我'],
              ['/write/2019/June/World.md', 'June - World'],
              
            ]
          },
        ]
      },
    ],
    lastUpdated: false, // string | boolean
  },
}