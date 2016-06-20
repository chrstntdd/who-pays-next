import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PEOPLE } from '../mock/mock-people';

@Injectable()
export class PeopleService {

    getPeople() {
        return Promise.resolve(PEOPLE);
    }

    getPerson(id: number) {
        // return this.getHeroes().then(
        //     heroes => heroes.filter(hero => hero.id === id)[0]
        // );
    }
}
