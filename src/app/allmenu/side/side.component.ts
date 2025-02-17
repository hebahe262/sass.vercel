import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side',
  imports: [RouterLink],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss'
})
export class SideComponent implements OnInit {
private readonly _categoriesService=inject(CategoriesService);
 nameFood!:NameFood[];


ngOnInit(): void {
    this._categoriesService.getCategories("side").subscribe({
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




