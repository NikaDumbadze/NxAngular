import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtax',
})
export class AddtaxPipe implements PipeTransform {
  
  transform(price: number): number {
    if (price)
      return this.getTotalPrice(price);

    return price;
  }

  private getTotalPrice(price: number) {
    console.log('addtax pipe called');
    const total = price + (price * .08);
    return total;
  }
}