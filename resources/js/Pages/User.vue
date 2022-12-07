<template>
  <Layouts>
    <h1 class="text-4xl font-bold">This is User Page</h1>

    <div>{{ time }}</div>
    <Link href="/user">Refresh</Link>
</Layouts>
</template>

<script >// this is new setup functihon
import Layouts from '../Share/Layouts.vue';
export default {


    layout:Layouts// this (layout) method is use when you won't  compoent refresh and your nee to (two contact component)
    
}

</script>

<style>

</style>
