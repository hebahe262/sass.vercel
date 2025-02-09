import { Component, inject, OnInit } from '@angular/core';
import { MealsComponent } from "../../meals/meals.component";
import { ServicesService } from '../../services/services-all/services.service';
import { InterfaceMails } from '../../interfaces/interface-mails';
import { BeafComponent } from "../beaf/beaf.component";

@Component({
  selector: 'app-all',
  imports: [MealsComponent, BeafComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent implements OnInit {
  private readonly _servicesService=inject(ServicesService);
  
  interfaceMails!:InterfaceMails[];
ngOnInit(): void {
    this._servicesService.getmails().subscribe({
      next:(res)=>{
      this.interfaceMails = res.meals
      console.log(this.interfaceMails)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{

      }
    })
}
}
