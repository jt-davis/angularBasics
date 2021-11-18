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
  enableAdd: boolean = true;
  currentClasses = {};
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
          image: 'https://picsum.photos/200?random=1',
          isActive: false,
          netWorth: 200,
          birthDay: new Date('01/01/2020 09:30:00'),
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
          image: 'https://picsum.photos/200?random=2',
          isActive: true,
          netWorth: 100,
          birthDay: new Date('01/02/2020 08:30:00'),
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
          image: 'https://picsum.photos/200?random=3',
          isActive: false,
          netWorth: 100,
          birthDay: new Date('01/03/2020 10:30:00'),
        },
      ];
      this.loaded = true;
    }, 2000);
    this.showExtended = true;

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

    this.setCurrentClasses();
  }
  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
    };
  }
}
