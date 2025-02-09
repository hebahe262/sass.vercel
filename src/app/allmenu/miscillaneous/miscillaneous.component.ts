import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';

@Component({
  selector: 'app-miscillaneous',
  imports: [],
  templateUrl: './miscillaneous.component.html',
  styleUrl: './miscillaneous.component.scss'
})
export class MiscillaneousComponent implements OnInit {
private readonly _categoriesService=inject(CategoriesService);
 nameFood!:NameFood[];


ngOnInit(): void {
    this._categoriesService.getCategories("miscellaneous").subscribe({
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
