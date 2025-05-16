<script setup>
import { computed } from 'vue'

const props = defineProps({
  course: Object,
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const getWeekdayShort = (dateStr) => {
  const date = new Date(dateStr)
  const dayIndex = date.getDay()

  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[dayIndex]
}

const firstGroup = computed(() => {
  const group = props.course.groups?.[0] ?? {}
  return {
    ...group,
    formattedStartDate: group.start_date ? formatDate(group.start_date) : '',
  }
})

const studyTimes = computed(() => {
  const times = props.course.groups?.map((group) => group.study_time) ?? []
  return [...new Set(times)].sort((a, b) => a.localeCompare(b))
})

const dayMap = {
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
  7: 'Вс',
}

const daysText = computed(() => (firstGroup.value.days ?? []).map((d) => dayMap[d]).join(', '))

const groupedLessons = computed(() => {
  const lessons = props.course.open_lessons ?? []

  const map = lessons.reduce((acc, lesson) => {
    const { date, time } = lesson

    if (!acc[date]) {
      acc[date] = {
        date,
        weekday: getWeekdayShort(date),
        formattedDate: formatDate(date), // без дня недели
        times: [time],
      }
    } else {
      acc[date].times.push(time)
    }

    return acc
  }, {})

  return Object.values(map).sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<template>
  <div class="component">
    <div class="top">
      <p class="name">{{ course.name }}</p>
      <p class="category" :style="{ backgroundColor: course.categories[0].color }">
        {{ course.categories[0].name }}
      </p>
    </div>
    <div class="card">
      <div class="classes">
        <p class="title">Старт групп</p>
        <div class="item" v-if="course.open_lessons.length > 0">
          <div class="time">
            <p class="date">{{ firstGroup.formattedStartDate }}</p>
            <p class="week">{{ daysText }}</p>
          </div>
          <div class="schedule">
            <p v-for="(time, index) in studyTimes" :key="index">{{ time.slice(0, 5) }}</p>
          </div>
        </div>
        <div class="empty" v-else>Нет доступных групп</div>
      </div>
      <div class="open">
        <p class="title">Открытый урок</p>
        <div
          class="item"
          v-for="(lesson, index) in groupedLessons"
          :key="index"
          v-if="course.groups.length > 0"
        >
          <div class="time">
            <p class="date">{{ lesson.formattedDate }}</p>
            <p class="week">{{ lesson.weekday }}</p>
          </div>
          <div class="schedule">
            <p v-for="(time, i) in lesson.times.sort()" :key="i">
              {{ time.slice(0, 5) }}
            </p>
          </div>
        </div>
        <div class="empty" v-else>Нет открытых уроков</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  width: 350px;
  height: auto;
  overflow: hidden;
}
.top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.name {
  font-size: 16px;
  color: var(--text-gray);
  white-space: nowrap;
}
.category {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 50px;
  background: #039992;
  color: white;
  white-space: nowrap;
}
.classes {
  background: white;
  border-radius: 12px 12px 0 0;
  padding: 16px;
}
.open {
  background: var(--dark-gray);
  border-radius: 0 0 12px 12px;
  padding: 16px;
}
.title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
}
.time {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.date,
.week {
  font-size: 14px;
  color: var(--text-gray);
}
.schedule {
  background: var(--schedule-gray);
  border: 1px solid var(--border);
  border-radius: 20px;
}
.schedule p {
  font-size: 16px;
  color: var(--schedule-text);
  padding: 12px;
  border-bottom: 1px solid var(--border);
}
.schedule p:last-child {
  border: none;
}
.item {
  margin-bottom: 12px;
}
.item:last-child {
  margin-bottom: 0;
}
.empty {
  font-size: 14px;
  color: var(--text-gray);
}
</style>
