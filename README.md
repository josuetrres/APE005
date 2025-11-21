Peticiones HTTP:
<img width="1918" height="244" alt="image" src="https://github.com/user-attachments/assets/f94c022e-56b9-45c4-acf0-83249057331d" />



Tabla de Resultados de Peticiones HTTP

| Método | URL                                                         | Código de Estado     | Tiempo de Respuesta                 | Observaciones CORS                                |
| ------ | ----------------------------------------------------------- | -------------------- | ----------------------------------- | ------------------------------------------------- |
| GET    | `https://jsonplaceholder.typicode.com/posts/1`              | **200 OK**           | Visible en Network (primer request) | CORS permitido (`Access-Control-Allow-Origin: *`) |
| GET    | `https://jsonplaceholder.typicode.com/posts/1` *(repetido)* | **304 Not Modified** | Menor tiempo (desde caché)          | Respuesta servida desde caché, CORS permitido     |
| GET    | `https://jsonplaceholder.typicode.com/posts/999999`         | **404 Not Found**    | Visible en Network                  | CORS permitido, pero el recurso no existe         |

304 aparece cuando el navegador usa la copia de caché y no descarga de nuevo el recurso.

404 indica que el recurso solicitado no existe, aunque CORS sí lo permita.

JSONPlaceholder permite CORS para métodos GET y POST.

El encabezado strict-origin-when-cross-origin indica una política de referencia segura entre sitios.
