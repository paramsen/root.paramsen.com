FROM java:8-jdk

MAINTAINER par.nils.amsen@gmail.com

RUN mkdir /www /docker-setup

COPY ROOT.jar /www

EXPOSE 1337

WORKDIR /www

CMD [$JAVA_HOME, "-jar", "ROOT.jar"]
