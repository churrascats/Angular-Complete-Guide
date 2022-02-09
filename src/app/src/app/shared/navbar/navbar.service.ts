import { Injectable } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  getMenuItem(): MenuItem[] {
    return [
      {
        label: 'Data Binding',
        icon: 'pi pi-fw pi-link',
        items: [
          { label: 'Parent-Child Stream', routerLink: '/data-sharing-1' },
          { label: 'NgContent', routerLink: '/data-sharing-2' },
        ],
      },
      {
        label: 'Data Sharing',
        icon: 'pi pi-fw pi-share-alt',
        items: [
          { label: 'Interpolation', routerLink: '/interpolation' },
          { label: 'Class Binding', routerLink: '/class-binding' },
          { label: 'Event Binding', routerLink: '/event-binding' },
          {
            label: 'Two way Data Binding',
            routerLink: '/two-way-data-binding',
          },
        ],
      },
      {
        label: 'Directives',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'NgIf', routerLink: '/structural-directive-ngif' },
          {
            label: 'NgSwitchCase',
            routerLink: '/structural-directive-ngswitchcase',
          },
          {
            label: 'Custom Attribute Directive',
            routerLink: '/attribute-directive',
          },
        ],
      },
    ]
  }
}
