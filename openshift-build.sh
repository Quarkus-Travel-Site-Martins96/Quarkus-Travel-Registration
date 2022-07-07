cd src/main/angular/registration-ng
npm i
ng build --configuration production
cd ../../../..
./mvnw clean package -Dquarkus.kubernetes.deploy=true -DskipTests
