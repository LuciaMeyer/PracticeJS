import { createRouter, createWebHashHistory } from "vue-router";
import isAuthtenticatedGard from './auth-gard'

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },

  // POKEMON
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /*webpackChunkName: 'ListPage'*/ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: 'ListPage'*/ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: 'AboutPage'*/ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: 'PokemonPage'*/ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          // es un string por eso lo paso a numero
          const id = Number(route.params.id);
          // tengo que mandar un objeto
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: "",
        // redirect: 'pokemon/home',
        redirect: { name: "pokemon-about" },
      },
    ],
  },
  // DBZ
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [ isAuthtenticatedGard ],
    component: () =>
      import(
        /*webpackChunkName: 'ListPage'*/ "@/modules/dbz/layout/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /*webpackChunkName: 'ListPage'*/ "@/modules/dbz/pages/Characters"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(/*webpackChunkName: 'ListPage'*/ "@/modules/dbz/pages/About"),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },

  // RUTA 404
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: 'NotFound'*/ "@/modules/shared/pages/NotFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/*
Páctica Gard global, síncrono y asincrono --> no es muy usual usarlos de esta forma

--> Gard Global - Síncrono
router.beforeEach((to, from, next) => {
  console.log({to, from, next})
  const random = Math.random() * 100
  if (random > 50) {
    console.log('autenticado')
    next()
  } else {
    console.log(random, 'bloquedo')
    next({ name: 'pokemon-home' })
  }
})

-- > Gard Global - Asyncrono --> es raro usarlo de esta manera
const canAcces = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100;
    if (random > 50) {
      console.log("autenticado");
      resolve(true);
    } else {
      console.log(random, "bloquedo");
      resolve(false);
    }
  });
};

router.beforeEach(async (to, from, next) => {
  const authorized = await canAcces(to, from, next);
  authorized
    ? next()
    : next({ name: 'pokemon-home' })
});
*/

export default router;
