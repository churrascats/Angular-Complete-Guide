import { EventEmitter, Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false
  isLoggedEmitter: EventEmitter<boolean> = new EventEmitter()

  constructor(private route: Router) {}

  authenticate(username: string, password: string): boolean {
    if (username && password) {
      this.isLogged = true
      this.isLoggedEmitter.emit(true)

      this.route.navigate(['interpolation'])
      
      return true
    }

    this.isLoggedEmitter.emit(false)
    return false
  }

  logout(): void {
    this.isLogged = false
    this.isLoggedEmitter.emit(false)
    
    this.route.navigate([''])
  }
}
