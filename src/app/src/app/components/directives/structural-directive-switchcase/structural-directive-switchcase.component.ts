import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { StructuralDirectiveSwitchcaseService } from './structural-directive-switchcase.service'

@Component({
  selector: 'app-structural-directive-switchcase',
  templateUrl: './structural-directive-switchcase.component.html',
  styleUrls: ['./structural-directive-switchcase.component.scss'],
})
export class StructuralDirectiveSwitchcaseComponent
  implements OnInit, AfterViewInit {
  fruitObject: any
  fruitList: string[] = []

  constructor(
    structuralDirectiveSwitchcaseService: StructuralDirectiveSwitchcaseService,
    private cd: ChangeDetectorRef,
  ) {
    this.fruitObject = structuralDirectiveSwitchcaseService.getFruitObject()
    this.fruitList = [...Object.keys(this.fruitObject)]
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
}
