# TodoApp

This is a simple todo app, developed using MEAN.

***
##Build

 Each component (Mongodb, ExpressJS, AngularClient) is deployed on a docker container. It uses docker-compose to relate the different containers. To execute the app just run:
 
 ```
 docker-compose up --build
 ```

on the **/app** directory and look on **localhost:4200**.

##Electron

This app it also could be deployed using electron, whith who you could deploy a desktop app. To run the app using electron, just go to **app/angular-client** and run 

 ```
npm run electron
 ```
 
on your terminal. As aforementioned, this app work using three different docker container so to use the app on the "electron mode" you must have the ExpressJS and MongoDB containers running.(How to do this was explained on the previous point)

##Use

***

This app has been developed usign [*Create a MEAN app with Angular 2 and Docker Compose*](https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose) tutorial by **Ganga Chris** as a template.

Developed by **Manuel Rodríguez-Sánchez Guerra** & **Luis Rozo Bueno**
