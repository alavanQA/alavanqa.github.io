module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/logo.png'
        }]
    ],
    title: 'alavanQA Docs',
    description: 'Documentation Repository for alavanQA material',
    themeConfig: {
        logo: '/assets/logo.png',
        nav: [
            { 
                text: 'About',  
                link: '/',
                items: [
                    { text: 'Mission', link: '/' },
                    { text: 'Who we are', link: '/' },
                    { text: 'Contact Us', link: '/' },
                ]
            },
            { 
                text: 'Tracks',  
                link: '/',
                items: [
                    { text: 'Front-End Expert', link: '/' },
                    { text: 'Back-End Expert', link: '/' },
                    { text: 'Bootcamp Hero', link: '/' },
                ]
            },
            { 
                text: 'Languages',  
                link: '/',
                items: [
                    { text: 'English', link: '/' },
                    { text: 'Portugues', link: '/' },
                ]
            },
            { text: 'GitHub', link: 'https://github.com/alavanQA/alavanqa-docs.github.io' },
            { text: 'Discord', link: 'https://discord.gg/JUVUDHVh' },
          ],
        sidebar: {
            "/guide/": [{
                title: 'Introduction',
                sidebarDepth: 1,
                children: [
                    ["getting-started", "Getting Started"]
                ]
            }]
        }
    }
}