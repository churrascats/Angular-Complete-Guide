import {
  Component,
  ElementRef,
  OnInit,
  AfterViewChecked,
  ViewChild,
  Renderer2,
} from '@angular/core'

import { MenuItem } from 'primeng/api'
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  @ViewChild('menu') target: any;

  items!: MenuItem[]

  constructor(private _renderer: Renderer2, private navbarService: NavbarService) {}

  ngOnInit() {
    this.items = this.navbarService.getMenuItem();
  }

  ngAfterViewChecked(): void {
    this._renderer.addClass(this.target.el.nativeElement.firstChild, 'mb-5')
  }
}
