<p align="center">

[![Java](https://img.shields.io/badge/Java-11-orange.svg)](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.1.9-green)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-3.6.X-red)](https://maven.apache.org/)

</p>

## Para se executar o projeto 
```
mvn clean compile spring-boot: run
```

## Caso não esteja com maven intalado
```
mvnw clean compile spring-boot: run
```

## JAva 8
Projeto compatível com JDK8 no entanto é necessário alterera o target definido no arquivo pom.xml

<java.version>11</java.version> -> <java.version>1.8</java.version>
