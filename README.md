# SPA (Todo List)

- El término "single-page application" (o SPA) usualmente describe aplicaciones que fueron contruidas para la web.
- La diferencia más notable entre un website y un SPA es la cantidad reducida de refrescar la página
- Los SPAs tienen un mayor uso de AJAX - una manera de comunicarnos con servidores back-end sin hacer un refrescado completo de la página - para traer datos que use nuestra aplicación.

## Componentes de un SPA

- ROUTING
- TEMPLATES
- MANEJO DE EVENTOS 
- MVC (Modelo(datos), vistas, controlador)


## Implementación - Stack utilizado (MENJ)

- Node.js

- MongoDb  
[Install MongoDB - Windows](https://www.mongodb.com/download-center?jmp=tutorials&_ga=2.224143963.152112080.1519591343-922572348.1519591343#community)
[Install MongoDB - Video Youtube](https://www.youtube.com/watch?v=Zmq8LcPaJjo&t=9s)
[Install MongoDB - Video Youtube](https://www.youtube.com/watch?v=lgrYE77pf1s&t=511s)

- Express
[Express - Hello Wordl](http://expressjs.com/en/starter/hello-world.html)
[Express - Basic Routing](http://expressjs.com/en/starter/basic-routing.html)
[Express - Static Files](http://expressjs.com/en/starter/static-files.html)

- Jquery

## Implementaciones sin Framework (SPA - TodoList)

 Esto es [SPA -Todo con VanillaJs](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs)
 
 
 Esto es [SPA -Todo con Jquery](https://github.com/tastejs/todomvc/tree/gh-pages/examples/jquery)

 Te recomiendo que compares las implementaciones!!!
 A que conclusiones llegas?

### Ajax

Esto es [Enfoque Ajax](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)

Es un enfoque para el desarrollo web que abarca las siguientes tecnologias web.

Todas estas piezas están aquí para que nosotras podamos desarrollar aplicaciones web que se puedan actualizar sin estar haciendo reload de la pagina.

- HTML (Ya lo conoces)
- JavaScript (Ya lo conoces)
- DOM (Ya lo conoces)
- CSS (Ya lo conoces)
- XMLHTTP Request (Implementado con jQuery)


## Comenzar con el proyecto

Para inicializar el proyecto debes tener node instalado, para correrlo en un servidor local, encontrarás un archivo `package.json`, donde se encuentran las dependencias y configuración. 
Para primero deberás instalar las dependecias con el comando.

```
npm install
```

Ahora debes instalar nodemon con el siguiente comando

```
npm install nodemon -g --save
```

Luego levantas el servidor a través de este comando

```
nodemon index.js
```

## Mongo DB

Como base de datos se tiene Mongo Db
Para que funciones debes levantar el sistema gestor de base de datos, una vez instalado, levantas la linea de comandos (Simbolo del sistema) ejecutas el comando

```
mongod
```

Luego enciendes la base de datos, en otra de (Simbolo de sistema) ejecutando el comando

```
mongo
```

Ojo las dos ventanas deben estar activas!!!

