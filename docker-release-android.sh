#!/bin/bash

build_runner=`docker images | grep baggr/runner | wc -l`
if [ $build_runner == 1 ]; then
	echo "OK"
else
	echo "Building docker image baggr/runner"
	docker build -t baggr/runner docker-runner
fi

builder=`docker images | grep baggr/builder | wc -l`
if [ $builder == 1 ]; then
  echo "OK"
else
  echo "Building docker image baggr/builder"
  docker build -t baggr/builder docker-builder
fi

docker run -d -p 8100:8100 -v ${PWD}:/app --name release-builder baggr/builder /bin/bash

#build release apk
docker exec release-builder ionic build --release android
#sign release apk
docker exec release-builder jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /app/bikeonet.keystore /app/platforms/android/build/outputs/apk/android-release-unsigned.apk bikeonet
#run zipalign on signed release apk
docker exec release-builder /usr/local/android-sdk-linux/build-tools/23.0.2/zipalign -v 4 /app/platforms/android/build/outputs/apk/android-release/unsigned.apk /app/ba-ggr.apk 

