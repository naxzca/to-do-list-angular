import { Component } from '@angular/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  list: any [] = [];
  addtask(item:string){
    
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  removetask(id:number){
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id)
  }
}



