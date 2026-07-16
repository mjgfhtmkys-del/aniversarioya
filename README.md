# 💕 Nuestro Aniversario - Aitor & Cristina

Una página web interactiva y romántica creada para celebrar **1 año de amor** juntos.

## 🌟 Características

✨ **Pantalla de Bienvenida Animada**
- Corazón palpitante
- Estrellas y corazones flotantes
- Transición fluida

🗺️ **Timeline Interactivo**
- 5 actividades desbloqueables con scroll:
  - 6:20 PM 🏛️ **El Carmen** en Murcia
  - 6:40 PM 🐠 **Acuario de la UMU**
  - 7:30 PM 🚣 **Barcas en el Río Segura**
  - 8:00 PM 🚶 **Paseo Romántico**
  - 9:30 PM 🍽️ **Cena Especial**

💌 **Carta Interactiva**
- Sobre que se abre como en 3D
- Mensaje personalizado
- Animación elegante

🎉 **Celebración Final**
- Confeti animado
- Efectos visuales especiales
- Música de fondo opcional

## 🚀 Cómo Usar

1. **Abre el archivo `index.html` en tu navegador**
   ```bash
   open index.html
   ```

2. **O sube a un servidor web:**
   - GitHub Pages
   - Vercel
   - Netlify
   - Tu servidor personal

## 📱 Responsive Design

✅ Funciona en:
- Desktop (1920x1080, 1366x768, etc.)
- Tablet (iPad, etc.)
- Mobile (iPhone, Android, etc.)

## 🎨 Personalización

Puedes modificar:

### Colores (en `styles.css`):
```css
:root {
    --primary-color: #ff1493;      /* Rosa fuerte */
    --secondary-color: #ff69b4;    /* Rosa suave */
    --dark-bg: #0a0e27;            /* Fondo oscuro */
    --accent-gold: #ffd700;        /* Dorado */
}
```

### Texto de la carta (en `index.html`):
```html
<div class="letter-body">
    <!-- Edita aquí tu mensaje -->
</div>
```

### Horarios y lugares:
Edita el HTML en la sección `#timeline`

## 📂 Estructura de Archivos

```
aniversarioya/
├── index.html       # Estructura HTML
├── styles.css       # Estilos y animaciones
├── script.js        # Lógica interactiva
└── README.md        # Este archivo
```

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Animaciones fluidas y efectos
- **JavaScript Vanilla** - Interactividad sin dependencias

## 🌐 Deploy Recomendado

### GitHub Pages (Gratis)
1. Los archivos ya están en GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main`
4. ¡Listo! Tu web estará en: `https://mjgfhtmkys-del.github.io/aniversarioya`

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
Arrastra la carpeta del proyecto a Netlify

## 🎵 Opcional: Agregar Música

Para agregar música de fondo, agrega esto en `index.html`:

```html
<audio id="bgMusic" autoplay loop>
    <source src="tu-cancion.mp3" type="audio/mpeg">
</audio>
```

## 🔧 Troubleshooting

**Las animaciones no funcionan:**
- Asegúrate de que todos los archivos (HTML, CSS, JS) estén en la misma carpeta
- Actualiza la página (Ctrl+F5)

**Los emojis no se ven:**
- Usa un navegador moderno (Chrome, Firefox, Safari, Edge)

**Problemas en Mobile:**
- Asegúrate de que `viewport` está en el `<head>` ✓ (ya incluido)

## 📧 Contacto

Hecho con ❤️ por Aitor para Cristina

**¡Feliz Aniversario! 🎉💕**

---

## 📝 Historial de Cambios

### v1.0 (15/07/2026)
- ✅ Pantalla de bienvenida
- ✅ Timeline interactivo
- ✅ Carta animada
- ✅ Confeti
- ✅ Responsive design

---

**Espero estar contigo hasta la muerte, y si me muero, quererte aún más en el más allá.** 🤍🫶🏾

*Aitor*