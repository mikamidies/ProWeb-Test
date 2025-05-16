<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="site">
    <header>
      <div class="brand">
        <img src="/public/logo.png" alt="" />
      </div>
      <nav>
        <RouterLink to="/" class="nav-link" active-class="is-active">
          <img src="/public/launch.svg" alt="" />
          Запуски</RouterLink
        >
        <RouterLink to="/about" class="nav-link" active-class="is-active">
          <img src="/public/about.svg" alt="" />
          Обо мне</RouterLink
        >
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.site {
  display: grid;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: 400px 1fr;
  overflow: hidden;
}
header {
  height: 100%;
  width: 400px;
  padding: 20px;
  border-right: 1px solid var(--border);
}
.brand {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  width: 120px;
}
nav a {
  display: flex;
  align-items: center;
  gap: 16px;
  background: transparent;
  text-decoration: none;
  padding: 20px 16px;
  border-radius: 12px;
  font-weight: 500;
}
/* nav a.active {
  background: var(--gray);
} */
.router-link-exact-active {
  background: var(--gray);
}
</style>
