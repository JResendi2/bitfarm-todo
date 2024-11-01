import { LinkButtonDirective } from './../../../directives/link-button.directive';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RamService } from '../../../services/ram.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterOutlet, LinkButtonDirective
  ],
  styleUrl: './index.component.css',
  templateUrl: './index.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  data: any = {};
  results: any[] = [];

  constructor(private service: RamService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data: any) => { this.results = data.results; },
      err => console.log('Error HTTP ', err),
      () => console.log('Solicitud HTTP completada.')
    );
  }
}

