import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import SuppliersList from "@/components/SuppliersList.vue";
import SuppliersMap from "@/components/SuppliersMap.vue";
import Supplier from "@/components/Supplier.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //{path: '/supplier', name:'supplier', component: Supplier},
        {path: '/suppliersList', name:'suppliersList', component: SuppliersList},
        {path: '/suppliersMap', name:'suppliersMap', component: SuppliersMap}
    ]
})

createApp(App).use(router).mount('#app')
