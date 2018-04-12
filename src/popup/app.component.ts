import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>{{href}}</div><br><br>
        <div *ngFor="let item of items">
            Item: {{item.name}}
        </div>`,
})
export class AppComponent implements OnInit {
    items: any[];
    href: string;

    private myItems = [
        { name: 'a' },
        { name: 'b' },
        { name: 'c' },
    ];

    ngOnInit() {
        this.href = window.location.href;
        const bgItems =  browser.extension.getBackgroundPage().myItems;

        console.log(this.myItems);
        console.log(bgItems);

        // Uncomment this line to see that iterating objects in Edge has no problem from the popup page itself.
        // this.items = this.myItems;

        // Uncomment this line to see that getting the same objects from the background page causes errors to occur:
        // ERROR TypeError: Object doesn't support property or method 'Symbol(Symbol.iterator)'
        // ERROR CONTEXT [object Object]
        this.items = bgItems;
    }
}
