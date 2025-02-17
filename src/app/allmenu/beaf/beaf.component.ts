import { ServicesService } from './../../services/services-all/services.service';
import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-beaf',
  imports: [RouterLink],
  templateUrl: './beaf.component.html',
  styleUrl: './beaf.component.scss'
})
export class BeafComponent implements OnInit{
 private readonly _categoriesService=inject(CategoriesService);
 private readonly _servicesService = inject(ServicesService);


 nameFood!:NameFood[];

  // interfaceMails!:InterfaceMails[];
ngOnInit(): void {

    

    this._categoriesService.getCategories("beef").subscribe({
      next:(res)=>{
        this.nameFood = res.meals

      // this.interfaceMails = rmeals
      console.log( this.nameFood)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{

      }
    })

    
}


}
