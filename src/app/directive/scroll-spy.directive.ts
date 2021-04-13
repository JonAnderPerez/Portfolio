import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {

  @Input() public spiedTag = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private _el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string;
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;

    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if(this.spiedTag.some(spiedTag => spiedTag === element.tagName)) {
        if((element.offsetTop - parentOffset) <= scrollTop){
          currentSection = element.id;
        }
      }
    }

    if(currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }

  }

}