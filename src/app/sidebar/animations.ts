import { trigger, state, style, transition, animate, group} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '500px', 'visibility': 'visible', transform: 'translateX(0%)'
      })),
      state('out', style({
        'max-height': '0px', 'visibility': 'hidden', transform: 'translateX(-100%)'
      })),
      transition('in => out', [group([
        animate('250ms ease-in-out')
      ])]),
      transition('out => in', [group([
        animate('250ms ease-in-out')
      ])])
    ]),
]
