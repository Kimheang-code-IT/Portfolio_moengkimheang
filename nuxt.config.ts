export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Moeng Kimheang — Frontend Developer',
      titleTemplate: '%s · Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Moeng Kimheang — Frontend Developer specializing in Vue.js, Nuxt, UI/UX, and full-stack web applications with Django and PostgreSQL. Based in Phnom Penh, Cambodia.'
        },
        {
          name: 'author',
          content: 'Moeng Kimheang'
        },
        {
          name: 'keywords',
          content:
            'Moeng Kimheang, Frontend Developer, Vue.js, Nuxt, Nuxt UI, Tailwind CSS, Django, Portfolio, Phnom Penh, Cambodia, Full-Stack Developer'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        },
        {
          name: 'color-scheme',
          content: 'light dark'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Moeng Kimheang Portfolio'
        },
        {
          property: 'og:title',
          content: 'Moeng Kimheang — Frontend Developer'
        },
        {
          property: 'og:description',
          content:
            'I build responsive, accessible digital products with thoughtful interfaces and maintainable code. Vue, Nuxt, and full-stack web applications.'
        },
        {
          property: 'og:image',
          content: 'https://moengkimheang.vercel.app/images/profile.jpg'
        },
        {
          property: 'og:image:alt',
          content: 'Moeng Kimheang profile photo'
        },
        {
          property: 'og:url',
          content: 'https://moengkimheang.vercel.app'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Moeng Kimheang — Frontend Developer'
        },
        {
          name: 'twitter:description',
          content:
            'I build responsive, accessible digital products with thoughtful interfaces and maintainable code.'
        },
        {
          name: 'twitter:image',
          content: 'https://moengkimheang.vercel.app/images/profile.jpg'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://moengkimheang.vercel.app' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700;800&family=Poppins:wght@400;600;700;800&display=swap'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Moeng Kimheang',
            jobTitle: 'Frontend Developer',
            url: 'https://moengkimheang.vercel.app',
            image: 'https://moengkimheang.vercel.app/images/profile.jpg',
            email: 'mailto:heang015873174@gmail.com',
            telephone: '+855962943472',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Phnom Penh',
              addressCountry: 'KH'
            },
            sameAs: [
              'https://github.com/Kimheang-code-IT',
              'https://www.linkedin.com/in/moeng-kimheang-848992378/',
              'https://t.me/Moeng_Kimheang',
              'https://web.facebook.com/kim.heang.9678/',
              'https://www.tiktok.com/@learncomputer_9'
            ],
            knowsAbout: [
              'Vue.js',
              'Nuxt',
              'TypeScript',
              'Tailwind CSS',
              'Django',
              'UI/UX Design',
              'Flutter'
            ]
          })
        }
      ]
    }
  }
})
