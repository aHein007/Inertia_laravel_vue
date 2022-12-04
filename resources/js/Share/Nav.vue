<template>
   <nav>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/user">User</Link></li>
    <li><Link href="/settings">settings</Link></li>
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
