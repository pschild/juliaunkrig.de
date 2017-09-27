import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

import * as hljs from 'highlight.js';

@Component({
    selector: 'app-tpl-post-codeblocks',
    template: `
        <h2>{{postData.title.rendered}}</h2>
        <p [innerHtml]="postData.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./tpl-post-codeblocks.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TplPostCodeblocksComponent implements OnInit, AfterViewInit {

    @Input() postData: any;
    @Input() params: any;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        let codeBlockElements = [].slice.call(this.el.nativeElement.querySelectorAll('.code-highlight'));
        codeBlockElements.map(codeBlockEl => hljs.highlightBlock(codeBlockEl));
    }

}