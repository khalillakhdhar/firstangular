import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
constructor() // constructor
{
  console.log("hello from constructor "+this.name)
}
name: string="Hello angular"; // attributes

}
