import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';

@Component({
  selector: 'app-vegn',
  imports: [],
  templateUrl: './vegn.component.html',
  styleUrl: './vegn.component.scss'
})
export class VegnComponent implements OnInit {
private readonly _categoriesService=inject(CategoriesService);
 nameFood!:NameFood[];


ngOnInit(): void {
    this._categoriesService.getCategories("vegan").subscribe({
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
