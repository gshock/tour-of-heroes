import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail.component';
import {HeroService2} from './hero.service2';

export class HeroListComponent implements OnInit {
  constructor (private _heroService: HeroService2) {}
  errorMessage: string;
  heroes:Hero[];
  ngOnInit() { this.getHeroes(); }
  getHeroes() {
    this._heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }
  // addHero (name: string) {
  //   if (!name) {return;}
  //   this._heroService.addHero(name)
  //                    .subscribe(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }
}
