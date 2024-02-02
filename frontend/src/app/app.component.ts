import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AddDataFormComponent } from "./components/add-data-form/add-data-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, AddDataFormComponent]
})
export class AppComponent {
  title = 'frontend';
}
