import type { ExpertiseItem } from '~/types/portfolio'

export function useTypedExpertise(items: readonly ExpertiseItem[]) {
  const levels = ref<number[]>(items.map(() => 0))
  const activeIndex = ref(0)

  let timer: ReturnType<typeof setTimeout> | undefined

  const schedule = (callback: () => void, delay: number) => {
    timer = setTimeout(callback, delay)
  }

  const reset = () => {
    levels.value = items.map(() => 0)
    activeIndex.value = 0
  }

  const fillCurrent = () => {
    const item = items[activeIndex.value]

    if (!item) {
      schedule(restart, 2400)
      return
    }

    const step = Math.max(1, Math.round(item.level / 20))
    const currentLevel = levels.value[activeIndex.value] ?? 0

    if (currentLevel < item.level) {
      const next = Math.min(item.level, currentLevel + step)
      levels.value = levels.value.map((level, index) => (index === activeIndex.value ? next : level))
      schedule(fillCurrent, 55)
      return
    }

    if (activeIndex.value + 1 < items.length) {
      activeIndex.value += 1
      schedule(fillCurrent, 180)
      return
    }

    schedule(restart, 2400)
  }

  const restart = () => {
    reset()
    schedule(fillCurrent, 600)
  }

  onMounted(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || items.length === 0) {
      levels.value = items.map((item) => item.level)
      return
    }

    schedule(fillCurrent, 400)
  })

  onUnmounted(() => {
    if (timer) clearTimeout(timer)
  })

  return { levels, activeIndex }
}