<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <RouterView />

  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>
  header{
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2C394D;
    filter: blur(0 25px 0 0);
  }

  footer{
    background-color: #2C394D;
    text-align: center;
    font-size: 10px;
    position: absolute;
    bottom: 0;
    min-height: 100px;
    width: 100%;
    color: white;
}

 
</style>
