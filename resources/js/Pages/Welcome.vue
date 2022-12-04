<template>
  <h1 class="text-4xl font-bold">This is home page</h1>

    <Nav></Nav>

</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import Nav from "../Share/Nav.vue";
export default {
 components:{
    Link,
    Nav
 },


}
</script>

<style>

</style>
