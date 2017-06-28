
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UserRoutingModule } from './users.routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule        
    ]
})
export class UsersModule {

}