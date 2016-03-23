FROM java:8-jdk

MAINTAINER par.nils.amsen@gmail.com

RUN apt-get update && apt-get install -y \
  git \
  # maven \
  && rm -rf /var/lib/apt/lists/*

#TODO USE GRADLE

  # WORKDIR /code
  #
  # # Prepare by downloading dependencies
  # ADD pom.xml /code/pom.xml
  # RUN ["mvn", "dependency:resolve"]
  # RUN ["mvn", "verify"]
  #
  # # Adding source, compile and package into a fat jar
  # ADD src /code/src
  # RUN ["mvn", "package"]
  #
  # EXPOSE 4567
  # CMD ["/usr/lib/jvm/java-8-openjdk-amd64/bin/java", "-jar", "target/sparkexample-jar-with-dependencies.jar"]
