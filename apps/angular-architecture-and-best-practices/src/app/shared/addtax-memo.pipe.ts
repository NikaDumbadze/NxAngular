import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'addTaxmemo',
})
export class AddtaxMemoPipe implements PipeTransform, OnDestroy {

  @memo()
  transform(price: number): number {
    if (price)
      return this.getTotalPrice(price);

    return price;
  }

  private getTotalPrice(price: number) {
    console.log('addtaxmemo pipe called');
    const total = price + (price * .08);

    return total;
  }

  ngOnDestroy(): void {
    console.log('Pipe Destroyed....BOOM!')
  }
}
