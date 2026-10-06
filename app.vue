<script setup lang="ts">
const colorMode = useColorMode()

const themeColor = computed(() =>
  colorMode.value === 'dark' ? '#0a0a0a' : '#ffffff'
)

useHead(() => ({
  meta: [
    {
      name: 'theme-color',
      content: themeColor.value
    }
  ]
}))

useSeoMeta({
  title: 'Moeng Kimheang — Frontend Developer',
  description:
    'Portfolio of Moeng Kimheang — Frontend Developer specializing in Vue.js, Nuxt, UI/UX, and full-stack web applications with Django and PostgreSQL. Based in Phnom Penh, Cambodia.',
  ogTitle: 'Moeng Kimheang — Frontend Developer',
  ogDescription:
    'I build responsive, accessible digital products with thoughtful interfaces and maintainable code. Vue, Nuxt, and full-stack web applications.',
  ogImage: 'https://moengkimheang.vercel.app/images/profile.jpg',
  ogType: 'website',
  ogUrl: 'https://moengkimheang.vercel.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Moeng Kimheang — Frontend Developer',
  twitterDescription:
    'I build responsive, accessible digital products with thoughtful interfaces and maintainable code.',
  twitterImage: 'https://moengkimheang.vercel.app/images/profile.jpg'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
