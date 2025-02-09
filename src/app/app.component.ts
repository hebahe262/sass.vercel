import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbitService } from './services/flowbit.service';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./allmenu/home/home.component";
import { MealsComponent } from "./meals/meals.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FooterComponent, HomeComponent, MealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'assigmant2-angular-talwind';
  constructor(private _flowbiteService: FlowbitService) {}

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

}
