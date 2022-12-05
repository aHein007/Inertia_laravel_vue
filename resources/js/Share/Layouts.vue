<template>
   <section class="bg-gray-400 p-5  ">
    <header class="flex justify-between">
        <div>
            <span class="font-bold text-lg">My App</span>
            <span class=" ml-3">Welcome back, {{username}}!</span>
        </div>


        <div>
            <Nav >
            </Nav>
        </div>
</header>
   </section>


   <section>
    <div class="max-w-3xl m-auto mt-5">
        <slot/>
    </div>

   </section>

</template>

<script>
import Nav from './Nav'
export default {
  components: { Nav },

    computed:{
        username(){
          return  this.$page.props.auth.name.username //this HandleInertia method is use for share data
        }
    }


}
</script>

<style>

</style>
