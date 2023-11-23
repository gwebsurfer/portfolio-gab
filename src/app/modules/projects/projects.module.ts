import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@NgModule({
  declarations: [ProjectsComponent, CardComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
