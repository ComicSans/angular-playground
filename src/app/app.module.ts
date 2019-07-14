import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDemoComponent } from './calculator-demo/calculator-demo.component';
import { TaskListComponent } from './task-list/task-list.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TabsDemoComponent,
    CalculatorComponent,
    CalculatorDemoComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
