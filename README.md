# Actividad 2 - 22011423
Williams Adolfo Vega Montenegro
Actividad 2 - Curso "Desarrollo de Aplicaciones Web - Sección A"

# Aplicación de Lista de Tareas y Metas Personales

Esta es una aplicación web diseñada para llevar el control de tareas y metas personales. Proporciona un espacio donde puedes registrar tus objetivos y las tareas necesarias para alcanzarlos.

## Instrucciones de Instalación

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

### Prerrequisitos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### Pasos

1. **Clona el Repositorio**: Abre una terminal y ejecuta el siguiente comando para clonar este repositorio en tu máquina:
   ```bash
   git clone https://github.com/Wvega1697/proyecto-22011423.git
   ```

2. **Navega al Directorio del Proyecto**: Accede a la carpeta recién creada:
   ```bash
   cd proyecto-22011423
   ```

3. **Instala las Dependencias**: Usa npm para instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

## Ejecución de la Aplicación

Una vez que hayas instalado las dependencias, puedes iniciar la aplicación con el siguiente comando:

```bash
npm start
```

Este comando inicia un servidor de desarrollo y abre la aplicación en tu navegador predeterminado. Si no se abre automáticamente, puedes acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Uso

Una vez que la aplicación esté en funcionamiento, puedes empezar a agregar tus metas y tareas personales. Utiliza los campos proporcionados para ingresar el nombre, la descripción y la fecha límite de tus metas, y luego presiona el botón "Add Goal" para registrarlas.

Las tareas asociadas a cada meta se mostrarán como tarjetas en el lado derecho de la pantalla. Puedes marcar una tarea como completada presionando el botón "Complete" correspondiente.

## Estructura de Archivos

El proyecto sigue la siguiente estructura de archivos:

```
proyecto-22011423/
├── public/
├── src/
│   ├── Components/
│   │   ├── Menu/
│   │   │   ├── Menu.js
│   │   │   ├── Menu.scss
│   │   ├── ItemForm/
│   │   │   ├── ItemForm.js
│   │   │   ├── ItemForm.scss
│   │   ├── ItemList/
│   │   │   ├── ItemList.js
│   │   │   ├── ItemList.scss
│   │   ├── Item/
│   │   │   ├── Item.js
│   │   │   ├── Item.scss
│   │   ├── AddButton/
│   │   │   ├── AddButton.js
│   │   │   ├── AddButton.scss
│   ├── reducers/
│   │   ├── alertSlice.js
│   │   ├── goalsSlice.js
│   │   ├── tasksSlice.js
│   │   ├── typeSlice.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
```

- **public/**: Contiene archivos estáticos como el índice HTML y los recursos multimedia.
- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Contiene los componentes de React utilizados en la aplicación.
  - **reducers/**: Contiene los componentes de Redux utilizados en la aplicación.
  - **App.js**: El punto de entrada principal de la aplicación.
  - **App.css**: Archivo de estilos CSS para la aplicación.
  - **index.js**: Archivo de inicio de la aplicación React.

## Imagenes
## Actividad 2

![image](https://github.com/Wvega1697/proyecto-22011423/assets/20270532/0b51bb8f-2bec-4d23-a574-c88db2cebc22)

![image](https://github.com/Wvega1697/proyecto-22011423/assets/20270532/777c6b70-87cd-4a3a-b5f3-f4a9824f835a)

![image](https://github.com/Wvega1697/proyecto-22011423/assets/20270532/c4318834-d1ac-4168-839d-d9c2ec325661)

![image](https://github.com/Wvega1697/proyecto-22011423/assets/20270532/7feda2a3-97b8-484a-b9b3-4f67bccb6579)

![image](https://github.com/Wvega1697/proyecto-22011423/assets/20270532/0e8a748b-d0d0-4683-a26f-e1dbc86c97f2)

## Actividad 1

![image](https://github.com/Wvega1697/actividad1-22011423/assets/20270532/b4eea702-2839-43b1-9f9e-7647b7ea3177)

![image](https://github.com/Wvega1697/actividad1-22011423/assets/20270532/d972d678-6805-40f8-90e2-57bd6747fdfa)

![image](https://github.com/Wvega1697/actividad1-22011423/assets/20270532/9ccdc2d9-b75e-487a-b033-4af766b0fd3d)
