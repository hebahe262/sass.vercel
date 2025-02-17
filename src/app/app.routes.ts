import { Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { HomeComponent } from './allmenu/home/home.component';
import { AllmenuComponent } from './allmenu/allmenu.component';
import { BeafComponent } from './allmenu/beaf/beaf.component';
import { BrakfastComponent } from './allmenu/brakfast/brakfast.component';
import { ChikenComponent } from './allmenu/chiken/chiken.component';
import { DesirtComponent } from './allmenu/desirt/desirt.component';
import { GoatComponent } from './allmenu/goat/goat.component';
import { LambComponent } from './allmenu/lamb/lamb.component';
import { MiscillaneousComponent } from './allmenu/miscillaneous/miscillaneous.component';
import { ParkComponent } from './allmenu/park/park.component';
import { PastaComponent } from './allmenu/pasta/pasta.component';
import { SeafoodComponent } from './allmenu/seafood/seafood.component';
import { SideComponent } from './allmenu/side/side.component';
import { StarterComponent } from './allmenu/starter/starter.component';
import { VegnComponent } from './allmenu/vegn/vegn.component';
import { VegetrianComponent } from './allmenu/vegetrian/vegetrian.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllComponent } from './allmenu/all/all.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:"", redirectTo:"Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent, children:[
        {path:"", redirectTo:"All",pathMatch:"full"},
      {path:"All",component:AllComponent},
      {path:"beaf",component:BeafComponent},
      {path:"breakfast",component:BrakfastComponent},
      {path:"chiken",component:ChikenComponent},
      {path:"desrt",component:DesirtComponent},
      {path:"goat",component:GoatComponent},
      {path:"lam",component:LambComponent},
      {path:"misceallanos",component:MiscillaneousComponent},
      {path:"park",component:ParkComponent},
      {path:"pasta",component:PastaComponent},
      {path:"seafood", component:SeafoodComponent},
      {path:"side",component:SideComponent},
      {path:"starter",component:StarterComponent},
      {path:"vegn",component:VegnComponent},
      {path:"vegetrian",component:VegetrianComponent},
      

    ]},
    {path:"details/:id",component:DetailsComponent},
    {path:"**",component:NotFoundComponent}
];
