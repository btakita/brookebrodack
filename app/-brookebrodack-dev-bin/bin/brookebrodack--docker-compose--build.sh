#!/bin/sh

_env__validate
RC=$?
if [ $RC -ne 0 ] ; then
	exit $RC
fi
docker compose -p brookebrodack -f d.brookebrodack.docker-compose.yml --project-directory . build
