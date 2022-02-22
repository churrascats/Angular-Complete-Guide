import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewInit {
  @ViewChild("inputName") inputName!: ElementRef
  @ViewChild("inputEmail") inputEmail!: ElementRef

  name: string = ''
  email: string = ''
  nameControl: string = ''
  emailControl: string = ''

  isFormValid: boolean = true

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.nameControl = this.inputName.nativeElement.className.split(" ").slice(1, 5).join(" ")
    this.emailControl = this.inputEmail.nativeElement.className.split(" ").slice(1, 5).join(" ")

    this.cd.detectChanges()
  }

  getClass(event: any, inputType: string, form: NgForm) {
    switch (inputType) {
      case 'name':
        this.nameControl = event.target.className.split(" ").slice(1, 5).join(" ")
        break
      case 'email':
        this.emailControl = event.target.className.split(" ").slice(1, 5).join(" ")
        break
    }

    this.isFormValid = form.form.status == "INVALID" ? true : false

  }

  onSubmit(form: NgForm) {
    console.log(form)
  }
}
