# 🔨 Juego del Topo (Whack-a-Mole)

Un divertido juego web donde debes golpear a los topos que aparecen aleatoriamente para conseguir la mayor puntuación posible en 20 segundos.

## 🎮 Descripción del Juego

El objetivo es simple: ¡golpea tantos topos como puedas antes de que se acabe el tiempo! Los topos aparecen aleatoriamente en 9 agujeros diferentes y solo tienes 1 segundo para golpear cada uno antes de que desaparezca.

## ✨ Características

- **Tiempo limitado**: 20 segundos de juego intenso
- **9 agujeros**: Los topos aparecen aleatoriamente en diferentes posiciones
- **Sistema de puntuación**: Cada topo golpeado suma 1 punto
- **Efectos de sonido**: Sonido de golpe y música de fondo
- **Animaciones**: Los topos aparecen y desaparecen con transiciones suaves
- **Interfaz intuitiva**: Botones de inicio y reinicio del juego
- **Feedback visual**: Texto "Wak" aparece al golpear un topo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del juego
- **CSS3**: Estilos y animaciones
- **JavaScript (ES6)**: Lógica del juego, eventos y temporizadores
- **Web Audio API**: Reproducción de sonidos

## 📁 Estructura del Proyecto

```
Juego-topo/
├── index.html          # Página principal del juego
├── script.js           # Lógica del juego en JavaScript
├── README.md           # Documentación del proyecto
└── src/
    ├── img/
    │   ├── bush.png     # Imagen del arbusto
    │   ├── mole.png     # Imagen del topo
    │   └── favicom.png  # Icono del sitio
    ├── sound/
    │   ├── whack.mp3    # Sonido de golpe
    │   └── music.mp3    # Música de fondo
    └── style/
        └── main.css     # Estilos del juego
```

## 🚀 Cómo Jugar

1. **Abrir el juego**: Abre `index.html` en tu navegador web
2. **Iniciar**: Haz clic en el botón "Iniciar Juego"
3. **Golpear topos**: Haz clic rápidamente en los topos cuando aparezcan
4. **Objetivo**: Consigue la mayor puntuación posible en 20 segundos
5. **Reiniciar**: Al terminar, haz clic en "Reiniciar Juego" para jugar otra vez

## 💻 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/juego-topo.git
   ```

2. **Navegar al directorio**:
   ```bash
   cd juego-topo
   ```

3. **Abrir el juego**:
   - Abre `index.html` directamente en tu navegador
   - O usa un servidor local como Live Server en VS Code

## 🎯 Funcionalidades Técnicas

### JavaScript
- **Event Listeners**: Manejo de clicks en botones y topos
- **Temporizadores**: `setInterval` para cuenta regresiva y aparición de topos
- **Manipulación del DOM**: Selección y modificación de elementos HTML
- **Audio**: Reproducción de música de fondo y efectos de sonido
- **Animaciones**: Clases CSS para mostrar/ocultar topos

### Lógica del Juego
- **Aparición aleatoria**: Los topos aparecen en posiciones aleatorias cada 600ms
- **Sistema de puntuación**: Incremento automático al golpear topos
- **Control de tiempo**: Cuenta regresiva de 20 segundos
- **Estados del juego**: Inicio, jugando, y fin del juego

## 🎨 Características de UX/UI

- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Feedback inmediato**: Sonidos y animaciones al interactuar
- **Controles intuitivos**: Botones claros para iniciar y reiniciar
- **Información en tiempo real**: Contador de tiempo y puntuación visible

## 🔧 Posibles Mejoras Futuras

- [ ] Diferentes niveles de dificultad
- [ ] Sistema de récords personales
- [ ] Efectos visuales adicionales
- [ ] Modo multijugador
- [ ] Topos con diferentes valores de puntos
- [ ] Power-ups especiales

## 👨‍💻 Autor

**Fernando** - Estudiante de programación

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

---

¡Disfruta jugando y no olvides compartir tu mejor puntuación! 🏆