## Prueba tecnica

[![Maintainability](https://api.codeclimate.com/v1/badges/9dd7a969ba3c90763794/maintainability)](https://codeclimate.com/github/TAndrei17/prueba_tecnica/maintainability)

### Los principales objetivos
- React Native;
- Expo;
- Redux Toolkit;
- Parsing JSON & XML data.

### Tarea

La prueba consiste en la creación de una mini-aplicación móvil para escuchar
podcasts musicales.

La aplicación tendrá únicamente dos páginas:
1. Pagina principal.
2. Página con detalles de un podcast.

El diseño de las páginas se permite hacer por cuenta propia.
La aplicación deberá tener una maquina de estados (Redux) que tendrá que administrar la carga de datos. La aplicación deberá ejecutarse solo con los propios métodos de Expo y en cualquier entorno el que tiene instalado Expo. La navigación de toda la aplicación tiene que ser con React Navigation. 

(Adicional) 

- Una vez obtenido el listado desde el servicio externo por primera vez se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado más de un día desde la última vez que se solicitó.

- Una vez obtenido el detalle de un podcast desde el servicio externo por primera vez, se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado un día desde la última vez que se solicitó.

Recursos:

La URL para obtener el listado de los 100 podcasts más populares es la
siguiente:

https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json

La URL para obtener el detalle de un podcast es la siguiente: 
https://itunes.apple.com/lookup?id={podcastId}
---

## Resultado

### La pagina una
![Podcasts_list](/images/Podcasts_list.JPG)

### La pagina una. La búsqeda
![Podcasts_list](/images/Podcasts_search.JPG)

### La pagina dos
![Podcasts_list](/images/Podcast_episodes.JPG)
