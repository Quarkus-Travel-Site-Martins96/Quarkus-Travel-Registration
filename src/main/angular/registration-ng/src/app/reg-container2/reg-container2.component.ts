import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-container2',
  templateUrl: './reg-container2.component.html',
  styleUrls: ['./reg-container2.component.css']
})
export class RegContainer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const username: string = localStorage.getItem("reg_username");
    if (!username) {
      console.debug("missing contents in local storage, back to step1");
      location.href = "/";
    }
  }

}
