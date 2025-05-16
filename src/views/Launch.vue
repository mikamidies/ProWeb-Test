<script setup>
import LaunchCard from '../components/LaunchCard.vue'

import { ref } from 'vue'

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
    <div class="header">
      <h4 class="title">Запуски</h4>
    </div>
    <div class="categories">
      <h4 class="title">Категории</h4>
      <div class="buttons">
        <button class="btn">Маркетинг</button>
        <button class="btn">3D Графика</button>
        <button class="btn">Программирование</button>
        <button class="btn">Медия</button>
        <button class="btn">Компьютерная грамотность</button>
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
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
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
  align-items: center;
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
