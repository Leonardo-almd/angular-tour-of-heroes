import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getHero()
  }

  public getHero(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(Number(id)).subscribe(hero => this.hero = hero)
  }

  public goBack(): void {
    this.location.back()
  }

}
