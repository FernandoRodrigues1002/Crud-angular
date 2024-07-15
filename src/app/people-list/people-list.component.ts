import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  editar(id: number): void {
    this.router.navigate(['/people-edit', id]);
  }

  deletePerson(id: number): void {
    if (confirm('Você tem certeza que deseja excluir esta pessoa?')) {
      this.peopleService.deletePerson(id).subscribe(() => {
        this.people = this.people.filter(person => person.id !== id);
      });
    }
  }

  create(): void {
    this.router.navigate(['/people-create']);
  }
}
