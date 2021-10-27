import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //Properties
  user: User;

  //Methods
  constructor() {}
  ngOnInit() {
    this.user = {
      firstName: 'Harry',
      lastName: 'Potter',
      age: 30,
      address: {
        street: '1st Street',
        city: 'Hays',
        state: 'KS',
      },
    };
  }
}

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//   };
// }
