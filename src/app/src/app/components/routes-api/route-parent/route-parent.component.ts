import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-route-parent',
  templateUrl: './route-parent.component.html',
  styleUrls: ['./route-parent.component.scss'],
})
export class RouteParentComponent implements OnInit {
  id?: string | null
  name?: string | null
  paramType: string

  constructor(private route: ActivatedRoute) {
    this.paramType = "Waiting first request..."
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')
      this.name = params.get('name')
      this.paramType = "Params"
    })

    this.route.queryParamMap.subscribe((queryParams) => {
      this.id = queryParams.get('id')
      this.name = queryParams.get('name')
      this.paramType = "Query Params"
    })
  }
}
