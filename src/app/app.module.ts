import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsDemoComponent
  ],
  imports: [
    BrowserModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
