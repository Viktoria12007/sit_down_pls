// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['bootstrap-vue-3/nuxt'],
    css: ['bootstrap/dist/css/bootstrap.css'],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "@/assets/main.sass" as *\n'
                }
            }
        }
    }
})
