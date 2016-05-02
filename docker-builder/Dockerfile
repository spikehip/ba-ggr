FROM baggr/runner
USER root

RUN echo 'deb http://httpredir.debian.org/debian jessie-backports main' > /etc/apt/sources.list.d/jessie-backports.list
RUN dpkg --add-architecture i386
RUN apt-get -y update
RUN apt-get -y install libc6-dev-i386 libc6-i386 zlib1g:i386 openjdk-8-jdk

RUN cd /usr/local && curl -L -O http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz && tar -xzf android-sdk_r24.4.1-linux.tgz

# Environment variables
ENV ANDROID_HOME /usr/local/android-sdk-linux
ENV ANDROID_SDK /usr/local/android-sdk-linux
ENV ANDROID_SDK_COMPONENTS tools,platform-tools,android-23,build-tools-23.0.2,sys-img-armeabi-v7a-android-23,extra-android-m2repository,extra-google-m2repository
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/android-sdk-linux/platform-tools/:/usr/local/android-sdk-linux/build-tools/:/usr/local/android-sdk-linux/tools/

RUN echo y | /usr/local/android-sdk-linux/tools/android update sdk --no-ui --all --filter "${ANDROID_SDK_COMPONENTS}" --force
RUN echo y | /usr/local/android-sdk-linux/tools/android update sdk --filter platform-tools --no-ui --force -a
RUN echo y | /usr/local/android-sdk-linux/tools/android update sdk --filter tools --no-ui --force -a
RUN echo y | /usr/local/android-sdk-linux/tools/android update sdk --no-ui --all --filter "${ANDROID_SDK_COMPONENTS}" --force

CMD ionic build android
