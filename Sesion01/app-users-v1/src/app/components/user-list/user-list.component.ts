import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      {
        next: (users) => this.users = users,
        error: (error) => console.error('Error:', error),
        complete: () => console.log('Users fetched!')
      }
    );
  }
}
