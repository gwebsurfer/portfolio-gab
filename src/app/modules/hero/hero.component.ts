import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Content, HeroContent } from 'src/app/shared/models/content.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public content: HeroContent = {
    button: '',
    greeting: '',
    heading: '',
    availability: '',
    location: '',
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getContent().subscribe(
      (data: Content) => {
        this.content = data.en.hero;
      },
      (error) => {
        console.error('Error fetching content: ', error);
      }
    );
  }
}
