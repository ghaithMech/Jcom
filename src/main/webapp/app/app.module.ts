import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JcomSharedModule } from 'app/shared/shared.module';
import { JcomCoreModule } from 'app/core/core.module';
import { JcomAppRoutingModule } from './app-routing.module';
import { JcomHomeModule } from './home/home.module';
import { JcomEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    JcomSharedModule,
    JcomCoreModule,
    JcomHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JcomEntityModule,
    JcomAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent, SidebarComponent],
  bootstrap: [MainComponent]
})
export class JcomAppModule {}
