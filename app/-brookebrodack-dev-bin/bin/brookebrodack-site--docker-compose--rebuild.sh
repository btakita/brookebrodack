#!/bin/sh

brookebrodack--docker-compose--build
brookebrodack-site--docker-compose--restart
docker system prune -f
