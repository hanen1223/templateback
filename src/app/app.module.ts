import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ActivityComponent } from './activity/activity.component';
import { ProductComponent } from './product/product.component';
import { CampcenterComponent } from './campcenter/campcenter.component';
import { ForumComponent } from './forum/forum.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ActivityComponent,
    ProductComponent,
    CampcenterComponent,
    ForumComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
