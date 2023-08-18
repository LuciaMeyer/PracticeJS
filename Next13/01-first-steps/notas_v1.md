
> Datos generales:

- comparando con create-react-app ya no tenemos el App() con el ruteo, este se forma según el nombre de archivo y las carpetas.
- solo se crean rutas si uso el archivo llamado page, y la ruta se identifica según el nombre de la carpeta en dónde está alojado. Si en una carpeta no tengo un archivo page no se crea rutas.
- entonces puedo tener una carpetas components que no van a ser rutas, solo van a ser componentes que uso dentro de otros.
- para habilitar turbopack en package.json agregar en el script de "dev". Hasta el momento Solo funciona en desarrollo. Todavía esta en beta, no se puede usar en producción, hace que la aplicación cargue más rápido
`
"scripts": {
    "dev": "next dev --turbo",
...
}
`
- new file about/page.tsx (de esta forma crea la carpeta y dentro el archivo page)
- todos los componentes dentro de la carpeta app son server component, como comportamiento nativo. Esto es para asegurar la velocidad del cliente y cargar la menor cantidad de javascript posible. Se recomienda que el 99% de nuestra app sean server components y sólo tengamos algunos componentes del lado del cliente 'use client' dependiendo de las interacciones o funcionalidades que queramos darle.

```
"RESERVADOS"
> file page --> rutas
> file layout --> lo que envuelve a esa ruta y las que está anidando (seria nuestro anterior html y App)
> file loading --> muestra el loading junto con el resto del html que ya tenemos hasta que se termine de ejecutar lo que solicitamos 
> component <Suspense> --> funciona como el loading pero no se le puede pasar el tiempo
> file error --> funciona como el loading pero cuando encuentra algún error en la carga. OJO tiene que ser si o si un 'use client'
> fuentes e imágenes --> ya viene dentro del paquete de Next 13 no hace falta instalar
```
_________________________________________________________________________________________________

> Explicación de archivos y directorios al crear el proyecto

- tsconfig.json --> es el archivo de configuración de typescript
- tailwind.config.ts --> configuración de tailwind
- Readme --> debe usarse para dar instrucciones a otros programadores de cómo levantar y construir la aplicación
- postcss.config.js --> lo instala tailwind y ayuda a hacer configuraciones de css
- next.config.js --> configuraciones globales de cómo funciona nuestra aplicación con Next.
- next-env.d.ts --> archivos de definición de typescript. Ayuda tener el tipado estricto de typescript
- gitignore --> todo lo que no queremos que se suba a GitHub
- carpeta public --> contenido estático
- carpeta app --> nuestro proyecto
    - globals.css --> estilo global de la aplicación
    - favicon.ico --> ícono en el navegador
    - layout.tsx (más adelante lo vemos)
    - page.tsx (más adelante lo vemos)

Lo que es propiamente de Next entonces es: carpeta app + public + next.config.js
_________________________________________________________________________________________________

> Metadata - Metatags
- ayuda al SEO para que los motores de búsqueda asocien a nuestra página lo que se está buscando 
- Next permite crear metatags para cada una de nuestras pantallas. Se hace exportando una constante metadata como está en el layout principal

```
export const metadata = {
    title: 'SEO title',
    description: 'description SEO'
};
```
_________________________________________________________________________________________________

> File pages --> component: Home() 

- Al llamarse pages crea automáticamente una ruta.
- Es la página principal de nuestra aplicación la ruta '/', ya que está en la misma linea de carpetas que el layout: src/app/pages.js

_________________________________________________________________________________________________

> File layout --> component: RootLayout()

- seria el "html" que antes teníamos en public. Se usa como el diseño raíz de la aplicación, es dónde vamos a inyectar nuestro árbol a través de los componentes
- Recibe prop llamada children, que representa los componentes hijos que se renderizarán dentro del RootLayout
- Lo que pongamos en nuestro archivo va a impactar en todas nuestras páginas del proyecto
- La línea ` import { Inter } from 'next/font/google'` está importando la fuente tipográfica Inter de Google Fonts utilizando el módulo next/font/google. Esto permite utilizar la fuente Inter en la aplicación
- La línea `const inter = Inter({ subsets: ['latin'] })` define una variable llamada inter que guarda la configuración de la fuente Inter con el subconjunto de caracteres 'latin'. Esto indica que solo se cargarán los caracteres del alfabeto latino para la fuente
_________________________________________________________________________________________________

> Layout anidados

- Dentro de una ruta puedo tener otro layout que me permita construir un sub-menú o algo que no cambie dentro.
- Qué pasa si quiero compartir un layout (misma estructura) para varias rutas. Tengo que armar un "grupo". En el arbol de carpetas creo una con el nombre entre paréntesis y dentro pongo las carpetas que quiero que compartan el layout, lo que esté dentro de los paréntesis no lo toma en la URL. Y ese archivo layout lo pongo en la raíz de la carpeta del grupo.
```
[]-(group)
  []-about
  []-contact
  -layout.tsx

la url sería por ejemplo --> http://localhost:3000/about --> no aparece "group"
```
- Importante! los layout mantienen los estados. Aunque haya actualizaciones en el renderizado, su estado no va a cambiar

_________________________________________________________________________________________________

> <Link>

- se importa de next/link
- a diferencia del tag <a> permite navegar a otras rutas sin hacer un refresh general de toda nuestra aplicación

_________________________________________________________________________________________________


-
-
-
-
-
-
-
-
-
-
-
-
> Rutas dinámicas

- para poder armarlas y suponiendo que necesitamos la ruta: /posts/:id lo que hacemos es dentro de la carpeta posts creamos una subcarpeta con el nombre [id] y dentro el archivo page.jsx para que tome esa ruta
_________________________________________________________________________________________________

> React Server Components

- No se puede hacer un fetching de datos normal con useEffect. Por eso es que el fetch se debe colocar fuera del componente (mismo archivo). Y convertir el componente en asíncrono. 

- Ejemplo: Todo el fetch de este código se está ejecutando en el servidor

```
const fetchPosts = () => {
  console.log('res')
  return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
};

export default async function Posts() {
  const posts = await fetchPosts()

    return (
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Estos son los Posts: </h1>
        {
          posts.slice(0,5).map(p => (
            <article key={p.id}>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </article>
          ))
        }
      </section>
    )
  }
```

- Este un fecthcing de datos estático y se guarda si hago un npm run build. Si quiero que sea dinámico tengo que agregarle un objeto con la propiedad caché para que no lo guarde (hay varias posibilidades para pasar dentro de ese objeto y que se comporte distinto) y también tengo la opción de hacer un incremental static regeneration.

```
getStaticProps:

const fetchPosts = () => {
  console.log('res')
  return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
};

getStaticSideProps:

const fetchPosts = () => {
  console.log('res')
  return fetch('http://jsonplaceholder.typicode.com/posts', {cache: 'no-store})
    .then(res => res.json())
};

incremetal statis regeneration:

const fetchPosts = () => {
  console.log('res')
  return fetch('http://jsonplaceholder.typicode.com/posts', {next: { revalidate: 60 } })
    .then(res => res.json())
};
```

- en los componentes del serivdor tampoco podemos ejecutar estados, handleClick etc. Todo eso deberíamos ejecutarlos en los componentes que están por fuera de app
_________________________________________________________________________________________________

> Componentes en el cliente

- Es importante que los componentes de cliente sean los más pequeños, para que nuestro buddle sea chico también.

- Si tengo un componente dentro de la carpeta app y quiero concertirlo en un componente de cliente tenemos que usar 'use client' en la primer linea del archivo
_________________________________________________________________________________________________

> Loading 

- Es un componente "reservado" como el page o el layout. Dependiendo en la ruta de carpeta en donde lo pongamos el programa identifica que tiene que usar el loading si se está demorasndo mucho en devolver la información. Mientras todo lo demás ya lo está renderizando
_________________________________________________________________________________________________

> Font

- Ya viene configurado e instalado en Next 13
- en el componente RootLayout puedo modificar y agregar las que quiera, ejemplo: 

```
import { Roboto } from '@next/font/google'

const font = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function RootLayout({ children }) =>{
    return (
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </html>
  )
}
```
- Puedo usar ese pedacito de código (sin el componente) en un archivo font.js (exportando la constante font). Y después lo importo desde dónde necesite usarla
- Para Tailwind ver documentación:
[With Tailwind CSS](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css)
_________________________________________________________________________________________________

> Image
- Ya viene configurado. En el componente:

```
import Image from 'next/image'
```

dentro del html del componente:

```
  <Image
    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
```
