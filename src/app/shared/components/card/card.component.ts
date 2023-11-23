import { Component, Input } from '@angular/core';
import { ProjectDetail } from '../../models/content.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() project!: ProjectDetail;
}
