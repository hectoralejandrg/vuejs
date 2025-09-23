// quasar-user-options.js
import { Notify, Loading } from 'quasar';  // Ejemplos de plugins

export default {
  config: {
    // Configuración global (opcional)
    notify: {},  // Opciones para notificaciones
  },
  plugins: {
    Notify,      // Habilita el plugin Notify
    Loading,     // Habilita el plugin Loading
    // Agrega más plugins según necesites, ej: Dialog, AppFullscreen
  },
  directives: {
    // Directivas personalizadas (opcional)
  },
  // Temas y CSS
  cssTheme: 'light',  // O 'dark'
  preFetchIcons: [
    'menu',  // Precarga iconos específicos
  ],
  // Otras opciones...
};