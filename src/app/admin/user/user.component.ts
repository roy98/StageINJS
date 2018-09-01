import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data= []
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.data=this.userService.users
  }

  onDeleteUser(id: number){
    console.log('delete user ' + id);
  }

}
