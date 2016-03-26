FROM java:8-jdk

MAINTAINER par.nils.amsen@gmail.com

RUN mkdir /www /docker-setup

COPY build.jar /www

WORKDIR /docker-setup

RUN apt-get update && apt-get install -y \
  unzip \
  git \
  wget ; \
  rm -rf /var/lib/apt/lists/* ; \
  wget -Nq https://services.gradle.org/distributions/gradle-2.12-bin.zip ; \
  unzip -oq gradle-2.12-bin.zip -d /opt ; \
  mv /opt/gradle* /opt/gradle

ENV GRADLE_HOME "/opt/gradle"
ENV PATH ${PATH}:${GRADLE_HOME}/bin

EXPOSE 1337

CMD [$JAVA_HOME, "-jar", "build.jar"]
