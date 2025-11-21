Peticiones HTTP:
<img width="1918" height="244" alt="image" src="https://github.com/user-attachments/assets/f94c022e-56b9-45c4-acf0-83249057331d" />



Tabla de Resultados de Peticiones HTTP

| Método | URL                                                         | Código de Estado     | Tiempo de Respuesta                 | Observaciones CORS                                |
| ------ | ----------------------------------------------------------- | -------------------- | ----------------------------------- | ------------------------------------------------- |
| GET    | `https://jsonplaceholder.typicode.com/posts/1`              | **200 OK**           | Visible en Network (primer request) | access-control-allow-origin: null (archivo local) | 
| GET    | `https://jsonplaceholder.typicode.com/posts/1` *(repetido)* | **304 Not Modified** | Menor tiempo (desde caché)          | access-control-allow-origin: null (archivo local) |
| GET    | `https://jsonplaceholder.typicode.com/posts/999999`         | **404 Not Found**    | Visible en Network                  | access-control-allow-origin: null (archivo local) |

304 aparece cuando el navegador usa la copia de caché y no descarga de nuevo el recurso.
404 indica que el recurso solicitado no existe, aunque CORS sí lo permita.

Observación CORS:
En algunas peticiones desde archivos locales (file://), el servidor responde con: 
access-control-allow-origin: null
Esto ocurre porque el navegador envía el origen como null y la respuesta no está permitida explícitamente. No es un error de código, es el comportamiento esperado al ejecutar peticiones desde archivos locales sin servidor.
