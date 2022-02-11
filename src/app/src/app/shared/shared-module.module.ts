import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { MenubarModule } from 'primeng/menubar'
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component'

@NgModule({
  declarations: [NavbarComponent, ModalComponent, AlertComponent],
  imports: [CommonModule, MenubarModule, NgbModule],
  exports: [NavbarComponent, ModalComponent, AlertComponent],
})
export class SharedModuleModule {}
