# TodoApp

This is a simple todo app, developed using MEAN.

***
##Build

 Each component (Mongodb, ExpressJS, AngularClient) is deployed on a docker container. We use docker-compose to relate the different containers. To execute the app just run:
 
 ```
 docker-compose up --build
 ```

on the **/app** directory and look on **localhost:4200**.

##Electron

This app it also could be deployed using electron, with who you could deploy a desktop app. To run the app using electron, just go to **app/angular-client** and run: 

 ```
npm run electron
 ```
 
on your terminal. As aforementioned, this app work using three different docker container so, to use the app on the "electron mode", you must have the ExpressJS and MongoDB containers running (how to do this was explained on the previous point).

##Use
This is the main (and the only) page of the app
 ![alt tag](https://i.imgsafe.org/bcfd749616.png)

as you can see, you clicking the AddTask! button, a form will be displayed. In this form you will be able to picke the priority, name and date of the task. Once you add the task, you will be able to see something like that on the task list.

![alt tag](https://i.imgsafe.org/bcfd6704a3.png)

There are three different colours for the tasks priority **red** that indicates a priority of **1**, **orange** that indicate a priority of **2** and **green** that indicates a priority of **3 or greater**.

Click the **completed** button will set the task form uncompleted to completed, and the other way arround. You could delete a task at any moment by clicking on the cross button

##Technologies Used

- Angular-cli
- MongoDB
- ExpressJS
- Electron
- Mongoose
- Bootstrap

***

This app has been developed using [*Create a MEAN app with Angular 2 and Docker Compose*](https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose) tutorial by **Ganga Chris** as a template.

Developed by **Manuel Rodríguez-Sánchez Guerra** & **Luis Gonzaga Rozo Bueno**
