import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent {
  person: Person = {
    id: 0,
    name: '',
    role: '',
    age: 0,
    email: '',
    isActive: false,
    country: '',
    experience: ''
  };

  constructor(private peopleService: PeopleService, private router: Router) { }

  onSubmit(): void {
    this.peopleService.createPerson(this.person).subscribe(response => {
      console.log('Pessoa cadastrada com sucesso!', response);
    });
  }

  home(): void {
    this.router.navigate(['/people-list']);
  }

}
