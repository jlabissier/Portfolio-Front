<script setup>

</script>

<template>
  <section class="presentacion">
      <div class="contenedor"> 
        <h1> Este Seria el titulo de presentacion</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati provident, assumenda est blanditiis quae cupiditate possimus incidunt sequi, veritatis excepturi dolores, sed cumque aperiam! Doloremque unde laboriosam reiciendis quis natus?
        </p>
      </div>
  </section>
</template>


<style scoped>

  section{
    border-radius: 15px;
    background-color: #2C394D;
    min-width: 100px;
    min-height: 100px;
  }
  .presentacion{
    margin: 100px;
    color: #fff;
    font-size: 15px;
  }
  .contenedor{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  p{
    max-width: 50%;
  }

</style>
