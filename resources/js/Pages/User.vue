<template>
  <Layouts>
    <h1 class="text-4xl font-bold">This is User Page</h1>

    <div>{{ time }}</div>
    <Link href="/user">Refresh</Link>
</Layouts>
</template>

<script setup>// this is new setup function
import Layouts from '../Share/Layouts.vue';


defineProps({
    time:String
})

</script>

<style>

</style>
