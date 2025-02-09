import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { AllmenuComponent } from "../allmenu.component";
import { AllComponent } from "../all/all.component";
import { MealsComponent } from "../../meals/meals.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, RouterOutlet, SidebarComponent, AllmenuComponent, AllComponent, MealsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  

}
