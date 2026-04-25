import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
