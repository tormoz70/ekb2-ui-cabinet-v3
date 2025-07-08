FROM nginx

COPY build /etc/nginx/sites-available/default

EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]