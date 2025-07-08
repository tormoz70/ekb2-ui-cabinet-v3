FROM container-registry.oracle.com/graalvm/jdk:17-ol9

VOLUME /tmp

COPY target/${artifactId}-${version}.jar /app/app.jar
COPY extra /app/
COPY docker/entrypoint.sh /app/

RUN ["chmod", "+x", "/app/entrypoint.sh"]
ENTRYPOINT ["/app/entrypoint.sh"]