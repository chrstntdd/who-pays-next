import { Component, OnInit } from '@angular/core';

import { Person } from '../mock/person';
import { PeopleService } from '../services/people.service';


@Component({
    selector: 'people-list',
    templateUrl: 'app/components/people.component.html',
    providers: [
        PeopleService
    ]
})
export class PeopleComponent implements OnInit {
    people: Person[];

    constructor (private peopleService: PeopleService) { }

    getPeople() {
        this.peopleService.getPeople()
            .then(people => this.people = people)
            .catch(error => console.error(error));
    }

    ngOnInit() {
        this.getPeople();
    }
}
