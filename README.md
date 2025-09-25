# Podología Cochoa — podologiacochoa.web.app
Base del sitio web estático con diseño moderno y enfoque en **agenda simple**.

## Características
- Diseño responsive, limpio y profesional (paleta inspirada en Facebook + Instagram con acentos clínicos).
- Páginas base: **Inicio**, **Servicios**, **Agenda**, **Nosotros**, **Contacto**.
- Enlaces a redes: Facebook e Instagram.
- Datos reales: teléfono, email, dirección y horario (Lunes a Sábado, 10:00–19:30 (solo con agenda)).

## Estructura
- index.html (Landing con Hero + destacados)
- servicios.html
- agenda.html (formulario base y botón "Confirmar en Google Calendar")
- nosotros.html
- contacto.html (mailto + WhatsApp)
- /css/estilos.css
- /js/main.js
- /assets/img, /assets/icons

## Uso local
```bash
python generate_podologia_cochoa_site.py
cd podologia-cochoa
python -m http.server 8080
# Abre http://localhost:8080
```

## Despliegue — Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # selecciona "podologia-cochoa" y el directorio 'podologia-cochoa'
firebase deploy
```

## Contacto
- Email: virastorga@gmail.com
- WhatsApp: +56 9 6605 6125 (https://wa.me/56966056125)
- Dirección: Cochoa 0716, Puente Alto, Santiago — Puente Alto, Santiago
- Horario: Lunes a Sábado, 10:00–19:30 (solo con agenda)
- Redes: Facebook https://www.facebook.com/podologiacochoa/?locale=es_LA · Instagram https://www.instagram.com/podologia_cochoa/?hl=es-la
