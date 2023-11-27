import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import(/*webpackChunkName: "ListPage"*/'@/modules/pokemon/pages/ListPage'),
  },
  {
    path: "/about",
    component: () => import(/*webpackChunkName: "AboutPage"*/'@/modules/pokemon/pages/AboutPage'),
  },
  {
    path: "/pokemonid/:id",
    component: () => import(/*webpackChunkName: "PokemonPage"*/'@/modules/pokemon/pages/PokemonPage'),
    
    props: (route) => {
      // es un string por eso lo paso a numero
      const id = Number( route.params.id) 
      // tengo que mandar un objeto
      return isNaN( id ) ? { id: 1 } : { id }
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import(/*webpackChunkName: "NotFound"*/'@/modules/shared/pages/NotFound'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
