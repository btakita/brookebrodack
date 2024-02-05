#!/bin/sh

RUNNING_CONTAINER_ID=$(docker ps | grep ' brookebrodack-site-' | awk '{print $1}')
# shellcheck disable=SC2039
declare -i COUNT
# shellcheck disable=SC2039
declare -i SCALE
COUNT=$(echo "$RUNNING_CONTAINER_ID" | awk '{print NF}')
SCALE="(( $COUNT + 1 ))"
docker compose -p brookebrodack -f d.brookebrodack.docker-compose.yml --project-directory . up -d --scale www="$SCALE" --no-recreate
if [ -n "$RUNNING_CONTAINER_ID" ]; then
	sleep 5
	docker container stop "$RUNNING_CONTAINER_ID"
fi
