import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-structural-directive-ngif',
  templateUrl: './structural-directive-ngif.component.html',
  styleUrls: ['./structural-directive-ngif.component.scss'],
})
export class StructuralDirectiveNgifComponent implements OnInit {
  ifParameter: boolean = true

  constructor() {}

  ngOnInit(): void {}

  toggleIfParameter() {
    this.ifParameter = !this.ifParameter
  }
}
