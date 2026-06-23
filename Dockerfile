FROM nginx:1.25-apline

RUN rm -rf /usr/share/nginx/html/*

COPY src/index.html /usr/share/nginx/html/
COPY src/app.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off"]