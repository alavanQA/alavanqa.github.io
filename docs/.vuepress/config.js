module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/logo.png'
        }]
    ],
    base: '/',
    title: 'alavanQA Docs',
    description: 'Documentation Repository for alavanQA material',
    theme: 'reco',
    themeConfig: {
        logo: '/assets/logo.png',
        mode: 'light',
        modePicker: true,
        logo: '/assets/logo.png',
        nav: [{
                text: 'About',
                link: '/',
                items: [{
                        text: 'Mission',
                        link: '',
                        rel: 'true'
                    },
                    {
                        text: 'Who we are',
                        link: '',
                        rel: 'true'
                    },
                    {
                        text: 'Contact Us',
                        link: '',
                        rel: 'true'
                    },
                ]
            },
            {
                text: 'Tracks',
                link: '/',
                items: [{
                        text: 'Front-End Expert',
                        link: '',
                        rel: 'true'
                    },
                    {
                        text: 'Back-End Expert',
                        link: '',
                        rel: 'true'
                    },
                    {
                        text: 'Bootcamp Hero',
                        link: '',
                        rel: 'true'
                    },
                ]
            },
            {
                text: 'Languages',
                link: '/',
                items: [{
                        text: 'English',
                        link: '',
                        rel: 'true'
                    },
                    {
                        text: 'Portugues',
                        link: '',
                        rel: 'true'
                    },
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/alavanQA/alavanqa.github.io'
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/JUVUDHVh'
            },
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