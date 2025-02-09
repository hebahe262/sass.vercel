import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { NameFood } from '../../interfaces/name-food';

@Component({
  selector: 'app-beaf',
  imports: [],
  templateUrl: './beaf.component.html',
  styleUrl: './beaf.component.scss'
})
export class BeafComponent implements OnInit{
 private readonly _categoriesService=inject(CategoriesService);
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
