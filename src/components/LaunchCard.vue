<script setup></script>

<template>
  <div class="component">
    <div class="top">
      <p class="name">Pro SMM</p>
      <p class="category">Маркетинг</p>
    </div>
    <div class="card">
      <div class="classes">
        <p class="title">Старт групп</p>
        <div class="item">
          <div class="time">
            <p class="date">3 июня 2025</p>
            <p class="week">ВТ, ПТ</p>
          </div>
          <div class="schedule">
            <p>15:00</p>
            <p>17:00</p>
            <p>19:00</p>
          </div>
        </div>
      </div>
      <div class="open">
        <p class="title">Открытый урок</p>
        <div class="item">
          <div class="time">
            <p class="date">3 июня 2025</p>
            <p class="week">ВТ, ПТ</p>
          </div>
          <div class="schedule">
            <p>15:00</p>
            <p>17:00</p>
          </div>
        </div>
        <div class="item">
          <div class="time">
            <p class="date">4 июня 2025</p>
            <p class="week">ВТ, ПТ</p>
          </div>
          <div class="schedule">
            <p>15:00</p>
            <p>17:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  width: 350px;
  height: auto;
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
}
.category {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 50px;
  background: #039992;
  color: white;
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
</style>
