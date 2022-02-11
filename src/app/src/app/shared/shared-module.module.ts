import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { MenubarModule } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button'
import { ModalComponent } from './modal/modal.component'
import { AlertComponent } from './alert/alert.component'
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    NavbarComponent,
    ModalComponent,
    AlertComponent,
    LoginComponent,
  ],
  imports: [CommonModule, FormsModule, MenubarModule, NgbModule, ButtonModule],
  exports: [NavbarComponent, ModalComponent, AlertComponent, LoginComponent],
})
export class SharedModuleModule {}
