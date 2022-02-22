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
          {
            label: 'Parent-Child Stream',
            routerLink: '/data-sharing-1',
          },
          {
            label: 'NgContent',
            routerLink: '/data-sharing-2',
          },
        ],
      },
      {
        label: 'Data Sharing',
        icon: 'pi pi-fw pi-share-alt',
        items: [
          {
            label: 'Interpolation',
            routerLink: '/interpolation',
          },
          {
            label: 'Class Binding',
            routerLink: '/class-binding',
          },
          {
            label: 'Event Binding',
            routerLink: '/event-binding',
          },
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
          {
            label: 'NgIf',
            routerLink: '/structural-directive-ngif',
          },
          {
            label: 'NgSwitchCase',
            routerLink: '/structural-directive-ngswithcase',
          },
          {
            label: 'Custom Attribute Directive',
            routerLink: '/attribute-directive',
          },
        ],
      },
      {
        label: 'Routes',
        icon: 'pi pi-fw pi-directions',
        items: [
          {
            label: 'Route Parameters',
            routerLink: '/route-api',
          },
        ],
      },
      {
        label: 'Forms',
        icon: 'pi pi-fw pi-id-card',
        items: [
          {
            label: 'Data Driven Form',
            routerLink: '/data-driven-form',
          },
          {
            label: 'Template Driven Form',
            routerLink: '/template-driven-form',
          },
        ],
      },
    ]
  }
}
