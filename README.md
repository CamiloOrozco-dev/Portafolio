# Portafolio — Juan Camilo Zapata Orozco

Sitio estático profesional (HTML5 + CSS3 + Vanilla JavaScript, sin frameworks ni dependencias de compilación) publicado en **GitHub Pages**:
👉 **[https://camiloorozco-dev.github.io/Portafolio/](https://camiloorozco-dev.github.io/Portafolio/)**

## Características

- **Selector Modo Oscuro / Modo Día:** Con persistencia en `localStorage` y detección automática de preferencia de sistema (`prefers-color-scheme`).
- **Soporte Bilingüe (ES / EN):** Alternancia instantánea de idioma sin recargar página.
- **Tarjeta Interactiva de Código:** Previsualización dinámica de sintaxis en `engineer.py`.
- **Efecto de Escritura & Animaciones:** Respetando `prefers-reduced-motion` para máxima accesibilidad.
- **Diseño Responsive:** Optimizado para escritorio, tablets y dispositivos móviles.
- **Acceso Directo a CVs:** Descarga de currículum optimizado para ATS en español e inglés.

## Estructura del Proyecto

```
portfolio/
├── index.html      # Estructura semántica, accesibilidad y contenidos
├── styles.css      # Sistema de diseño, variables CSS de tema (Dark/Light) y media queries
├── script.js       # Lógica de temas, traducciones ES/EN, animaciones y menú interactivo
└── assets/
    ├── CV_Juan_Camilo_Zapata_ES.pdf   # CV profesional en español
    └── CV_Juan_Camilo_Zapata_EN.pdf   # CV profesional en inglés
```

## Verlo en local

```bash
cd portfolio
python3 -m http.server 8000
# Abrir http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea un repositorio público llamado **`<tu-usuario>.github.io`** (p. ej. `Camilo-Orozco.github.io`).
2. Sube el contenido de esta carpeta a la raíz del repositorio:

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "feat: portafolio personal"
   git branch -M main
   git remote add origin git@github.com:<tu-usuario>/<tu-usuario>.github.io.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
4. En 1–2 minutos estará disponible en `https://<tu-usuario>.github.io`.

## Personalizar

- **Textos en español:** edítalos directamente en `index.html`.
- **Textos en inglés:** edítalos en el objeto `EN` de `script.js` (misma clave `data-i18n`).
- **Colores:** variables `--accent`, `--accent-2` y `--gradient` al inicio de `styles.css`.
- **CV:** reemplaza los PDF de `assets/` manteniendo los mismos nombres.
