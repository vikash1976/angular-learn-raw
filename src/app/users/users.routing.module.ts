import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

/* For lazy loading to work replace 'users' with ''*/
const userRoutes: Routes = [    
    { path: '', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] }
]
@NgModule({
    
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]

})
export class UserRoutingModule {

}