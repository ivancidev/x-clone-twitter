# x-clone-twitter 👨‍💻

[![Captura-de-pantalla-2025-01-07-215408.png](https://i.postimg.cc/htS32gt2/Captura-de-pantalla-2025-01-07-215408.png)](https://postimg.cc/PPR4qgZD)

Este es un proyecto de clon de Twitter desarrollado con React + TS y Vite. Utiliza varias bibliotecas y herramientas modernas como Chakra UI, Material UI, React Router, y Swiper para ofrecer una experiencia de usuario fluida y moderna. El proyecto permite interactuar con la publicacion de post, simulando la experiencia de Twitter.

## Screenshots 📷
#### Home  

[![Captura-de-pantalla-2025-01-07-214810.png](https://i.postimg.cc/zB9c7gyh/Captura-de-pantalla-2025-01-07-214810.png)](https://postimg.cc/62fc5TL6)

#### Post with emojis

[![Captura-de-pantalla-2025-01-07-214955.png](https://i.postimg.cc/sx70NgWN/Captura-de-pantalla-2025-01-07-214955.png)](https://postimg.cc/8fkHFDtR)

#### Post with images and gifs

[![Captura-de-pantalla-2025-01-07-215142.png](https://i.postimg.cc/05w3Qc40/Captura-de-pantalla-2025-01-07-215142.png)](https://postimg.cc/7bqXtMw5)

[![Captura-de-pantalla-2025-01-07-215315.png](https://i.postimg.cc/65VmVTt7/Captura-de-pantalla-2025-01-07-215315.png)](https://postimg.cc/Tpw0fdyG)

[![Captura-de-pantalla-2025-01-07-215600.png](https://i.postimg.cc/43y2T5tt/Captura-de-pantalla-2025-01-07-215600.png)](https://postimg.cc/cKqBRfF4)

# Funcionalidad de la Web

## Descripción

La web permite a los usuarios publicar posts, agregar emojis, buscar y agregar gifs, y cargar imágenes. Además, ofrece una interfaz para crear encuestas que los usuarios pueden responder. Esta aplicación está construida con un backend en Node.js y Express utilizando TypeScript, y se conecta a una base de datos MongoDB para almacenar los datos.

## Funcionalidades 👨‍💻

### Publicación de Posts 

El usuario puede escribir un post en un campo de texto, y el sistema permite agregar contenido adicional a ese post como emojis, gifs e imágenes. La publicación se guarda en la base de datos MongoDB y se muestra en el feed de publicaciones de la aplicación.

- **Escribir el post**: El usuario puede escribir cualquier contenido que desee compartir.
- **Seleccionar Emojis**: El sistema permite seleccionar emojis para agregar al post. Se utiliza la librería [React Emoji Picker](https://www.npmjs.com/package/emoji-picker-react) para la selección de emojis.
- **Buscar y Agregar GIFs**: El usuario puede buscar y agregar gifs a su publicación. Esto se logra utilizando la API de [Giphy](https://developers.giphy.com/) junto con la librería [Giphy JS Fetch API](https://www.npmjs.com/package/@giphy/js-fetch-api).
- **Agregar Imágenes**: El usuario puede cargar imágenes desde su dispositivo o mediante enlaces externos.

### UI de Encuestas

Los usuarios pueden crear encuestas dentro de sus publicaciones. Las encuestas permiten añadir opciones de respuesta aun esta como interfaz no tiene funcionalidad. 

### Backend

El backend está construido con Node.js y Express utilizando TypeScript. El servidor maneja las solicitudes de la web, interactúa con la base de datos MongoDB y maneja la lógica de las publicaciones, emojis, gifs, imágenes y encuestas. Puedes acceder al backend en el siguiente enlace: [Backend API](https://x-clone-backend-a633.onrender.com/api).

### Flujo de Trabajo

1. **El usuario escribe un post**: Al iniciar sesión, el usuario accede a la interfaz de publicación.
2. **Selecciona emojis**: El usuario puede hacer clic en un ícono de emoji que abre el selector de emojis.
3. **Buscar gifs**: El usuario tiene la opción de buscar gifs usando la API de Giphy. Al seleccionar un gif, se agrega automáticamente al post.
4. **Agregar imágenes**: El usuario puede adjuntar imágenes desde su computadora o pegar un enlace directo a una imagen externa.
5. **Crear encuesta**: Si el usuario desea agregar una encuesta, puede crear varias opciones de respuesta.
6. **Publicar**: El post con emojis, gifs, imágenes y encuesta (si es el caso) se guarda en la base de datos MongoDB y se muestra en el feed de publicaciones.

### Backend: Endpoints

- **POST /create-publication**: Crea una nueva publicación con texto, emojis, gifs, imágenes y encuestas.
- **GET /publications**: Obtiene todas las publicaciones almacenadas en la base de datos.

## Variables de Entorno

Para que la aplicación funcione correctamente, necesitarás configurar las siguientes variables de entorno en tu archivo `.env` en la raíz del proyecto.

```env
VITE_GIPHY_API_KEY='your-api-key'
VITE_API_URL='api-url-del-backend'
VITE_CLOUDINARY_URL='your-cloudinary-url'
VITE_CLOUDINARY_UPLOAD_PRESET='your-upload-preset'
```


## Instalación

1. Clona el repositorio:

   ```
   git clone https://github.com/ivancidev/x-clone-twitter.git
   ```

2. Instala las dependencias:
    ``` 
    cd x-clone-twitter
    npm install
    ```

3. Ejecutar:
    ```
    npm run dev
    ```
