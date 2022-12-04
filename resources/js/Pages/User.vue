<template>
  <h1 class="text-4xl font-bold">This is user</h1>

  <Nav></Nav>

  <div style="margin-top:600px;" >
    The current time is {{ time }}
  </div>

  <Link href="/user" class="text-blue-500 hover:text-blue-800" preserve-scroll> <!--this (preserve-scroll) is for  scroll is not work-->
    Refresh
  </Link>
</template>

<script>
import Nav from '../Share/Nav'
import { Link } from '@inertiajs/inertia-vue3';
export default {
  components: { Nav,Link },

  props:{
    time:String,

  }
}
</script>

<style>

</style>
