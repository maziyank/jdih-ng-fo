import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';

import { TematikComponent } from './components/tematik/tematik.component';
import { GridItemsComponent } from './components/grid-items/grid-items.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { SecondaryNavigationComponent } from './components/secondary-navigation/secondary-navigation.component';
import { BigSearchComponent } from './components/big-search/big-search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    MainNavigationComponent,
    SecondaryNavigationComponent,
    BigSearchComponent,
    TematikComponent,
    GridItemsComponent,
    FilterPipe,
    PaginationComponent,
    ListItemComponent,
    FloatButtonComponent,
    StatsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    MainNavigationComponent,
    SecondaryNavigationComponent,
    BigSearchComponent,
    TematikComponent,
    GridItemsComponent,
    ListItemComponent,
    PaginationComponent,
    FloatButtonComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    RouterModule
  ],
  providers: []
})

export class SharedModule { }
