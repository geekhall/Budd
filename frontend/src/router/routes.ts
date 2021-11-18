import { RouteRecordRaw } from "vue-router";

const routes:RouteRecordRaw[] = [
    {
        name: 'Blog',
        path: '/blog',
        component: () => import('@pages/blog/index.vue')
    },
]

export default routes;