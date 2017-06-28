import { LoggingService } from './services/logging.service';
import { AccountDataService } from './services/account-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AnotherWorklistComponent } from './worklist/another.worklist.component';
import { WorklistAddComponent } from './worklist/worklist.add.component';
import { WorklistComponent } from './worklist/worklist.component';

import { AppComponent } from './app.component';
import { MyOtherComponentComponent } from './my-other-component/my-other-component.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { JustComponentComponent } from './just-component/just-component.component';
import { DirectivesRefresherComponentComponent } from './directives-refresher-component/directives-refresher-component.component';
import { BasicHighlighterDirective } from './custom-directives/basic-highlighter.directive';
import { BetterHighlighterDirective } from './custom-directives/better-highlighter.directive';
import { EvenBetterHighlighterDirective } from './custom-directives/even-better-highlighter.directive';
import { EeevenBetterHighlighterDirective } from './custom-directives/eeeven-better-highlighter.directive';
import { NotIfDirective } from './custom-directives/not-if.directive';
import { DropdownDirective } from './custom-directives/dropdown.directive';
import { PipesRefresherComponentComponent } from './pipes/pipes-refresher-component/pipes-refresher-component.component';
import { MyCustomDirectiveDirective } from './custom-directives/my-custom-directive.directive';
import { HomeComponent } from './home/home.component';
//import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
//import { UserComponent } from './users/user/user.component';

import { UsersModule } from './users/users.module';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { FilterServersPipe } from './pipes/pipes-refresher-component/filter-servers.pipe';
import { MultiplierPipe } from './pipes/pipes-refresher-component/multiplier.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MyOtherComponentComponent,
    TaskListComponent,
    AddTaskComponent,
    AccountComponent,
    NewAccountComponent,
    JustComponentComponent,
    AnotherWorklistComponent,
    WorklistAddComponent,
    WorklistComponent,
    DirectivesRefresherComponentComponent,
    BasicHighlighterDirective,
    BetterHighlighterDirective,
    EvenBetterHighlighterDirective,
    EeevenBetterHighlighterDirective,
    NotIfDirective,
    DropdownDirective,
    PipesRefresherComponentComponent,
    MyCustomDirectiveDirective,
    //Routing Example
    HomeComponent,
    //UsersComponent,
    ServersComponent,
    //UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    FilterServersPipe,
    MultiplierPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
