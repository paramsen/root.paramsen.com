FROM java:8-jdk

MAINTAINER par.nils.amsen@gmail.com

RUN mkdir /www /docker-setup

COPY ROOT.jar /www

WORKDIR /www

CMD ["java", "-jar", "ROOT.jar"]
