import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, AfterViewChecked} from '@angular/core';
import { RamService } from '../../../services/ram.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styleUrl: './show.component.css',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit, AfterViewChecked{
  @Input() id!: number;
  character:any = {};
  view_checked:boolean = false;

  constructor(private service: RamService){}

  ngOnInit(): void {
    this.service.getOne(this.id).subscribe((character: any) => {
      this.character = character;
      console.log('Show one:', character.id);
    });
  }
  ngAfterViewChecked(): void {
    console.log("===== ngAfterViewChecked =====");
    this.view_checked = true;
  }
}
