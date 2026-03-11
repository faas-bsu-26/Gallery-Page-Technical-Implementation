<script setup>
import {onMounted } from 'vue'
import { store } from '../../store.js'



onMounted(() => {
    store.fetchData()
})
</script>

<template> 
    <h1>Gallery Of the most reliable cars.</h1>


     <h1>Toyota Lets go Places</h1>
    <div class="gallery">
        <h2>{{ store.overview }}</h2>
        <div v-for="item in store.photos" :key="item.id" class="gallery-item">
            <img :src="item.src" :alt="item.alt" />
            <p>{{ item.alt }}</p>
        </div>

    


    </div>
</template>