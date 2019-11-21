import { RouterModule, Routes } from "@angular/router";
import {NgModule} from '@angular/core';

import { FilterComponent } from './filter/filter.component';
import { PersonAddComponent } from './person-add/person-add.component';

const routes: Routes = [
    {path: 'filter', component: FilterComponent},
    {path: 'add', component: PersonAddComponent}
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })

    export class AppRoutingModule {}