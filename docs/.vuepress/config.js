module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/assets/logo.png' }]
      ],
    title: 'alavanQA Docs',
    description: 'Documentation Repository for alavanQA material',
    themeConfig: {
        logo: '/assets/logo.png',
        sidebar: {
            "/guide/": [
            {
                title: 'Introduction',
                sidebarDepth: 1,    
                children: [
                    ["getting-started","Getting Started"]
                ]
              }
          ]
        }
      }
  }