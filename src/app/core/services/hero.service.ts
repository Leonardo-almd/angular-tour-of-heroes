import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const HEROES = of(heroes)
    this.messageService.add('HeroService: fetched heroes')
    return HEROES
  }

  public getHero(id: number): Observable<Hero> {
    const hero = heroes.find(hero => hero.id === id)!
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }


}
