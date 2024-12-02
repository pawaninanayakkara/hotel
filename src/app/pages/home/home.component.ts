import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { UserService } from '../../user.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  userList: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    AOS.init({
      offset: 200, 
      duration: 600,  
      easing: 'ease-in-out-sine',  
      delay: 100,
        });
        this.userList=this.userService.getUserList();
  }
}
