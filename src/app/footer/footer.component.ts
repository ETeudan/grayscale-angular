import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'footer-section',
    templateUrl: './footer.component.html',
    styles: []
})

export class FooterComponent implements OnInit {
    currentYear:any;
    ngOnInit() {
        this.currentYear = (new Date()).getFullYear();
    }
}
