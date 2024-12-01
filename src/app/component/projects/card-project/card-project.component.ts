import { Component, Input } from '@angular/core';
import { Position } from '../../../model/position';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {

  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() position!: Position;

}
