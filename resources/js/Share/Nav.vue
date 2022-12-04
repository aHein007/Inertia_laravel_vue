<template>
   <nav>
    <li><Link href="/" class="text-blue-500 hover:text-blue-800">Home</Link></li>
    <li><Link href="/user" class="text-blue-500 hover:text-blue-800">User</Link></li>
    <li><Link href="/settings" class="text-blue-500 hover:text-blue-800">Settings</Link></li>
    <li><Link href="/logout" class="text-blue-500 hover:text-blue-800" method="post" as="button" :data="{food:'hi aung'}">Logout</Link></li>
  </nav>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
export default {
 components:{
    Link
 }
}
</script>

<style>

</style>
