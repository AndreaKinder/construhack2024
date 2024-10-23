# LoginButton

El componente `LoginButton` es un botón que desencadena el proceso de inicio de sesión cuando se hace clic en él.

## Propiedades

* `username`: El nombre de usuario que se utilizará para el inicio de sesión.
* `password`: La contraseña que se utilizará para el inicio de sesión.
* `onPress`: La función que se llamará cuando se haga clic en el botón.

## Funcionalidad

Cuando se hace clic en el botón, se llama a la función de inicio de sesión con el `username` y `password` proporcionados. Si el inicio de sesión es exitoso, se llama a la función de éxito, de lo contrario se llama a la función de error.

## Descripción

El componente `LoginButton` es un elemento de la interfaz de usuario que permite a los usuarios iniciar sesión en la aplicación. Se puede personalizar para adaptarse a las necesidades específicas de la aplicación.

## Uso

El componente `LoginButton` se puede utilizar en cualquier parte de la aplicación donde se requiera un botón de inicio de sesión. Se puede renderizar en un componente padre y pasar las propiedades necesarias para su funcionamiento.

## Notas

* El componente `LoginButton` es un elemento fundamental de la autenticación en la aplicación.
* Se debe asegurar de que el componente tenga acceso a las funciones de inicio de sesión y autenticación para funcionar correctamente.