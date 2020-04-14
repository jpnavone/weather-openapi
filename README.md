# API Clima

##### Pre-requisitos: tener instalado [Node.js](https://nodejs.org/en/)

## Instalación 

Abrir la consola, ubicarse en la raiz del proyecto y ejecutar el comando:

```
$ npm install 
```

Deberá configurar sus API-KEY de los servicios utilizados (ipapi.com y openweathermap.org). 
Para ello hay que setear las variables:


```
$ set API_KEY_IPAPI=your_ipapi_key
$ set API_KEY_OPENW=your_openweathermap_key
```

Listo!

## Empezando 

1. Para correr la aplicacion, en el mismo directorio ejecutar el comando:

```
$ node app 
```

2. Luego abrir el navegador en: http://localhost:8080/  (puede definir otro puerto seteando la variable global PORT).

3. Por defecto se mostrará el clima de la ciudad actual y las próximas horas.

4. Luego podrá buscar el clima de hasta 5 ciudades.


## Tests 

1. En la consola, ubicarse en la raiz del proyecto y ejecutar el comando:

```
$ npm test api/v1/tests/testWeather.js
```