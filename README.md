# BarPos frontend

Aplicación React con Vite. Requiere Node.js 22.13+ (rama 22), 24.x o 26+.

## Desarrollo

Instala con `npm ci` y ejecuta `npm start` (o `npm run dev`).
El servidor utiliza http://localhost:3000.

## Validación

- `npm run lint`: analiza el código con ESLint.
- `npm test`: ejecuta las pruebas de rutas y navegación con Vitest.
- `npm run test:watch`: pruebas en modo continuo.
- `npm run build`: compila en `build/` por defecto.
- `npm audit`: revisa las dependencias.
- `npm run preview`: sirve el build para revisión local; no es un servidor de producción.

## Despliegue y variables

Publica la carpeta de salida y configura el hosting para servir `index.html` cuando se soliciten
rutas de la aplicación (`/pedidos`, `/caja`, `/admin`), permitiendo recargas y enlaces directos.

Puedes copiar `.env.example` a `.env` y establecer `BUILD_PATH` para cambiar la carpeta
de salida. Se respeta la configuración local existente, incluido un destino externo
como `../frontend`. Usa una carpeta exclusiva de archivos generados: Vite puede limpiar
su contenido al compilar dentro del proyecto. Por seguridad no vacía automáticamente
carpetas externas. Si cambias la carpeta, agrégala también al `.gitignore` correspondiente.

Las variables del navegador usan el prefijo `VITE_` y se consultan mediante
`import.meta.env.VITE_NOMBRE`. Son públicas: no incluyas secretos.
`BUILD_PATH` solo se utiliza en la configuración de compilación.

## Migración desde Create React App

- `index.html` está en la raíz y carga `src/index.jsx`.
- Los archivos con JSX utilizan la extensión `.jsx`.
- Vite sustituye `react-scripts`; Vitest sustituye Jest; ESLint tiene configuración propia.
- Se conservan las versiones declaradas de React, React Router y React Icons.
- El build utiliza el objetivo de navegadores modernos de Vite; no utiliza la
  consulta Browserslist anterior. Para navegadores antiguos configura un objetivo
  de compilación y los polyfills correspondientes.

Documentación: [Vite](https://vite.dev/guide/) y [Vitest](https://vitest.dev/guide/).
