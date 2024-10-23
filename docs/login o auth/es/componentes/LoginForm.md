 # LoginForm

El componente `LoginForm` es un formulario que permite a los usuarios ingresar su nombre de usuario y contraseña para iniciar sesión en la aplicación.

## Propiedades

* `username`: El nombre de usuario que se utilizará para el inicio de sesión.
* `password`: La contraseña que se utilizará para el inicio de sesión.

## Componentes

* `TextInputUsername`: Un campo de entrada para el nombre de usuario.
* `TextInputPassword`: Un campo de entrada para la contraseña.
* `LoginButton`: Un botón que desencadena el proceso de inicio de sesión.

## Scripts

* `loginScript`: Un script que se encarga de la lógica de inicio de sesión.
* `onLoginFunctions`: Un script que se encarga de las funciones de éxito y error del inicio de sesión.

## Funcionalidad

El componente `LoginForm` se encarga de renderizar los campos de entrada para el nombre de usuario y la contraseña, así como el botón de inicio de sesión. Cuando se hace clic en el botón, se llama a la función de inicio de sesión con el nombre de usuario y la contraseña proporcionados. Si el inicio de sesión es exitoso, se llama a la función de éxito, de lo contrario se llama a la función de error.

## Descripción

El componente `LoginForm` es un elemento de la interfaz de usuario que permite a los usuarios iniciar sesión en la aplicación. Se puede personalizar para adaptarse a las necesidades específicas de la aplicación.

## Uso

El componente `LoginForm` se puede utilizar en cualquier parte de la aplicación donde se requiera un formulario de inicio de sesión. Se puede renderizar en un componente padre y pasar las propiedades necesarias para su funcionamiento.

## Notas

* El componente `LoginForm` es un elemento fundamental de la autenticación en la aplicación.
* Se debe asegurar de que el componente tenga acceso a las funciones de inicio de sesión y autenticación para funcionar correctamente.