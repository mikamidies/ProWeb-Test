<script setup>
import LaunchCard from '../components/LaunchCard.vue'
import WholeLoader from '@/components/WholeLoader.vue'
import { ref, reactive, computed, onMounted } from 'vue'

const courses = reactive({
  results: [],
})
const isLoading = ref(true)
const selectedCategory = ref(null)

onMounted(async () => {
  isLoading.value = true
  const response = await fetch('/api/v1/launches/external/course/research/')
  const data = await response.json()
  courses.results = data.results
  isLoading.value = false
})

const uniqueCategories = computed(() => {
  const allCategories = courses.results.flatMap((course) => course.categories)

  const map = new Map()
  allCategories.forEach((category) => {
    if (!map.has(category.id)) {
      map.set(category.id, category)
    }
  })

  return Array.from(map.values())
})

function toggleCategory(categoryKey) {
  if (selectedCategory.value === categoryKey) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = categoryKey
  }
}

const filteredCourses = computed(() => {
  if (!selectedCategory.value) return courses.results

  return courses.results.filter((course) =>
    course.categories.some((cat) => cat.key === selectedCategory.value),
  )
})

const scrollContainer = ref(null)
const isDragging = ref(false)
let startX = 0
let scrollLeft = 0

const startDrag = (e) => {
  isDragging.value = true
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
}

const onDrag = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = x - startX
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

const stopDrag = () => {
  isDragging.value = false
}
</script>

<template>
  <div class="page">
    <WholeLoader v-if="isLoading" />

    <div class="header">
      <h4 class="title">Запуски</h4>
    </div>
    <div class="categories">
      <h4 class="title">Категории</h4>
      <div class="buttons">
        <button
          v-for="category in uniqueCategories"
          :key="category.id"
          @click="toggleCategory(category.key)"
          :style="
            selectedCategory === category.key
              ? { backgroundColor: category.color, color: '#ffffff' }
              : { backgroundColor: '#eee', color: '#333' }
          "
          class="btn"
          :class="{ active: selectedCategory === category.key }"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    <div
      class="items"
      ref="scrollContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <div class="category">
        <LaunchCard v-for="item in filteredCourses" :key="item.id" :course="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  overflow: hidden;
}
.header {
  padding: 20px;
  border-bottom: 1px solid var(--border);
}
.categories {
  padding: 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 16px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.btn {
  font-size: 16px;
  padding: 8px 16px;
  background: var(--border);
  border-radius: 50px;
  color: white;
}
.title {
  font-size: 24px;
  font-weight: 500;
}
.items {
  display: flex;
  align-items: center;
  padding: 20px;
  overflow: auto;
  cursor: grab;
  user-select: none;
}
.items:active {
  cursor: grabbing;
}
.category {
  display: flex;
  gap: 16px;
}
.items::-webkit-scrollbar {
  display: none;
}

.items {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
