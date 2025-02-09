import { Component, inject, OnInit } from '@angular/core';
import { NameFood } from '../../interfaces/name-food';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-brakfast',
  imports: [],
  templateUrl: './brakfast.component.html',
  styleUrl: './brakfast.component.scss'
})
export class BrakfastComponent implements OnInit {
 private readonly _categoriesService=inject(CategoriesService);
 nameFood!:NameFood[];


ngOnInit(): void {
    this._categoriesService.getCategories("breakfast").subscribe({
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
