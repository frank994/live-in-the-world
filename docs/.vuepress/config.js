module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: 'dic',   // 必要的
        path: '/dic/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/',
          '/dic/a',
          '/dic/b',
          '/dic/c'
        ]
      },
    ],
    lastUpdated: 'Last Updated', // string | boolean
  },
}