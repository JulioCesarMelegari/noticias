import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fakenews]'
})
export class FakeDirective implements OnInit {

  @Input()
  fakenews:boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.fakenews){
      this.el.nativeElement.style.textDecoration = "line-through";
    };
  }
}
