<template>
   <nav>
    <ul class="flex list-disc space-x-4 list-inside">
        <li>
        <NavLink href="/" :active="$page.url == '/'">
           Home
        </NavLink>
    </li>
    <li><Link href="/user?foo==aung" class="text-blue-500 hover:underline" :class="{'font-bold underline':$page.url.startsWith('/user')}">User</Link> <!--startsWith method is use for (when you get random url and to fix with this)-->
    </li>
    <li>
        <NavLink href="/settings" :active="$page.url == '/settings'">
            Settings
        </NavLink>
    </li>
    <li><Link href="/logout" class="text-blue-500 hover:underline" method="post" as="button" :data="{food:'hi aung'}" :class="{'font-bold underline':$page.url =='/logout'}">Logout</Link>
    </li>
    </ul>
  </nav>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
import NavLink from '../Share/NavLink.vue';
export default {
 components:{
    Link,
    NavLink
 }
}
</script>

<style>

</style>
