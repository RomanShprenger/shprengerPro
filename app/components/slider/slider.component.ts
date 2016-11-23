import { Component, Input, ElementRef, HostBinding } from '@angular/core';
declare var jQuery: any;
import 'owl-carousel';

@Component({
  selector: 'owl-carousel',
  template: `<ng-content></ng-content>`,
})

export class OwlCarousel {
  @HostBinding('class') defaultClass = 'owl-carousel';
  @Input() options: {};
  
  $owlElement: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }
    this.$owlElement = jQuery(this.el.nativeElement).owlCarousel(this.defaultOptions);
  }

  ngOnDestroy() {
    this.$owlElement.trigger('destroy.owl.carousel');
    this.$owlElement = null;
  }
}