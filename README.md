# Portafolio — Juan Camilo Zapata Orozco

Sitio estático (HTML + CSS + JavaScript, sin dependencias ni build) listo para publicar con **GitHub Pages**.

## Estructura

```
portfolio/
├── index.html      # Contenido y secciones
├── styles.css      # Estilos (tema oscuro, responsive)
├── script.js       # Idioma ES/EN, menú móvil, animaciones
└── assets/
    ├── CV_Juan_Camilo_Zapata_ES.pdf
    └── CV_Juan_Camilo_Zapata_EN.pdf
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
