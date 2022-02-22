import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  Renderer2,
} from '@angular/core'

import { MenuItem } from 'primeng/api'
import { AuthService } from '../login/auth.service'
import { NavbarService } from './navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  @ViewChild('menu') target: any

  items!: MenuItem[]
  //isLogged: boolean = false
  isLogged: boolean = true

  constructor(
    private _renderer: Renderer2,
    private navbarService: NavbarService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.items = this.navbarService.getMenuItem()
    this.authService.isLoggedEmitter.subscribe((isLoggedState) => {
      this.isLogged = isLoggedState
    })
  }

  ngAfterViewChecked(): void {
    if (this.isLogged) {
      this._renderer.addClass(this.target.el.nativeElement.firstChild, 'mb-5')
    }
  }

  logout(): void {
    this.authService.logout()
  }
}
