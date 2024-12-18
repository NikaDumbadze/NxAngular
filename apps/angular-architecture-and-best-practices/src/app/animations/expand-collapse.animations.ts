import { trigger, transition, style, animate, state } from '@angular/animations';

const expandCollapseAnimations = [
  state(
    '*',
    style({
      //enter
      height: '*',
      opacity: 1,
      'overflow-y': 'hidden',
    })
  ),
  transition(':leave', animate('250ms ease-out')),
  transition(':enter', animate('250ms ease-in'))
];

/**
 * Expands content when content exposed by *ngIf
 */
export const expandCollapse = trigger('expandCollapese', expandCollapseAnimations);