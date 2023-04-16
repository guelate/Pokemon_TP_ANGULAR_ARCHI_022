import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective{
    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeight: number = 210;

    constructor(private el: ElementRef){
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight)
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.defaultColor)
        this.el.nativeElement.style.transition = '1s';
        this.el.nativeElement.style.scale = 1.09;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor)
        this.el.nativeElement.style.scale = 1;
    }


    private setBorder(color: string){
        let border = ' solid 4px '+ color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number){
        this.el.nativeElement.style.height = height +'px';
    }
}