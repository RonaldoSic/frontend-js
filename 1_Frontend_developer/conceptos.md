# Tabla de contenido
- [Tabla de contenido](#tabla-de-contenido)
- [1 HTML y CSS Definición 2/43](#1-html-y-css-definición-243)
- [2 ¿Qué son y para qué nos sirven HTML y CSS? 3/43](#2-qué-son-y-para-qué-nos-sirven-html-y-css-343)
  - [2.1 HTML](#21-html)
  - [2.3 CSS](#23-css)
- [3 DOM, CSSOM, Render Tree y el proceso de renderizado de la Web 4/43](#3-dom-cssom-render-tree-y-el-proceso-de-renderizado-de-la-web-443)
  - [3.1 DOM:](#31-dom)
  - [3.2 CSSOM:](#32-cssom)
  - [3.3 Render Tree:](#33-render-tree)
- [4 Cinco tips para aprender CSS 5/43](#4-cinco-tips-para-aprender-css-543)
- [5 Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos 6/43](#5-anatomía-de-un-elemento-html-atributos-anidamiento-y-elementos-vacíos-643)
- [6 Anatomía de un Documento HTML: DOCTYPE, html, head y body 7/43](#6-anatomía-de-un-documento-html-doctype-html-head-y-body-743)
- [7 Funciones de las etiquetas HTML más importantes 8/43](#7-funciones-de-las-etiquetas-html-más-importantes-843)
- [8 La importancia del código semántico 9/43](#8-la-importancia-del-código-semántico-943)
- [9 Tipos de errores en HTML, debugging y servicio de validación de etiquetas 10/43](#9-tipos-de-errores-en-html-debugging-y-servicio-de-validación-de-etiquetas-1043)
- [10 Anatomía de una declaración CSS: Selectores, Propiedades y Valores 12/43](#10-anatomía-de-una-declaración-css-selectores-propiedades-y-valores-1243)
- [11 Tipos de selectores, pseudo-clases y pseudo-elementos 13/43](#11-tipos-de-selectores-pseudo-clases-y-pseudo-elementos-1343)
- [12 Modelo de caja 14/43](#12-modelo-de-caja-1443)
- [13 Valores relativos y absolutos 15/43](#13-valores-relativos-y-absolutos-1543)
- [14 Displays en CSS 16/43](#14-displays-en-css-1643)
- [15 Funciones de las propiedades CSS más usadas 17/43](#15-funciones-de-las-propiedades-css-más-usadas-1743)
- [16 Posicionamiento en CSS 18/43](#16-posicionamiento-en-css-1843)
- [17 ¿Qué son y para qué nos sirven las arquitecturas CSS? 19/43](#17-qué-son-y-para-qué-nos-sirven-las-arquitecturas-css-1943)
- [18 OOCSS, BEM, SMACSS, ITCSS y Atomic Design 20/43](#18-oocss-bem-smacss-itcss-y-atomic-design-2043)
  - [18.1 OOCSS](#181-oocss)
  - [18.2 BEM](#182-bem)
  - [18.3 SMACSS](#183-smacss)
  - [18.4 ITCSS](#184-itcss)
  - [18.5 Atomic Design](#185-atomic-design)
- [19 ¿Qué es un componente? Analicemos nuestros diseños 22/43](#19-qué-es-un-componente-analicemos-nuestros-diseños-2243)
- [20 Estructura con HTML y BEM de un menú desplegable 23/43](#20-estructura-con-html-y-bem-de-un-menú-desplegable-2343)
  - [Bloque](#bloque)
  - [Elemento](#elemento)
  - [Modificadores](#modificadores)

# 1 HTML y CSS Definición 2/43

Internet nacio al pricipio de los años 80 y es la convinación de dos palabras **INTERCONNECTED** y **NETWORK** lo que quiere decir que es una red de computadoras conectadas entre si que hoy por hoy es el internet.
**_TIM BERNERS-LEE:_** que es el creador de la _Word Wide Web_ **www** donde funde el consorcio de **W3C** para estandarizar y supervisar el desarrollo de las tecologias báse del internet **_HTTP, URL, HTML_**

- _HTTP:_ El Protocolo de Transferencia de Hipertexto (http). **Hyper Text Transfer Protocol: //**
- _URL:_ El localizador de Recursos Uniforme (URL) **Uniform Resourse Locator** mas conocido como la dirección de un sitio web.
- _HTML:_ El lenguaje de Marcado de Hipertexto (HTML) **Hyper Text Markup Language**, esto es para escribir la estructura de una página web.

En **1994** nace el primer borrador de **CSS** _Cascade Style Sheets_ describen la apariencia de un sitio web, como lo es color, texto y tamaños de pantallas.

# 2 ¿Qué son y para qué nos sirven HTML y CSS? 3/43

## 2.1 HTML

Es un lenguaje de marcado usado para decirle a tu navegador cómo estructurar la páginas que visitas.
[Más información](https://htmlreference.io/)

## 2.3 CSS

Es un lenguaje que permite crear páginas web con un diseño agradable para los usuarios.
[Más información](https://cssreference.io/)

# 3 DOM, CSSOM, Render Tree y el proceso de renderizado de la Web 4/43

## 3.1 DOM:

Document Object Model. Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.

## 3.2 CSSOM:

Así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.

## 3.3 Render Tree:

Es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

- Procesa el HTML para construir el DOM.
- Procesa el CSS para construir el CSSOM.
- El DOM se une con el CSSOM para crear el Render Tree.
- Se aplican los estilos CSS en el Render Tree.
- Se ““**pintan**”” los nodos en la pantalla para que los usuarios vean el contenido de la página web.

# 4 Cinco tips para aprender CSS 5/43

**5 Tips ára aprender CSS**
![Infografía](https://static.platzi.com/media/user_upload/Infografia-Frontend-Javascript-86c602ef-a014-47d7-aadd-1293726d06b2.jpg)

# 5 Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos 6/43

Nuestros elementos HTML se componen de:

- Etiqueta de apertura: el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: `<h1>`.
- Contenido: dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento.
- Etiqueta de cierre: son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: `</h1>`.

Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: `<etiqueta atributo=""valor del atributo"">`. Por ejemplo: `<h1 class=""saludo"">`.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: `<img src=""puppy.png"" alt=""mi mascota"">`.

# 6 Anatomía de un Documento HTML: DOCTYPE, html, head y body 7/43

La etiqueta **meta** con el atributo **viewport** sirve para definir la escala visual del sitio.

En pocas palabras si defines también el atributo content después del atributo viewport en la misma etiqueta meta con el valor: **"width=device-width, initial-scale=1"** le estamos diciendo a nuestro sitio web que ancho máximo de nuestra página web será el ancho del dispositivo desde donde se esté aperturando el sitio web (móvil, tablet, pc).

![Viewport](https://blog.hubspot.com/hs-fs/hubfs/viewport-1.png?width=1280&name=viewport-1.png)

# 7 Funciones de las etiquetas HTML más importantes 8/43

Al hacer en nuestro editor de código html:5 vemos que nos aparece la siguiente estructura:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Veamos la descripción de estos elementos:
![Descripcion](https://static.platzi.com/media/user_upload/Funciones%20de%20las%20etiquetas-01-19c2a366-4d38-434c-8aaa-4b85276028dc.jpg)

Si por ejemplo queremos añadir en nuestro documento estilos o JavaScript, lo hacemos con las etiquetas `<style>` y `<script>` respectivamente, que a su vez deben ir dentro de la etiqueta raíz `<html>`, algo así:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      /* Aquí iría nuestro CSS */
    </style>
    <title>Document</title>
  </head>
  <script>
    // Aquí debería ir nuestro JavaScript
  </script>
  <body></body>
</html>
```

Descripción de algunos elementos vacíos:
![Elelmentos](https://static.platzi.com/media/user_upload/Funciones%20de%20las%20etiquetas-02-32fac483-1c4c-4518-8577-1c0a96103ac3.jpg)

Descripción de las etiquetas semánticas para la estructura base de nuestra página:
![Elelmentos2](https://static.platzi.com/media/user_upload/Funciones%20de%20las%20etiquetas-03-e3d21c27-3981-47fd-bdae-2df7becce6e5.jpg)

Descripción de otras etiquetas muy usadas:
![etiquetas](https://static.platzi.com/media/user_upload/Funciones%20de%20las%20etiquetas-04-f1438060-60af-43ff-bfa8-10df4927c7b0.jpg)

# 8 La importancia del código semántico 9/43

Es importante que como desarrolladores tengamos claro el significado de escribir código. Debes ser consciente de que la manera en la que codeas tenga sentido.

La semántica HTML no es más que darle sentido y estructura a lo que estas escribiendo. Muy importante para el navegador. No todos los elementos deberían ser un div.

# 9 Tipos de errores en HTML, debugging y servicio de validación de etiquetas 10/43

Tipos de errores

- **Errores sintácticos**: Son errores de escritura en el código que hacen que el programa no funcione.
- **Errores lógicos**:En estos errores la sintaxis es correcta, pero el código no hace lo que debería, por lo que el programa funciona de forma incorrecta.

# 10 Anatomía de una declaración CSS: Selectores, Propiedades y Valores 12/43

Nuestros estilos con CSS se componen de:

**Selector**: son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre _({})_. Por ejemplo: `h1 {}`.

**Propiedades**: son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector. Por ejemplo: `h1 { color: }`.

**Valores**: son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Por ejemplo: `h1 { color: red; }`.

# 11 Tipos de selectores, pseudo-clases y pseudo-elementos 13/43

**\*(asterisco)**: Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML.

**Tipo**: Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc.

**Clase**: Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

**ID**: Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento.

Las Pseudo-clases y Pseudo-elementos nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.

Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: `p:first-child)`. En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces `(p::first-letter)`.

```css
/* Asterisco (universal) */
* {
  margin: 0;
}

/* Tipo */
h1 {
  color: red;
}

/* Clase */
.saludo {
  font-size: 2em;
}

/* ID */
#id {
  border-radius: 20px;
}

/* Pseudo-clases */
p:first-child {
  color: white;
}

p:last-child {
  color: purple;
}

p:nth-child(2n) {
  color: red;
```

[Pseudo Clases CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

[Pseudo Elementos CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

# 12 Modelo de caja 14/43

Recursos de colores para diseño en css
[Picular Video](https://picular.co/Video)
[Paletton](https://paletton.com/#uid=14f0u0klsmqbexOgGrnq4hYvrcs)

El modelo de caja se conforma de cuatro elemenos que son:

- \*\*contenido.
- **padding**
- **borde**
- **margin**

No olvidarse del valor del outline que es un elemento que conforma el modelo de caja.

![OutLine](https://static.platzi.com/media/user_upload/ccaja-5ad7e204-0869-4553-85e0-e342aadeeedc.jpg)

# 13 Valores relativos y absolutos 15/43

No se fijan en la medida de otro elemento para establecer sus tamaños que requieran.

**Los valores absolutos son**, por ejemplo, centímetros, milímetros, pixeles y pulgadas. Se llaman de esta forma porque no tienen en cuenta a nadie más, no depende de la medida de otra unidad.

**Los valores relativas**, llevan este nombre porque depende de otra unidad de medida o elemento. Por ejemplo, porcentajes, vmx, em, entre otros.

Recuerda que podemos darle estilos a etiquetas HTML muy específicas indicando dónde se van a encontrar. Por ejemplo: si queremos darle estilos únicamente a la imagen que está dentro del header, podemos usar el selector css header img { ... }.

# 14 Displays en CSS 16/43

Todos los elementos en CSS son cuadrados o rectángulos y aparte de eso, estos elementos tienen un comportamiento que se define a través de la propiedad display. Los display más comunes y usados son: block, inline, inline-block, none, table, flex y grid. Veamos de qué se tratan:

![Display en css](https://static.platzi.com/media/user_upload/Display%20en%20CSS-634bc14a-bdf5-4337-a67d-49fc74f92a60.jpg)

![Display block en css](https://cdn-media-1.freecodecamp.org/images/ChnkgUaWEN6dmtS4EQCG60uqIjZVphsErq91)

![Display flex en css](https://cdn-media-1.freecodecamp.org/images/6WwoIEc45lUHUcFQCmD8GmziiISm2lO64Y1-)

![Flex direction](https://cdn-media-1.freecodecamp.org/images/wEg7wdKEfv9-bqaiB-t9hzOapBPiqZVYNFIh)

![Flex direction2](https://cdn-media-1.freecodecamp.org/images/zYdQGSmhtMyqcAbEUDoEehohC8E-gtgvQx6b)

![justify-content](https://cdn-media-1.freecodecamp.org/images/OBGVr-DdHiQ2y9VOWuhXqXeGnFnyDSBTx7hv)

![align-items](https://cdn-media-1.freecodecamp.org/images/UgsULw0Kk49l-l1wSzeurYNJKCmcA-01oE8a)

![align-items felx direcction](https://cdn-media-1.freecodecamp.org/images/u9tCV-zRt3qpgSyNQt53e-eRz0-HIrsqqOk-)

![align self](https://cdn-media-1.freecodecamp.org/images/HbnMZT330ylw5idocqrjOfp9DrlZt9JrJm9o)


# 15 Funciones de las propiedades CSS más usadas 17/43

**width**: Define el ancho de un elemento. Por ejemplo: width: 20px;.

**height**: Define el alto de un elemento. Por ejemplo: height: 20px;.

**background**: Puede definir el color de fondo o la url de fondo de un elemento. Por ejemplo: background: url(';puppy.png';);.

**background-color**: Define el color de fondo de un elemento. Por ejemplo: background-color: red;.

**color**: Define el color de nuestros textos. 
> Estos colores los podemos escribir de 3 formas en CSS:     Con los nombres de los colores. Por ejemplo: black, red, green.

> Sistema hexadecimal: Donde blanco se define como #FFFFFF y negro como #000000.

> RGB: Donde la R significa Red, G significa Green y B significa Blue; por lo que escribimos rgb(red, green, blue) y cada uno de ellos es un valor de 0 a 255 que describe la intensidad de ese color. Por ejemplo, para denotar el color verde, escribimos: rgb(0, 255, 0). También a estos valores se les puede agregar una opacidad (transparencia) que va de 0 a 1, por ejemplo: rgba(0, 255, 0, 0.5) lo que quiere decir que el color verde lo queremos con una transparencia del 50%.

**border**: Define el tamaño, estilo y color del borde de un elemento. Por ejemplo: border: 2px solid yellow;.

**border-radius**: Define qué tan redondeado quiero mi elemento. Por ejemplo: border-radius: 20px;.

**margin**: Define la margen de un elemento. Por ejemplo: `margin: 2px` (lo que quiere decir que mi elemento tendrá márgenes en todos sus lados de 2px).

Si quiero que mi elemento tenga margen superior de 2px, margen inferior de 4px, margen derecha de 3px y margen izquierda de 5px, lo escribiría de la siguiente forma: `margin: 2px 3px 4px 5px`. El primer valor es la margen superior y siempre va en sentido de las manecillas del reloj.

Si solo quiero que mi elemento tenga una margen a la derecha de 10px, escribiría `margin-right: 10px;`. Y para los demás valores sería `margin-top: 10px;` para la margen superior, `margin-bottom: 10px;` para la margen inferior y `margin-left: 10px;` para la margen izquierda.

**padding**: Define la distancia del borde de un elemento hasta su contenido. Por ejemplo: padding: 2px (lo que quiere decir que mi elemento tendrá un “margen interno” en todos sus lados de 2px).

Si quiero que mi elemento tenga padding superior de 2px, padding inferior de 4px, padding a la derecha de 3px y un padding a la izquierda de 5px, lo escribiría de la siguiente forma: padding: 2px 3px 4px 5px. El primer valor es la padding superior y siempre va en sentido de las manecillas del reloj al igual que con las márgenes.

Si solo quiero que mi elemento tenga un padding a la derecha de 10px, escribiría: `padding-right: 10px;`. Y para los demás valores sería `padding-top: 10px;` para la margen superior, `padding-bottom: 10px;` para la margen inferior y `padding-left: 10px;` para la margen izquierda.

**font-size**: Define el tamaño de la fuente. Por ejemplo: 
>`font-size: 20px;`.

**font-family**: Define la familia tipográfica de la fuente. Por ejemplo: `font-family: 'Roboto', sans-serif;`.



**opacity**: Determina la transparencia del elemento. Tiene valores entre 0 y 1, que pueden verse como un porcentaje. Por ejemplo, si quiero que mi elemento se vea con una transparencia del 50%, escribiría: `opacity: 0.5;`.

**outline**: Un término algo desconocido es el esquema de los elementos HTML. Un esquema es una línea (por defecto, de color azúl) que se dibuja alrededor de los elementos que hace que “se destaquen”.

Lo anterior sucede mucho en elementos como los `<input>`s y los `<button>`s. Si no queremos ver esa línea, lo que hacemos es `outline: none;`. Aunque también podemos decirle que tenga determinado estilo, color, tamaño, entre otras. Por ejemplo:

`outline-style: solid;
outline-color: red;
outline-width: 5px;`

**box-sizing**: Cuando trabajamos con paddings, por ejemplo, veremos que el tamaño de nuestro elemento crece. Es decir, si tengo:

`div {
   background: pink;
   width: 20px;
   height: 20px;
}`

Y luego le agrego un padding de 20px, veré en el navegador que mi div ya no tiene un ancho y un alto de 20px, sino de 40px cada uno. Lo que quiere decir que el padding hizo que creciera mi elemento. Sin embargo, si yo no quiero que el padding afecte los 20px originales, le agrego la propiedad box-sizing para que el tamaño total del elemento incluya el padding también y no se vea afectado por él.

**transition**: Las transiciones CSS le permiten cambiar los valores de las propiedades sin problemas durante una duración determinada. Debemos tener presente que una transición NO es una animación. Una transición va de un punto A a un punto B sin interrupciones o saltos en medio.

Te comparto la siguiente documentación para que puedas visualizar las propiedades y valores que puedes utilizar:

https://www.w3schools.com/css/css3_transitions.asp.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
https://css-tricks.com/almanac/properties/t/transition/
animation: Esta propiedad permite que animemos nuestros elementos.

Te comparto la siguiente documentación para que puedas visualizar las propiedades y valores que puedes utilizar:

https://www.w3schools.com/css/css3_animations.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
https://css-tricks.com/almanac/properties/a/animation/


# 16 Posicionamiento en CSS 18/43

El posicionamiento en CSS es una de las cosas más importantes, pues establece cómo van a estar ubicados nuestros elementos en la pantalla.

En CSS los elementos se posicionan utilizando las propiedades top (superior), bottom (inferior), left (izquierda) y right (derecha), pero sólo funcionarán si la propiedad position está establecida. Esto quiere decir que si quiero que mi elemento div esté completamente a la derecha, debo escribir en mi CSS lo siguiente:

`div { position: absolute: right: 0px; }`

La propiedad position tiene 7 valores diferentes: 
- relative 
- absolute 
- fixed 
- sticky 
- static 
- initial e inherit. 

Veremos de qué se tratan:
![Position en css](https://static.platzi.com/media/user_upload/Posicionamiento%20en%20CSS-6477ec29-d5d2-44d0-b3f5-c2876e0ee739.jpg)

Ejemplos de cadad uno de los valores.

**`position:static`**

![static position](https://blog.froont.com/content/images/2015/01/02-Static-position-FROONT.gif)

**`position:absolute`**

![absolute position](https://blog.froont.com/content/images/2015/01/03-Absolute-position-FROONT.gif)

**`position:relative`**

![relative position](https://blog.froont.com/content/images/2015/01/04-Relative-position-FROONT.gif)

**`position:fixed`**

![fixed position](https://blog.froont.com/content/images/2015/01/05-fixed-position-FROONT.gif)


![resumen](https://chenhuijing.com/assets/images/posts/css-positioning.jpg)

# 17 ¿Qué son y para qué nos sirven las arquitecturas CSS? 19/43

Los objetivos son:
- Predecible: Escribir reglas claras.
- Reutilizable: No escribir codigo redundante.
- Mantenible: Que sea facil de leer y adaptarnos a los estandares.
- Escalable: Que pueda crecer facilmente pero sin afectar el rendimiento.

Buenas practicas
- Establecer reglas para que el equipo se entiendaExplicar la estructura base o dar los fundamentos del proyecto a un nuevo integrante.
- Evitar hojas de estilo muy extensas
- Tener una buena documentación explicando ciertos aspectos del codigo.

# 18 OOCSS, BEM, SMACSS, ITCSS y Atomic Design 20/43

Lecturas recomendadas

- [An Introduction To Object Oriented CSS (OOCSS) — Smashing Magazine](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
- [BEM — Block Element Modifier](http://getbem.com/introduction/)
- [Home - Scalable and Modular Architecture for CSS](http://smacss.com/)
- [ITCSS: Scalable and Maintainable CSS Architecture - Xfive](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)


## 18.1 OOCSS
**CSS orientado a objetos**. Separa el diseño del contenido, así podemos reutilizar nuestro código

```css
// ejemplo, en vez de para cada elemento una clase.
.globalWidth {
	width: 100%;
}
```

## 18.2 BEM
**Block Element Modifier**. Separa los elementos y los modificadores

```css
.header {}  // bloque
.header__button--red {} // block, element, modifier
```

## 18.3 SMACSS

**Scalable and Modular Arquitecture for CSS**. Arquitectura de css escalable y modular. PAra eso se realizan cinco pasos

- Dividir nuestro css en componentes base
- Definir Layout. Elementos que se utilizan solo una vez. ej. Footer, Header
- Definir Modulos. Componentes que se usan mas de una vez
- Definir Estados. Estos estados definen los cambios que existen en nuestros elementos/componentes. ej. Cambio de color cuando hacen hover
- Definir Temas. Separar los temas y sus cambios. Si tuvieras temas

## 18.4 ITCSS
**Inverted Triangle CSS**. Triangulo Invertido de CSS. Lo que nos indica esta metodologia es poder dividir todos nuestros archivos de css en ciertas partes para que no se mezclen.
Triangulo invertido, desde arriba hacia abajo:

- Ajustes
- Herramientas
- Generico
- Elementos
- Objetos
- Componentes
- Utilidades

**Especificidad**: elementos o clases con mayor peso que otros.
Magnitud
Claridad

## 18.5 Atomic Design
Basados en la quimica.
Atomos < Moleculas < Organismos < Templates < Paginas

![Tabla de elementos](https://static.platzi.com/media/user_upload/PeriodicTableofElements-abf6875b-7617-44f4-adc2-bbdcdf190885.jpg)

La eleccion de la metodologia depende del proyecto y del equipo

Anotacion: No es tan buena practica usar !important


# 19 ¿Qué es un componente? Analicemos nuestros diseños 22/43
Un componente es una porción de código que se va a reutilizar para poder implementar en diferentes porciones del proyecto, es decir entre más especifico sea el componente podra ser usado las veces que uno desa y donde sea requerido.

[Lectura recomendada](https://platzi.com/blog/flexbox-vs-css-grid-cual-es-la-diferencia/)

# 20 Estructura con HTML y BEM de un menú desplegable 23/43

BEM significa Modificador de Bloques de Elementos (Block Element Modifier) por sus siglas en inglés. Sugiere una manera estructura de nombrar tus clases, basado en las propiedades del elemento en cuestión. Si alguna vez has visto un nombre de una clase como `header_from-email` eso es precisamente BEM en acción. Cuando utilices la metodología BEM, debes tomar en cuenta que solamente usarás nombres de clases (no IDs). Los nombres de clases te permiten repetir el nombre BEM si es necesario, y crear una estructura de código más consistente (en ambos archivos el HTML y CSS/Saas). Ahora vamos descifrarlo.

## Bloque

El bloque es un contenedor o contexto donde el elemento se encuentra presente. Piensa como si fueran partes estructurales de código más grandes. Puede que tengas un encabezado, pie de página, una barra lateral y un área de contenido principal; cada uno de estos sería considerado como un bloque. Mira la imagen de abajo:

![struct](https://cms-assets.tutsplus.com/uploads/users/51/posts/19403/image/bem-blocks.jpg)

El bloque de elementos forma la raíz de la clase y siempre irá primero. Solo debes saber que una vez que has definido tu bloque, estarás listo para comenzar a nombrar tus elementos.

## Elemento

El elemento es una pieza de un bloque. El boque es el todo y los elementos son las piezas. Cada elemento se escribe luego del bloque conectado por dos barras bajas. Por ejemplo: `.block__element`


Sé que esto puede parecerte extraño pero una vez que comienzas a usarlo te preguntarás cómo es que has escrito CSS sin usar BEM. La doble barra baja te permite visualizar, navegar rápidamente y manipular tu código.

Aquí hay algunos ejemplos de cómo funciona la metodología de elementos:

```css
.header__logo {} 
.header__tagline {} 
.header__searchbar {}
.header__navigation {}
```


Como puedes ver, hay espacio para la creatividad y hacer de esta metodología tuya. En el ejemplo, **"navigation"** puede ser cambiado a **"nav"**, ***"tagline"*** puede cambiarse a ***"tag"*** o ***"tagLine"***. El punto es mantener los nombres simples, claros, y precisos. 

No lo pienses demasiado, y solo porque tus hojas de estilos y html serán estáticos, no quiere decir que tengas que volver a repetir el mismo código. Actualizar el nombre de las clases no debería ser un problema cuando encuentras una mejor semántica que funcione (solo debes tratar de ser consistente y apegarte a ella). Los elementos se convertirán en el centro de los nombres de tus clases, y te ayudarán a entender cómo estructurar tus hojas de estilos y cómo manejar tu diseño.

## Modificadores

Ahora se pone divertido (por si aún no te estabas divirtiendo). Cuando nombras una clase, la intención es ayudar a que ese elemento pueda ser repetido para que no tengas que escribir nuevas clases en otras áreas del sitio si los elementos de estilo son los mismos. Cuando necesitas modificar el estilo de un elemento específico, puedes usar un modificador (¡por supuesto!). Para lograr esto, **añades un doble guión** `--` luego del elemento (o bloque). Aquí tenemos un corto ejemplo:

```css
.block--modifier {}
.block__element--modifier {}
```

Ten cuidado al usar los modificadores, recuerda que se quiere manter todo más simple y no tener que repetir lo mismo o crear clases extra a menos que sea absolutamente necesario. Lo explicaremos con un código usando el encabezado del sitio como nuestro bloque:

```css
.header__navigation {}
.header__navigation--secondary {}
```

Si estás usando una segunda navegación, lo más probable es que el diseño y espaciado no cambien, pero puede que la navegación secundaria tenga un color distinto. Puedes ya sea, duplicar los estilos originales, o mejor aún, usar un pre-procesador. Con Sass, podrías @extender el elemento principal (así el elemento secundario heredará todas las propiedades) y cambiar los estilos apropiados.

```css
.header__navigation { 
background: #008cba; 
    padding: 1rem 0; 
    margin: 2rem 0; 
    text-transform: uppercase; 
    } 
     
.header__navigation--secondary { 
    @extend .header__navigation;
    background: #dfe0e0; 
    }
```

Puede que pienses, "¡pero el nombre de la clase es muy largo!". Yo lo veo así: Los nombres de las clases BEM son específicos, claros, fáciles de leer dentro del html, y comunican claramente para qué existen.

Lo que también me gusta de los nombres de las clases cuando usamos BEM es que solo tienes que usar un nombre de clase por cada etiqueta html. Fíjate cómo funcionaría para la etiqueta "label". 

**Selectores estándares:**

```css
.label .label-default {} 
.label .label-alert {}
```

**vs. selectores BEM:**

```css
.label {}
.label--alert {}
```

Los lenguajes como Sass (específicamente Scss) nos permiten rápidamente tener elementos, compartir los mismos estilos con pequeñas excepciones. El ejemplo de abajo nos evita duplicar estilos, mas bien cambiamos sólo lo necesario. Lo que más me gusta de la metodologéa BEM es que no tienes que combinar clases ambiguas como "panel panel-default col-md-3". Si utilizas un framework como Foundation puedes comenzar a nivelar las diferencias. Pero para un ejemplo simple, pongamos estilo a las etiquetas que acabamos de definir.

```css
.label { 
background: #eee; 
    border-radius: 505; 
    color: #333; 
    font-size: 1rem; 
    } 
     
.label--alert { 
    @extend .label; 
    background: #da4531; 
    color: #fff; 
    }
```
**Conclusión**

Bien, ahí tienes la simplicidad de BEM. Como puedes ver, hay mucho más por explorar. BEM es un sistema en constante evolución que permite traer claridad a tu código y te ayuda a definir y establecer una mejor jerarquía en el desarrollo de la interfaz.

