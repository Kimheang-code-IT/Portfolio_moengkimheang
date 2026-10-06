<script setup lang="ts">
const { personal, about } = usePortfolio()

const title = `${personal.name} | ${personal.role}`
const description = about.biography

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <div class="min-h-screen bg-default text-default">
    <AppHeader />
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
