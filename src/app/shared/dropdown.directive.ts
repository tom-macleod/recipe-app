import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('mouseover') open() {
        this.isOpen = true;
    } 

    @HostListener('mouseleave') close() {
        this.isOpen = false;
    } 

}