FROM nginx:apline

RUN rm -rf /usr/share/nginx/html/*

COPY src/index.html /usr/share/nginx/html/
COPY src/app.js /usr/share/nginx/html/
COPY deployment/nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]