import { Directive, ElementRef, HostListener, Renderer2, Input} from '@angular/core';
import { Router } from '@angular/router';
// ElementRef: otorga acceso directo al elemento DOM host

@Directive({
  selector: '[appLinkButton]',
  standalone: true
})
export class LinkButtonDirective {
  @Input('appLinkButton') id:number = 0;

  key_d = 'd';
  key_D = 'D';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private router:Router) {
    /*
      -> elementRef: es el elemento en si
      -> renderer2: permite agregar clases

      this.elementRef.nativeElement.style.backgroundColor = 'gray'; -> agregar estilos sobre css
    */
   this.renderer2.addClass(this.elementRef.nativeElement, 'footer-details');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.id);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight('gray');
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent){


    try {
      if(parseInt(event.key) < 9 && this.id < 9){
        this.key_d = String(this.id);
      }
    } catch (error) {

    }



    if(event.ctrlKey && event.key === this.key_d || event.ctrlKey && event.key === this.key_D){
      event.preventDefault();
      console.log('Combinación');
      // this.router.navigate(['/auth/login']); // navegar a otra ruta
      this.elementRef.nativeElement.click();
    }
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
