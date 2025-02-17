import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services-all/services.service';
import { InterfaceMails } from '../interfaces/interface-mails';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly  _activatedRoute=inject(ActivatedRoute)
  private readonly  _servicesService=inject(ServicesService)

  detailsproduct: InterfaceMails | null = null
  idprodect!:string 

  ngOnInit(): void {
        this.getIdproduct();
         
          this._servicesService.getSpecificProducts(this.idprodect).subscribe({
            next:(res)=>{
              
              this.detailsproduct = res.meals[0];
              console.log(res)
            },
            error:(err)=>{
              console.log(err);
            }
          })
        }
      
        getIdproduct(){
          this._activatedRoute.paramMap.subscribe({
            next: (res) =>{
            this.idprodect =  res.get("id")!;
            }
            })
        }
  }




