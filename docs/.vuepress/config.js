const path = require('path');

module.exports = {
  base: '/live-in-the-world/',
  title: '无来往',
  port: 8081,
  description: '笔头落下，生活跃然纸上',
  head: [
    ['link', { rel: 'icon', href: '/download.png' }]
  ],
  themeConfig: {
    nav: [
      {
        text: '社交账号',
        items: [
          { text: '站酷', link: 'https://www.zcool.com.cn/u/19194295' },
          { text: '微博', link: 'https://weibo.com/5537280316/profile?topnav=1&wvr=6' },
          { text: '公众号', link: 'https://mp.weixin.qq.com/mp/homepage?__biz=MzU3NzUyMjM5Mg==&hid=2&sn=05f54899d2d660ac2cf18e4f8dc4acbc' },
          { text: '500px', link: 'https://500px.me/ahea' },
        ],
      },
    ],
    sidebar: [
      {
        title: '诗',   // 必要的
        path: '/poem/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/poem/2019/',
            collapsable: true,
            sidebarDepth: 2,
            children: [
              {
                title: 'May',
                // path: '/poem/2019/May/',
                sidebarDepth: 2,
                children: [
                  ['/poem/2019/May/Dream.md', '梦'],
                  ['/poem/2019/May/Light.md', '光'],
                  ['/poem/2019/May/Akai.md', '阿凯'],
                  ['/poem/2019/May/Lily.md', '莉莉'],
                  ['/poem/2019/May/May.md', '五月'],
                  ['/poem/2019/May/Sound.md', '歌声'],
                  ['/poem/2019/May/I Dreamed.md', '我梦见'],
                  ['/poem/2019/May/Ocean.md', '大海母亲'],
                  ['/poem/2019/May/Ground.md', '大地母亲'],
                  ['/poem/2019/May/Guitar Boy.md', '吉他少年'],
                ]
              },
              {
                title: 'Jun.',
                // path: '/poem/2019/June/',
                sidebarDepth: 2,
                children: [
                  ['/poem/2019/June/Me Myself.md', '我'],
                  ['/poem/2019/June/Boat.md', '船'],
                  ['/poem/2019/June/Cloud.md', '云'],
                  ['/poem/2019/June/Light.md', '光'],
                  ['/poem/2019/June/Bridge.md', '桥'],
                  ['/poem/2019/June/Wave.md', '浪'],
                  ['/poem/2019/June/Airplane.md', '飞机'],
                  ['/poem/2019/June/Fallen.md', '落了'],
                  ['/poem/2019/June/Gaint.md', '巨人'],
                  ['/poem/2019/June/Big Wave.md', '大浪'],
                  ['/poem/2019/June/Drowning.md', '淹没'],
                  ['/poem/2019/June/Leave.md', '离别'],
                  ['/poem/2019/June/Time.md', '时代'],
                  ['/poem/2019/June/Change.md', '交替'],
                  ['/poem/2019/June/Girl.md', '女子'],
                  ['/poem/2019/June/You Make Me Feel.md', '感觉'],
                  ['/poem/2019/June/God.md', '神人'],
                  ['/poem/2019/June/Untitle.md', '无题'],
                  ['/poem/2019/June/Huge Tree.md', '大树'],
                  ['/poem/2019/June/Hua Mountain.md', '华山'],
                  ['/poem/2019/June/Basilica.md', '大殿'],
                  ['/poem/2019/June/Lily-1.md', 'Lily'],
                  ['/poem/2019/June/Lily-2.md', '莉莉之二'],
                  ['/poem/2019/June/Lily-3.md', '莉莉之三'],
                  ['/poem/2019/June/Mr. Zhan.md', '詹先生'],
                  ['/poem/2019/June/Alexander Supertramp.md', '流浪狗'],
                  ['/poem/2019/June/Bagan-1.md', '蒲甘之一'],
                  ['/poem/2019/June/Bagan-2.md', '蒲甘之二'],
                  ['/poem/2019/June/Bagan-3.md', '蒲甘之三'],
                  ['/poem/2019/June/Rain In Yangon.md', '仰光的雨'],
                  ['/poem/2019/June/Yangtze Bridge.md', '长江大桥'],
                  ['/poem/2019/June/Rain In Shengsi.md', '嵊泗的雨'],
                  ['/poem/2019/June/Boat And Fish.md', '船儿和鱼'],
                  ['/poem/2019/June/The Girl Meet in Shengsi.md', '献给嵊泗遇见的姑娘'],
                  ['/poem/2019/June/Should not Be Quiet in Night.md', '夜晚绝不应是宁静的'],
                ],
              },
              {
                title: 'Jul.',
                // path: '/poem/2019/May/',
                sidebarDepth: 2,
                children: [
                  ['/poem/2019/July/Boy.md', '男孩'],
                  ['/poem/2019/July/Marina.md', '玛莲娜'],
                  ["/poem/2019/July/Fairy's Tale.md", '仙女之歌'],
                  ['/poem/2019/July/The Bohimian Girl.md', '波西米亚女孩'],
                ]
              },
              {
                title: 'Aug.',
                // path: '/poem/2019/May/',
                sidebarDepth: 2,
                children: [
                  ["/poem/2019/August/Rain.md", '雨'],
                  ['/poem/2019/August/Barren.md', '荒'],
                  ["/poem/2019/August/Young man.md", '少年'],
                  ['/poem/2019/August/In the top of Mountain cool.md', '清凉山巅'],
                  ["/poem/2019/August/Mountain's day.md", '山上的日子'],
                  ['/poem/2019/August/Between the wind and the fog.md', '风和雾之间'],
                ]
              },
            ],
          },
        ],
      },
      {
        title: '写',   // 必要的
        path: '/write/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/write/2019/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              {
                title: 'April',
                collapsable: true,
                // path: '/write/2019/April/',
                sidebarDepth: 2,
                children: [
                  ['/write/2019/April/Myself.md', '自我'],
                  ['/write/2019/April/Sadness.md', '悲伤'],
                  ['/write/2019/April/Uncle.md', '舅舅'],
                  ['/write/2019/April/Nepal.md', '记录没有互联网的时间'],
                  ['/write/2019/April/I Cant Keep Peace In My Mind.md', "I Can't Keep Peace In My Mind"],
                ],
              },
              {
                title: 'May',
                collapsable: true,
                // path: '/write/2019/May/',
                sidebarDepth: 2,
                children: [
                  ['/write/2019/May/Acha.md', '阿X'],
                  ['/write/2019/May/Dance.md', '跳舞'],
                ],
              },
              {
                title: 'June',
                collapsable: true,
                // path: '/write/2019/June/',
                sidebarDepth: 2,
                children: [
                  ['/write/2019/June/IamI.md', '我'],
                  ['/write/2019/June/World.md', 'World'],
                ],
              },
              {
                title: 'July',
                collapsable: true,
                // path: '/write/2019/June/',
                sidebarDepth: 2,
                children: [
                  ['/write/2019/July/A Day.md', '浮游一日'],
                ],
              },
            ],
          },
        ]
      },
      {
        title: '读',   // 必要的
        path: '/read/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/read/2019/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              {
                title: 'Work',
                // path: '/daily/2019/June/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                  ['/read/2019/work/Blog.md', '博客'],
                  ['/read/2019/work/Immortal Code.md', '代码不朽'],
                  ['/read/2019/work/You do not Know about Javascript.md', '你不知道的Javascript'],
                ],
              },
              // {
              //   title: 'July',
              //   // path: '/daily/2019/July/',
              //   collapsable: true,
              //   sidebarDepth: 1,
              //   children: [],
              // },
            ],
          },
        ]
      },
      {
        title: '记',   // 必要的
        path: '/daily/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/daily/2019/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              {
                title: 'June',
                // path: '/daily/2019/June/',
                collapsable: true,
                sidebarDepth: 1,
                children: [],
              },
              {
                title: 'July',
                // path: '/daily/2019/July/',
                collapsable: true,
                sidebarDepth: 1,
                children: [],
              },
            ],
          },
        ]
      },
      {
        title: '行',   // 必要的
        path: '/travel/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '2019',
            path: '/travel/2019/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              {
                title: '八月',
                // path: '/daily/2019/July/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                  ['/travel/2019/August/Mt. Cool.md', '清凉峰'],
                ],
              },
            ],
          },
          {
            title: '2015',
            // path: '/daily/2019/July/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ['/travels/2015/Tibet.md', '西藏'],
            ],
          },
          {
            title: '2016',
            // path: '/daily/2019/July/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ['/travels/2016/Tibet.md', '西藏'],
            ],
          },
        ]
      },
    ],
    lastUpdated: '落笔于', // string | boolean
    serviceWorker: {
      updatePopup: true
    },
  },
}