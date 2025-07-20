# AK Preschool - Rize Anaokulu Web Sitesi
# Dockerfile für einfache Bereitstellung

# Nginx Alpine als Base Image
FROM nginx:alpine

# Arbeitsverzeichnis setzen
WORKDIR /usr/share/nginx/html

# Projektdateien kopieren
COPY . .

# Nginx Konfiguration anpassen
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Gzip Kompression aktivieren \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 1024; \
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json; \
    \
    # Browser Caching für statische Assets \
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    # HTML Dateien nicht cachen \
    location ~* \.html$ { \
        expires -1; \
        add_header Cache-Control "no-cache, no-store, must-revalidate"; \
    } \
    \
    # Sicherheitsheader \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header X-XSS-Protection "1; mode=block" always; \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header Referrer-Policy "no-referrer-when-downgrade" always; \
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always; \
    \
    # Error Seiten \
    error_page 404 /index.html; \
    error_page 500 502 503 504 /50x.html; \
    location = /50x.html { \
        root /usr/share/nginx/html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Port 80 exponieren
EXPOSE 80

# Health Check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Container starten
CMD ["nginx", "-g", "daemon off;"] 