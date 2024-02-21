import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu-component></menu-component>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
