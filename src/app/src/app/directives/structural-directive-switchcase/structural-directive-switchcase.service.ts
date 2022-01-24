import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StructuralDirectiveSwitchcaseService {
  constructor() {}

  public getFruitObject(): any {
    return {
      apple:
        'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=',
      banana: 'https://media.istockphoto.com/photos/banana-picture-id120492078?b=1&k=20&m=120492078&s=170667a&w=0&h=J747Ak7f6tNVL23LCNNct91ESVHqtpIIeJs5sBcMIgo=',
      grapes: 'https://img.freepik.com/free-vector/isolated-dark-grape-with-green-leaf_317810-1956.jpg?size=338&ext=jpg',
      watermelon: 'https://media.istockphoto.com/photos/watermelon-slice-isolated-on-white-background-clipping-path-full-of-picture-id1125584344?k=20&m=1125584344&s=612x612&w=0&h=j5ANfvR80QQcpxOxqrxMuEuc2eo8j-5veLP_t68-Y1c=',
      orange: 'https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=170667a&w=0&h=e8ZoHukToTFk2s0EqVBiZxdCs1EIKNGzT865MKU45Es=',
    }
  }
}
