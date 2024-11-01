import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PagesService } from '../../../services/pages/pages.service';

@Component({
  selector: 'app-footer', // nombre de la etiqueta
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

  constructor(private eventService: PagesService){

  }

  changeColorHeader(){
    this.eventService.emitEvent('footer')
  }

}
