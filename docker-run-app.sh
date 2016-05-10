#!/bin/bash

build_runner=`docker images | grep baggr/runner | wc -l`
if [ $build_runner == 1 ]; then
	echo "OK"
else
	echo "Building docker image baggr/runner"
fi

docker build -t baggr/runner docker-runner
docker run -ti -p 8100:8100 -v ${PWD}:/app baggr/runner 
