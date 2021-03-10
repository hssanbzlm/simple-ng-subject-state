import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'service-state-management';
  name: string = '';

  updateName(name: string) {
    this.name = name;
  }
}
