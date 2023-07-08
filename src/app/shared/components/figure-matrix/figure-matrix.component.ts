import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-figure-matrix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figure-matrix.component.html',
  styleUrls: ['./figure-matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FigureMatrixComponent implements OnInit {
  @Input()
  rows = 0;

  @Input()
  columns = 0;

  matrix: number[][] = [];

  ngOnInit() {
    this.matrix = new Array(this.rows).fill(new Array(this.columns).fill(0));
  }
}
