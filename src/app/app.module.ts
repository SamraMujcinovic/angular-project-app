import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './public/page/page.component';
import { HealthDivisionComponent } from './public/health-division/health-division.component';
import { SearchComponent } from './public/search/search.component';
import { WidgetComponent } from './public/widget/widget.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { StatsComponent } from './stats/stats.component';
import { LegendComponent } from './legend/legend.component';
import { GraphComponent } from './graph/graph.component';
import { PopupComponent } from './popup/popup.component';
import { InfoTabComponent } from './info-tab/info-tab.component';
import { ErrorIconComponent } from './error-icon/error-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthDivisionComponent,
    PageComponent,
    SearchComponent,
    WidgetComponent,
    SideMenuComponent,
    StatsComponent,
    LegendComponent,
    GraphComponent,
    PopupComponent,
    InfoTabComponent,
    ErrorIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, GraphComponent],
})
export class AppModule {}
