import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  getMenuItem(): any {
    return [
      {
        label: 'Data Binding',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Data Sharing',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
      {
        label: 'Directives',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ]
  }
}
