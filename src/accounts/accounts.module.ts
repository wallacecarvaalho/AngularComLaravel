import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AccountsEditComponent } from './accounts-edit.components';
import { AccountsNewComponent } from './accounts-new.components';
import { AccountsViewComponent } from './accounts-view.components';
import { AppPaginateComponent } from '../app/app-paginate.component';
import { HttpModule } from '@angular/http';
import { AppHttpService } from '../app/app-http.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    {
        path:'accounts',
        component: AccountsComponent
    },
    {
        path:'accounts/new',
        component: AccountsNewComponent
    },
    {
        path:'accounts/:id',
        component: AccountsViewComponent
    },
    {
        path:'accounts/:id/edit',
        component: AccountsEditComponent
    }

];

@NgModule({
    imports : [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        FormsModule
    ],
    declarations:[
        AccountsComponent,
        AccountsEditComponent,
        AccountsNewComponent,
        AccountsViewComponent,
        AppPaginateComponent,
    ],
    providers:[AppHttpService]
})

export class AccountsModule {

}