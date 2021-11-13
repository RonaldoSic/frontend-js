# 1 ¿Qué significa ser un profesional de JavaScript? 1/42

El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no.
Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

## 1.1 ¿Qué forma a un profesional?

‌Te presento una lista de estas cosas que lo forman:

- ‌Conocimiento del lenguaje.
- Conocimiento de entornos de programación.
- Mejores prácticas.
- Versado en código.
- Herramientas.
- Ética / Profesionalismo.
- Experiencia.

## 1.2 El lenguaje: JavaScript

‌Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

## 1.3 No fundamentos

‌Los **"no fundamentos**" representan las siguientes características del lenguaje:

- ‌Promesas (nivel pro).
- Getters, setters: son formas de obtener valor de una variable sin tener que poner this.name.
- Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
- Generadores: esto es raro, pero vamos a ver que sí es eficiente.

## 1.4 ¿Cómo funciona?

‌Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

## 1.5 Entornos de programación

‌Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto. V

## 1.6 Versado en código

‌Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

## 1.7 Mejores prácticas

‌No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

## 1.8 Ética

‌Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

1. ‌Es responsable.
2. Entrega a tiempo sus trabajos.
3. Sabe decir que no.
4. No hace daño.

## 1.9 Experiencia

La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

# 2 Aspectos que destacan a un profesional 2/42

![infografia1](https://static.platzi.com/media/user_upload/Inforgafia-Profesional-Javascript-3-3988f109-a325-4735-a770-06db03b93166.jpg)

[Curso completo en versión escrita](https://augdiaugus.gitbook.io/recoleccion-de-notas-publicas/escuela-de-javascript/curso-profesional-de-javascript)

# 3 Inicio del proyecto 3/42

En este curso vamos a estar desarrollando una aplicación llamada: Platzi Video. En toda plataforma de video hay un componente especial en el desarrollo, tenemos que saber implementar el MediPlayer, en este curso vamos a estar desarrollando este feature de forma modular, esto quiere decir que vamos a desarrollar plugins que vamos a implementar a nuestro reproductor, extendiéndole sus funcionalidades. Vamos a comenzar con un poco de CSS y HTML ya escrito.

## 3.1 Primer paso

Crearemos nuestros primeros archivos usando `npm init -y`, donde `-y` es una bandera que le dicta a **npm** que le diga sí a todas las preguntas que haga.

Esto nos creará un archivo package.json que lo sustituiremos por el siguiente:

```json
{
  "name": "platzi-media-player",
  "version": "1.0.0",
  "description": "Proyecto del Curso Profesional de JavaScript de la Escuela de JavaScript de Platzi.",
  "license": "MIT",
  "author": "César Augusto Barco <augustopayza@gmail.com>",
  "keywords": ["platzi"],
  "scripts": {
    "start": "live-server"
  },
  "devDependencies": {
    "live-server": "^1.2.1"
  }
}
```
Una vez tengamos todo esto listo vamos a proceder a instalar nuestro `live-server` para empezar a trabajar. Para instalar esto vamos a usar el siguiente comando `npm i -D live-server` donde `i` **significa install** y la bandera `-D` **develoment**, esto quiere decir que no lo vamos a usar en producción.

Una vez instalado ya lo podremos usar con el **package.json** que dejé arriba. Lo usaremos con el comando `start` que llamará a su vez a **live-server**.

Antes de ejecutar este vamos a implementar varios archivos. Estos serán los siguientes:
- HTML
- CSS

También cualquier video que tengamos en nuestra PC. Nuestras carpetas tienen que quedar de la siguiente forma:

![orden proyecto](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-Ln9ZjFBlm-s-f1q7F63%2F-Ln9_Bamrmfcp4Ye0pUs%2FScreenshot_3.png?alt=media&token=409d3bd4-47be-4a99-90de-758d6680d5d4)

Ahora sí vamos a ejecutar nuestro pequeña aplicación. `npm start`. Nuestra pequeña aplicación andará en la IP que nos muestre la terminal.

## 3.2 ¿Qué sigue?
‌Tenemos un botón que no funciona, lo vamos a poner a funcionar con un `media query`. Abrimos nuestras etiquetas de **script**.

Tenemos un vídeo que debemos manipular, lo vamos a hacer con `querySelector("")`, a este tenemos que pasarlo un elemento, en este caso será video, es el único elemento video en nuestro HTML. Tambien debemos traer nuestro botón con `querySelector`.

```js
const  video = document.querySelector("video")
const  button = document.querySelector("button")
```

Cuando le demos **click** a nuestro *botón* queremos que el vídeo se reproduzca. Lo hacemos de la siguiente manera:
`button.onclick = ()=>  video.play()`

El `video.play()` se saca de la **API** que trae el navegador, todos los elementos del *DOM* traen una **API**. Para saber cuales son las opciones de esta **API** podemos ir a [MDN](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement) a ver toda la documentación. No podemos darle play de una vez a penas se entre en la página, esto pasa por que los navegadores tienen una seguridad que no permite que esto pase, solo se puede dar play si el usuario tiene la libertad de hacerlo.

Ahora nuestro código no es muy extensible, vamos a lograr esto usando prototipado. Para hacerlo extensible se pueden usar `clases`, pero en este caso usaremos `protitype`, usaremos el siguiente código para lograrlo.

```js
const  video = document.querySelector("video");
const  button = document.querySelector("button");
function  MediaPlayer(){}
MediaPlayer.prototype.play = function() {
  video.play()
}
const  player = new  MediaPlayer()
button.onclick = () =>  player.play();
```
Explicación:
1. Creamos una función llamada mediaPlayer que nos servirá como prototipo.
2. A mediaPlayer le asignamos una función llamada play usando prototype. Esta función le dará inicio al video.
3. Luego con el botón se acciona una función llamada player que es una instancia del prototipo mediaPlayer que creamos. La instancia se crea usando la palabra new.

## 3.3 Hagámoslo más reutilizable
Para que nuestro código sea más reutilizable debemos hacerlo de esta manera:

```js 
const  video = document.querySelector("video");
const  button = document.querySelector("button");

function  MediaPlayer(config) {
 this.media = config.el;
}

MediaPlayer.prototype.play = function() {
 this.media.play();
};

const  player = new  MediaPlayer({ el:  video });
button.onclick = () =>  player.play();
```

Explicación:
1. A nuestra función madre o prototipo le pasamos una configuración. Esta configuración lo que va a tener es el elemento **video** original. Le asignamos a `this.media` el elemento `video`.
2. A la función extendida le asignamos `play()` a `this.media` para que se ejecute cuando presionemos el botón.
3. En nuestra función especial player es una instancia del prototipo le asignaremos el valor de `video` para que lo reciba en configuración. Esto lo haremos con destructuración de objetos.

Acá no podemos usar arrow function por que el valor de `this` es **global**. Más adelante se verá con más detalle.

Para agregarle la funcionalidad de *pausa* y *play* con el **mismo botón**, debemos condicionar la función `play` de `MediaPlayer` de la siguiente manera:

```js
MediaPlayer.prototype.play = function() {
 if(this.media.paused){
	 this.media.play();
 } else {
	 this.media.pause()
 }
 // o podemos usar lo siguiente:
 // this.media.paused ? this.media.play() : this.media.pause()
};
```
‌

‌