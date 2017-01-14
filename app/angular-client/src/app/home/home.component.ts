import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { AboutComponent } from '../about/about.component';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


    API = 'http://localhost:3000';
    tasks: any[]
    constructor(private http: Http) {
      http.head
    }

    ngOnInit() {

      this.getAllTasks();

    }

    getAllTasks() {
        this.http.get(`${this.API}/tasks`)
            .map(res => res.json())
            .subscribe(tasks => {
                console.log(tasks)
                this.tasks = tasks
            })
    }

    addTask(priority, name, date) {
        this.http.post(`${this.API}/tasks`, { priority, name, date, completed:false })
            .map(res => res.json())
            .subscribe(() => {
                this.getAllTasks();
            })
    }

    removeTask(task) {
      this.http.delete(`${this.API}/tasks/${task._id}`)
        .map(res => res.json())
            .subscribe(tasks => {
               this.getAllTasks();
               console.log("Oye, que funciono!");
            })

    }

    updateTask(task, date) {
      this.http.put(`${this.API}/tasks/${task._id}`, { date })
        .map(res => res.json())
              .subscribe(tasks => {
                this.getAllTasks();
                console.log("Oye, que funciono!");
              })
    }

    show(task) {
      console.log(task);
      console.log(task._id);
      console.log(task.id);
      console.log(task.name);
      console.log(`${this.API}/tasks/${task._id}`);
    }




}