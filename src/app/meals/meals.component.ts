// import { InterfaceMails } from './../interfaces/interface-mails';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ServicesService } from '../services/services-all/services.service';
import { InterfaceMails } from '../interfaces/interface-mails';

@Component({
  selector: 'app-meals',
  imports: [],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent  {
  @Input({required:true}) interfaceMail !:InterfaceMails;
  

}

