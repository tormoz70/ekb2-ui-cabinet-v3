FROM nginx

COPY build/ /ekb-ui
COPY extra/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080/tcp

RUN chmod +x /usr/sbin/nginx

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]