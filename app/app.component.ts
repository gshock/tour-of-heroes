import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from './hero.service';
import { HeroService2 }     from './toh/hero.service2';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent} from './toh/hero-list.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['HeroList']">Hero List</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['app/app.component.css'],

  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService, 
    HeroService2
  ]
})
@RouteConfig([
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},
{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
},
{
  path: '/toh/hero-list',
  name: 'HeroList',
  component: HeroListComponent
},
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
