import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Content, ProjectsContent } from 'src/app/shared/models/content.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public content: ProjectsContent = {
    heading: '',
    tagline: '',
    projects: [],
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getContent().subscribe(
      (data: Content) => {
        console.log('Data: ', data.en.projects);
        this.content = data.en.projects;
      },
      (error) => {
        console.error('Error fetching content: ', error);
      }
    );
  }
}
