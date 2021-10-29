import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Harry',
          lastName: 'Potter',
          age: 30,
          address: {
            street: '1st Street',
            city: 'Hays',
            state: 'KS',
          },
        },
        {
          firstName: 'Ron',
          lastName: 'Weasley',
          age: 30,
          address: {
            street: '2nd Street',
            city: 'Hays',
            state: 'KS',
          },
        },
        {
          firstName: 'Sirius',
          lastName: 'Black',
          age: 30,
          address: {
            street: '3rd Street',
            city: 'Hays',
            state: 'KS',
          },
        },
      ];
      this.loaded = true;
    }, 2000);
    this.showExtended = false;

    //   this.addUser({
    //     firstName: 'Albus',
    //     lastName: 'Dumbledore',
    //     age: 30,
    //     address: {
    //       street: '4th Street',
    //       city: 'Hays',
    //       state: 'KS',
    //     },
    //   });
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
