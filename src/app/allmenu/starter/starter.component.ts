import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';

@Component({
  selector: 'app-starter',
  imports: [],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss'
})
export class StarterComponent  implements OnInit{
private readonly _categoriesService=inject(CategoriesService);
 nameFood!:NameFood[];


ngOnInit(): void {
    this._categoriesService.getCategories("starter").subscribe({
      next:(res)=>{
        this.nameFood = res.meals

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




