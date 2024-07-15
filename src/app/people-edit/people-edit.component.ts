import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {
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

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.peopleService.getPerson(+id).subscribe(data => {
        this.person = data;
      });
    }
  }

  onSubmit(): void {
    this.peopleService.updatePerson(this.person).subscribe(response => {
      console.log('Pessoa atualizada com sucesso!', response);
      this.home();
    });
  }

  home(): void {
    this.router.navigate(['/people-list']);
  }
}
