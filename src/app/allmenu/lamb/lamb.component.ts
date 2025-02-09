import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';

@Component({
  selector: 'app-lamb',
  imports: [],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.scss'
})
export class LambComponent  implements OnInit{
private readonly _categoriesService=inject(CategoriesService);
 nameFood!:NameFood[];


ngOnInit(): void {
    this._categoriesService.getCategories("lamb").subscribe({
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
