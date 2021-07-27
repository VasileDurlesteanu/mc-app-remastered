import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mc-app';

  menuItems = [{
    name: 'About',
    items: [
    ]
}, {
    name: 'Our Vision',
    items: [
    ]
}, {
    name: 'Templates',
    items: [{
        name: 'Responsive',
        items: [
        ]
    }, {
        name: 'Static',
        items: [
        ]
    }]
}];

}