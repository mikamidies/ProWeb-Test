<script setup></script>

<template>
  <div class="page">
    <div class="header">
      <h4 class="title">Обо мне</h4>
    </div>
    <div class="face">
      <img class="img" src="/public/Mirabbos.jpg" alt="Лицо" />
      <div class="info">
        <h4 class="name">Мираббос Умаров Миролим оглы</h4>
        <p class="birthdate">25 лет | 10 февраля 2000 года</p>
        <p class="address">г. Ташкент, Узбекистан</p>
      </div>
    </div>
    <div class="content">
      <h4>Информация</h4>
      <p>
        Я - преподаватель и практик в области SMM, маркетинга и дизайна. Мой опыт включает в себя
        создание и реализацию успешных стратегий для различных компаний, а также обучение студентов
        основам SMM и маркетинга.
      </p>
      <p>
        Я верю, что каждый может стать успешным в этой области, если будет стремиться к обучению и
        развитию. Моя цель - помочь вам достичь ваших целей и стать экспертом в SMM.
      </p>
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
.title {
  font-size: 24px;
  font-weight: 500;
}
.face {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid var(--border);
}
.name {
  display: flex;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 12px;
}
.birthdate,
.address {
  font-size: 20px;
}
.content {
  padding: 20px;
}
.content h4 {
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 18px;
}
.content p {
  font-size: 20px;
  margin-bottom: 24px;
}
.content p:last-child {
  margin-bottom: 0;
}
</style>
