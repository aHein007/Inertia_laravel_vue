import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import  Layouts  from "./Share/Layouts.vue"


createInertiaApp({
  resolve: async name =>{
   let page = (await import(`./Pages/${name}`)).default;

//    if( !page.layout ){
//     page.layout =Layouts
//    }

   page.layout ??= Layouts

   return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link",Link) // this is use for only one componet
      .mount(el)

  },
})

InertiaProgress.init({// this is use for loading procress
    color:"red",
    showSpinner:true
})
