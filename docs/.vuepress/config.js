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
                collapsable: true,
                sidebarDepth: 1.5,
                children: [
                    ["getting-started", "Getting Started"],
                    ["getting-started", "How to use this guide"],
                    ["getting-started", "Expertise & Tracks"],
                    ["getting-started", "Exploring the Bootcamp"],
                    ["getting-started", "Planning the Roadmap"],
                ]
            },
            {
                title: 'Test Automation Fundamentals',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ["getting-started", "Testing vs Checking"],
                    ["getting-started", "Testing Pyramid vs Testing Quadrant"],
                    ["getting-started", "TAF - Architecture"],
                    ["getting-started", "TAF Types - Linear"],
                    ["getting-started", "TAF Types - Keyword-driven"],
                    ["getting-started", "TAF Types - Behavior-driven"],
                    ["getting-started", "TAF Types - Hybrid"],
                    ["getting-started", "Mocking - Concept and Usage"],
                ]
            },
            {
                title: 'API Automation',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ["getting-started", "API Testing Fundamentals"],
                    ["getting-started", "Limitations"],
                    ["getting-started", "API Testing Tools"],
                    ["getting-started", "API Testing Frameworks"],
                ]
            },
{
                title: 'Web UI Automation',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ["getting-started", "Web UI Testing Fundamentals"],
                    ["getting-started", "Limitations"],
                    ["getting-started", "Record and Playback Tools"],
                    ["getting-started", "Headless Browsers"],
                    ["getting-started", "Web UI Frameworks"],
                ]
            }]
        }
    }
}