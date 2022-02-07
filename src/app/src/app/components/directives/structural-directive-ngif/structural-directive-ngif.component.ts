import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-structural-directive-ngif',
  templateUrl: './structural-directive-ngif.component.html',
  styleUrls: ['./structural-directive-ngif.component.scss'],
})
export class StructuralDirectiveNgifComponent implements OnInit {
  ifParameter: boolean = false

  constructor() {}

  ngOnInit(): void {}

  toggleIfParameter(event: any) {
    this.ifParameter = !this.ifParameter
  }
}
