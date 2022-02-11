import { EventEmitter, Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private route: Router) {}

  authenticate(username: string, password: string): boolean {
    if (username && password) {
      this.isLoggedEmitter.emit(true)
      this.route.navigate(['interpolation'])
      
      return true
    }

    return false
  }

  logout(): void {
    this.isLoggedEmitter.emit(false)
    this.route.navigate([''])
  }
}
