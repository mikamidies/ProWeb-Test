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
        <p class="address">Яшнабадский р-н, г. Ташкент, Узбекистан</p>
      </div>
    </div>
    <div class="content">
      <h4>Информация</h4>
      <p>
        Я - Мираббос Умаров, фронт-энд разработчик с более чем 3-летним опытом работы. Я
        специализируюсь на создании веб-приложений с использованием Vue.js / Nuxt.js и других
        современных технологий. Я работал в компании "IT-Unity" в качестве фронт-энд разработчика,
        участвовал в таких проектах, как OKC.uz, Saviagroup.uz, Jahoninvestplast.uz, Osonschool.uz,
        Orzuoshtuzi.uz, Rehauasia.uz, Pga.uz, Airtech.uz, Home24.uz и другие. Посетите мой
        <a href="https://mikami404.vercel.app/" target="_blank" rel="noopener noreferrer">сайт</a>
        и страницу в
        <a href="https://github.com/mikamidies" target="_blank" rel="noopener noreferrer">Гитхабе</a
        >!
      </p>
      <p>
        В свободное время я занимаюсь чтением, изучением истории а так же видеоиграми. Я люблю
        изучать новое для себя и постоянно развиваться.
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
.content a {
  color: navy;
  text-decoration: underline;
  font-weight: 500;
}
</style>
