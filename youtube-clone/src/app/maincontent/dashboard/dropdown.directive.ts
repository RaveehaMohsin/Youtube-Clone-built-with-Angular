import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class DropDown{
    @HostBinding('class.open') isopen = false;

    @HostListener('click') down()
    {
        this.isopen = !this.isopen;
    }

}