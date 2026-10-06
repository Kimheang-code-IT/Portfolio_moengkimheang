<script setup lang="ts">
const { education, experienceContent } = usePortfolio()
</script>

<template>
  <section id="education" class="section-padding border-b border-default">
    <div class="section-container">
      <div class="mb-10 text-center">
        <h2 class="section-title">{{ experienceContent.educationTitle }}</h2>
        <p class="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {{ experienceContent.educationDescription }}
        </p>
      </div>

      <ol class="mx-auto max-w-3xl space-y-8 border-l border-default pl-6">
        <li
          v-for="entry in education"
          :key="`${entry.institution}-${entry.degree}`"
          class="relative"
        >
          <span
            class="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-default"
            aria-hidden="true"
          />

          <article class="space-y-3">
            <div class="space-y-1">
              <p class="text-sm font-semibold text-primary">
                {{ entry.dateRange }}
              </p>
              <h3 class="text-lg font-semibold text-highlighted">
                {{ entry.degree }}
              </h3>
              <p class="text-sm text-toned">
                {{ entry.institution }}
              </p>
              <UBadge
                v-if="entry.status"
                variant="subtle"
                size="sm"
                class="mt-1"
              >
                {{ entry.status }}
              </UBadge>
            </div>

            <p class="text-sm leading-relaxed text-muted">
              {{ entry.description }}
            </p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>