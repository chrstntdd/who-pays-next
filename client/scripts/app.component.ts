import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { PeopleComponent } from './components/people.component'
import { TestComponent } from './test.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/']">home</a>
            <a [routerLink]="['/test']">test</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/', component: PeopleComponent},
    {path: '/test', component: TestComponent}
])
export class AppComponent {
    title = 'Who Pays Next';
}
