from nginx:1.17.4-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY config/static.conf /etc/nginx/conf.d/default.conf
COPY static /usr/share/nginx/html

EXPOSE 80