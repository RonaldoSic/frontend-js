- [Curso de NextJS de Platzi](#curso-de-nextjs-de-platzi)
- [Instalacion de NextJS](#instalacion-de-nextjs)
  - [Primera forma de instarlo por medio de CLI](#primera-forma-de-instarlo-por-medio-de-cli)
  - [Segunda forma instalacion de manera manual](#segunda-forma-instalacion-de-manera-manual)
- [Routing](#routing)
  - [Rutas Estaticas](#rutas-estaticas)
  - [Rutas Dinámicas](#rutas-dinámicas)
- [Under The Hood: Optimizaciones ocultas en las paginas y Pre rendering de páginas](#under-the-hood-optimizaciones-ocultas-en-las-paginas-y-pre-rendering-de-páginas)
  - [Ideas/conceptos claves](#ideasconceptos-claves)
  - [Apuntes](#apuntes)
- [UnderTheHood páginas: pre rendering de páginas](#underthehood-páginas-pre-rendering-de-páginas)
  - [Estrategias de renderizado web](#estrategias-de-renderizado-web)
- [Enlazando páginas](#enlazando-páginas)
- [UnderTheHood enlazando páginas: prefetching automático](#underthehood-enlazando-páginas-prefetching-automático)
- [Como crear API con NEXTJS](#como-crear-api-con-nextjs)
- [Creando y consumiendo nuestra propia API](#creando-y-consumiendo-nuestra-propia-api)
- [Extendiendo el Document](#extendiendo-el-document)
- [Extendiendo el App](#extendiendo-el-app)
- [Path alias](#path-alias)
- [Explora las soluciones de CSS en NextJS y su flexibilidad](#explora-las-soluciones-de-css-en-nextjs-y-su-flexibilidad)
  - [Apuntes](#apuntes-1)

# Curso de NextJS de Platzi

# Instalacion de NextJS

## Primera forma de instarlo por medio de CLI

```bash
  yarn create next-app
  #De manera automatica y genera una estructur del proyecto
```

## Segunda forma instalacion de manera manual

```bash
  yarn add next react react-dom
```

Una vez ya instalado las dependencias de cualquier forma si de manera manual o de forma automatica
lo que se hace es en el archivo `package.json` agregar los siguientes scripts para poder compilar NextJS.

```json
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

Seguidamente crear una carpeta que se tiene que llamar **📁pages** para que _nextjs_ sepa y pueda servir las paginas que mostrara.

# Routing

Todo lo que se conoce paginas o navegación se entiendi con el nombre de **Routing**.
En **NextJS** ya tenemos una solución para no preocuparnos de esto, y hay dos formas de hacer esto.

1. **Routing Estáticas o Basica**
   > Eemplos de esto es las paginas de `/about`, `/contacto` o el `/home`
2. **Routing Dinamicos**
   Son las que se generan de forma consecutiva dependiendo de variables
   > Ejemplo: `/user/ronaldosic`, `user/mariatzoc`

## Rutas Estaticas

**Crear la primera página estatica**.

Para ello se crea un archivo en la carpeta **_📁pages_** en el cual lo denomino `index.js`
en esta pagina creamos un componente de react algo así.

```js
import React from "react";

export default function index() {
  return (
    <div>
      <h1>Page Home</h1>
    </div>
  );
}
```

A esto se le conoce como una página basica, ya que no depende un un contenido externo, ya que **NextJS** nunca pregunta que hacer con el, ya que lo toma como la pagina principal del sitio.

Y asi podemos hacer mas páginas ya que si queremos agregar una "nueva ruta", solo tenemos que crear un nuevo archivo en la carpeta de carpeta **_📁pages_** y ahí colocar el nombre de esta nueva pagina, por ejemplo `about.js`.
y que en este archivo tenga un nuevo componente de react algo así:

```js
import React from "react";

export default function about() {
  return (
    <div>
      <h2>Page About</h2>
    </div>
  );
}
```

Esto se le conoce como **routing basadoe en el file system** es decir que **_NextJS_** va hacer **Routing** tomando o dependiendo de lo que se coloque dentro de la carpeta **_📁pages_**. Si queremos una página para **productos** solo tenemos que agregar un archivo con el nombre de `productos.js` en la carpeta **_📁pages_** y listo **_NextJS_** ya tendrá una ruta para este archivo como una página nueva.

## Rutas Dinámicas

<!-- slide -->

[Mas información aquí](https://nextjs.org/docs/routing/dynamic-routes).

Las rutas dinámicas se crean con una sintaxis usando las `[].js`, donde las páginas pueden ser algo así:

`/productos/queryParam`

Para este ejemplo lo que haremos es una ruta para los productos con un query param del nombre que lo que haremos es capturar el nombre que nos pasan por la URL del navegador y lo haremos de este forma.

1. Creamos una carpeta con el nombre de **📁produc** dentro de la carpeta de **_📁pages_**.
2. En la carpeta **📁produc** creamos un archivo con el nombre de **📄[nombre].js**.
   1. Donde `nombre` es el valor que será capturado para dentro de la ruta de `/product/tenis`.

En el archivo de `[nombre].js` colocamos un componente de React algo así.

```js
import React from "react";
import { useRouter } from "next/router"; // Esto es para poder obtener los query params dentro de la URL que nos mandan por el cliente.
const ProductItem = () => {
  // ? Podemos usarlo de esta forma para poder acceder a la variable que hemos denominado por el nombre del archivo en este caso podemos acceder a "nombre"
  const router = useRouter();
  // ? Otra forma de acceder a la variable del query es destruccturar el obejeto de esta forma
  const {
    query: { nombre },
  } = useRouter();
  return (
    <div>
      <h2>
        Este es la pagina de productos y buscas el producto{" "}
        {router.query.nombre}
      </h2>
      <h3>Seccion de {nombre}</h3>
    </div>
  );
};

export default ProductItem;
```

# Under The Hood: Optimizaciones ocultas en las paginas y Pre rendering de páginas

## Ideas/conceptos claves

- **chunk** -> pedazo de código.
- **CSR** -> Client Side Rendering.
- **SSR** -> Server Side Rendering.

## Apuntes

```json
"scripts": {
    "dev": "next", // desarrollo
    "build": "next build", // build produción
    "start": "next start" // server node para produccion
},
```

Al momento de compilar separa el código con la técnica **code splitting**. Ademas de aplicar _hashes_ a los _assets_. Ademas que para cada pagina generara un **chunk** especifico y mantendrá el código que se usara durante toda la aplicación

Podemos ver que las paginas generadas son **SSR** dándonos más **SEO** que con **CSR**

**Next.js** aplica al bundle final diferentes optimizaciones como ser vendor files que hacen que no nos preocupemos de la configuración del proyecto. Ademas que nos da un mejor **SEO** por el server side rendering.

# UnderTheHood páginas: pre rendering de páginas

En el último año, ha cogido gran fuerza la estrategia [JAMstack](https://jamstack.org/). Generalmente esta aproximación contempla una web únicamente desarrollada con JavaScript, APIs y lenguaje de marcado. Estos sitios suelen construirse con generadores de sitios estáticos como pueden ser **Jekyll, Hugo, Nuxt, Next, Gatsby, entre otros**.

Lo que todos estos sites tienen en común es que no dependen de un backend que está renderizando la web en cada request, liberándose así de costes de infraestructura. Otra característica que representa a estos sites JAMStack es, generalmente, la utilización de [Headless CMS](https://headlesscms.org/) para recuperar la fuente de datos estáticos en el momento de build.

## Estrategias de renderizado web

Para ello, lo primero que necesitamos entender son las siglas/nomenclaturas que utilizamos para identificar inequívocamente cada estrategia de renderizado:

- **SSR**: Server-Side Rendering: se renderiza el HTML del cliente totalmente en el lado servidor. Esta aproximación suele ser el modelo de webs tradicionales.
- **CSR**: Client-Side Rendering: se renderiza la aplicación completamente en el navegador haciendo uso de Javascript y la gestión del DOM. Comúnmente conocidas como Single Page Applications.
- **Rehydration**: esta estrategia es un híbrido de las dos anteriores en el que se aprovecha el HTML y los datos renderizados desde el lado servidor, hidratándose con una aplicación javascript que se monta encima de esta.
- **Prerendering**: en esta estrategia se renderiza la web en tiempo de construcción creando un artefacto que puede servirse de una manera totalmente estática.

[Leer sobre esto aquí](https://adrianalonso.es/desarrollo-web/renderizando-la-web-en-2020/)

# Enlazando páginas

**Anchor** -> Anclaje, nos sirve para hacer hipervínculos, de forma tradicional como lo es en el html normal.

Para poder hacer un enlace de paginas debemos importar el componente `Link` de **Next.js**, como propiedad se pasa un **href** el cual sera la ruta que deseemos ir y este debe contener una etiqueta anchor dentro del componente.

```js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
```

Con la etiqueta `Link` de **Next.js** podemos direccionar las rutas de nuestra aplicación.

# UnderTheHood enlazando páginas: prefetching automático

**Next.js** cuando usamos la etiqueta Link para nuestras rutas. Si hacemos hover o estamos encima de uno de los elementos lo que intentara hacer internamente sera pedir al servidor que prepare ese chunk de código.

**Next.js** nos ayuda bastante con técnicas las cuales son bastante inteligentes, como en este caso el prefetching de paginas.

# Como crear API con NEXTJS

Para crear un servicio de **API** con **NextJS** se hace como si fuese en **NodeJS** ya que tiene incorporado los objetos `request` y `response` y con esto ya podemos retornar diferentes arvhivos segun sea necesario.
Lo que se ha hecho aqui es preparar una ruta denominada como `api` el cual no es mas que una carpeta 📁 y en esa misma carpeta de `📁api` se ha creado una mas interna que se llama `📁avo` el cual en esa carpeta **avo** hay dos arhcivos una que se llama `📄index.js` y el otro es `📄[id].js` esto es para formar la ruta de `/api/avo` que hace llamado al **📄index.js** dentro de avo. y si hacemos una peticion **get** a la ruta de ejemplo `/api/avo/1j312` haremos referencia al archivo **📄[id].js** dentro de **📁avo**. Recordando que todas estas carpetas de **📁api** estan en la carpeta de **📁pages** y asi es como se forman las rutas.

Y en esos tipos de archivos podemos hacer conexiones a abase de datos y retornar datos por esas rutas o poder entregarlos a otro archivo y que se encargue de procesarlos y mostrarlos en el navegador.

# Creando y consumiendo nuestra propia API

**Para debugear con NextJS** se modifica el archibo de `package.json` se el agrega lo siguiente.

```json
// Esto funciona para WINDOWS
  "scripts": {
    "dev:inspect": "npm --node-options=--inspect=0.0.0.0:9229 run dev",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },

// Esto funciona para MAC y LINUX
  "scripts": {
    "dev:debug": "NODE_OPTIONS='--inspect' next",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```

# Extendiendo el Document

**Advertencias sobre extender el Document:**
Ya que el Document se renderiza en servidor, los eventos como `onClick` no funcionarán.
Los componentes de React fuera de `<Main />` no serán inicializados por el navegador. No añadir lógica de la aplicación aquí o CSS personalizado (como styled-jsx).

Si necesita componentes compartidos en todas sus páginas (como un menú o una barra de herramientas).
`getInitialPropsfunción` de `Document` no se llama durante las transiciones del lado del cliente, ni cuando una página está optimizada estáticamente.

[Custom `Document`](https://nextjs.org/docs/advanced-features/custom-document)

Para modificarlo se tiene que crear un archivo con el nombre de **`📄_document`** y la extension que se esta usando si `jsx` o `tsx`, y se tiene que colocar en la carpeta principal de **`📁pages`** y ahi se modifica lo que uno quiera.

```js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Para colocar un Favicon */}
          {/* Para colocar webFont */}
          {/* Para colocar stylos extenos como Bulma u otros */}
          {/* Para colocar scripts/js  extenos como el de JQuery u otros */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

# Extendiendo el App

[Custom `App`](https://nextjs.org/docs/advanced-features/custom-app)

**Casos de uso**:

- Providers (Context)
- Themes
- Layout
- Props adicionales

Es del mismo modo que el docuemto de **`📄_document.js`** se tiene que colocar en la carpeta principal de **`📁pages`** con el nombre de **`📄_app.js`** y en este archivo se modificara para colocar algunas nuevas caracteristicas que podemos modificar.

```js
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
```

# Path alias

El path alias es una fomra de configurar algunas rutas, esto se hace en el archivo de configuracion de **`tsconfig.json`**
o e el archivo **`jsconfig.json`** donde se coloca las configuraciones iniciales para el proyecto, como puede ser acortar la ruta de los **componentes** que por lo general pueden llegar a ser muy grandes o pude que donde se requiera cieto componente se tenga que escalar en varias carpetas como puede ser el siguieten ejemplo.

> `../../../components/Navbar/Navbar`

El cual se puede llegar a reducir de esta forma.

> `@components/Navbar/Navbar`

Es por eso que se ha de crear los siguiente en el archivo de configuracion.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["components/*"]
    }
  }
}
```

# Explora las soluciones de CSS en NextJS y su flexibilidad

Para los que usamos SCSS o SASS

1. Debemos instalar las dependencias @zeit/next-sass node-sass
2. Crear un archivo con el nombre next.config.js en el root del proyecto
3. Pegar dentro del archivo next.config.js\* el siguiente código:

```js
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
});
```

Esto funciona para estilos globales y modulares.

Adicional a esto, si quieren importar fuentes locales a su proyecto:

1. Debemos instalar la dependencia npm install --save nextjs-fonts
2. Dentro del archivo next.config.js escribir el siguiente código

```js
const withSass = require("@zeit/next-sass");
const withFonts = require("nextjs-fonts");

module.exports = withSass(
  withFonts({
    webpack(config, options) {
      return config;
    },
  })
);
```

Esto implementará Sass y fuentes locales.

**CSS Modules** -> Estaban bastante populares antes de la llegada de CSS-in-JS.
**CSS-in-JS** -> Es poner estilos CSS dentro de nuestro código JS.

## Apuntes

**`Next.js`** no nos ofrece una recomendación en particular para los estilos. Pero nos dan tres formas de dar estilos sin cambiar nada en su configuración.

_Built-in CSS Next.js_

1. **Global CSS (.css)**
   1. Todos nuestros estilos se encontraran en un solo lugar para ello debemos hacer lo siguiente

**Crear un archivo CSS en la raíz de nuestro proyecto en el mismo nivel de las configuraciones como lo son el package.json**

```css
.container {
  background-color: salmon;
}
```

**agregarlo a la app
utilizar la prop**

**_importar el archivo en \_app.js_**

```tsx
import '../style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (...)
}

export default MyApp
```

**Usar la clase**

```tsx
const Layout: React.FC = ({ children }) => {
  return <div className="container">...</div>;
};
export default Layout;
```

2. Module CSS (.module.css)
   1. Usa CSS modules para usarlo debemos crear un archivo CSS el cual debe tener la siguiente nomenclatura

**[nombre].module.css**

**Y para usarlo debemos importarlo como si fuese un archivo JS**

```tsx
import styles from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return <div className={styles.container}>...</div>;
};

export default Layout;
```

la ventaja es que al momento de aplicarlo genera una clase única con un hash

3. CSS-in-JS Styled JSX (Next.js - Vercel)
   1. Esta es la forma de crear por defect en Next.js CSS-in-JS la cual se usa poniendo la etiqueta `<style>` dentro de nuestro componente, marcando la propiedad de JSX y en su contenido agregando un **template literal**.

**Ejemplo**

```tsx
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <footer className="container">this is the footer</footer>
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  );
};
```

Sus ventajas es que el alcance de los estilos solo afectan al componente en si. Ademas que genera clases con un hash para no colisionar estilos.

**_RESUMEN_**: Se tienen tres formas de usar estilos median **estilos globales**, **módulos** y **CSS-in-JS**. Cada uno tiene ventajas y desventajas.
