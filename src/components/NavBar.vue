<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <div class="contenedor">
            <img src="../assets/LogoJlabissier.png" alt="Logo Jlabissier" >
            <nav>
                <ul>
                    <li><a href=""><RouterLink to="/extras">Extras</RouterLink></a> </li>
                    <li><a href=""><RouterLink to="/contacto">Contacto</RouterLink></a> </li>
                    <li><a href=""><RouterLink to="/">Inicio</RouterLink></a> </li>
                </ul>
            </nav>
        </div>
</template>

<style scoped> 

.contenedor{
    width: 80%;
    color: #00BFB2 ;
}

li{
    float: right;
    display: inline;
    margin-left: 3vh;
    font-size: 25px;
}

nav{
    margin-top: 25px;
    padding: 0;
}

img{
    float: left;
    max-width: 80px;
    border-radius: 100%;
}


a{
    text-decoration: none;
    color: #805809;
}
 
a:hover{
    color: #33270E;
    font-weight: 900;
    font-size: large;  
}
</style>