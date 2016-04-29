import { Component }         from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { HeroListComponent } from './toh/hero-list.component';
import { HeroService2 }       from './toh/hero.service2';
@Component({
  selector: 'my-toh',
  template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>
  `,
  directives: [HeroListComponent],
  providers:  [
    HTTP_PROVIDERS,
    HeroService2,
  ]
})
export class TohComponent { }
