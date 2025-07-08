#!/bin/bash

env

export JAVA_OPTS="-server \
-Xms256m \
-Xmx2048m \
-Xss512k \
-Dfile.encoding=UTF-8 \
-XX:+UseParallelGC \
-XX:MinHeapFreeRatio=10 \
-XX:MaxHeapFreeRatio=20 \
-XX:GCTimeRatio=9 \
-XX:AdaptiveSizePolicyWeight=90"

exec java $JAVA_OPTS -jar app.jar
