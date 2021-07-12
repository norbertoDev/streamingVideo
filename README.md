# Portafolio de un clone de servicio streaming de video.

## Inicialicamos el proyecto

Para inicializar este proyecto ponemos en curso un nuevo parametro que es --template que nos genera una plantilla redux en nuestra aplicacion react.

` npx create-react-app [project name] --template redux `

Generamos un proceso de limpieza y reestructuracion del projecto a nuestro gusto.

## 1. App.js. generamos el layout inicial.

- creamos las rutas.
- Renderizamos Login o el resto del app condicionado a la existencia de una sesion.

## Estilos.

- Utilizamos userStyles para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes.

## Creamos las carpetas de componentes.

Las carpetas se van a dividir en componentes y pages. para diferenciarlos en el diagrama de flujo aquellos slots de fondo azul son
componentes que además son paginas y los recuadros marrones son solo componentes que no generan ninguna pagina por si mismo.

## Creamos los estilos de los componentes.

se crea el patron de diseño de los userStyles en todos los componentes tanto para las paginas como los componentes.

## 1. Empezamos a trabajar en el componente header.

hemos importados los logos de la compañia y el avatar. ademas el Header esta compuesto por una AppBar la cual tiene las propieadades de stickybar para que cuando realicemos la scrollbar permanezca en la parte superior de la ventana. además hemos añadidos estilos y generados uno propio de la AppBar el cual por medios de hooks controlamos el estado de la ventana, puesto que cuando realizamos el scroll bajo la barra debe cambiar su fondo de negro a trasparente.

## 2. Continuamos con la clase Banner.

El Banner está compuesto por un div root al que le añadimos como estilos del Material UI una imagen traida a priori de un directorio local hasta la conexión con la API. a parte dentro de la imagen de fondo, el div esta compuesto por dos Typography (que es un  componente de material UI) que contiene el titulo de la pelicula/serie mas una breve sinopsis de la misma. el estilo de la descripcion trataremos con un truncate para que si la sinopsis supera un tamaño de mas de n caracteres trunque la descripcion. a parte tenemos dos botones, un Play y un my list. el baner ademas dispone de un fade bottom que nos sirve para ir oscureciendo la imagen conforme baja el componente.

## 3. Continuamos con el login.

Para el container del login trabajaremos con los styled component, que es un modulo de react que nos permite personalizar los componentes a parte mediante codigo css e importarlo en nuestro proyecto a nuestro gusto.

El Login esta compuesto por un logo en la parte superior izquierda de la pantalla y por un boton customizado a la derecha para iniciar la sesion.







## Dependencies.

    - "@material-ui/core": "^4.12.1",
    - "@reduxjs/toolkit": "^1.6.0",
    - "@testing-library/jest-dom": "^4.2.4",
    - "@testing-library/react": "^9.5.0",
    - "@testing-library/user-event": "^7.2.1",
    - "axios": "^0.21.1",
    - "firebase": "^8.7.1",
    - "react": "^17.0.2",
    - "react-dom": "^17.0.2",
    - "react-redux": "^7.2.4",
    - "react-scripts": "4.0.3",
    - "react-uuid": "^1.0.2",
    - "styled-components": "^5.3.0"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
