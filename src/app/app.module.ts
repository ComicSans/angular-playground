import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDemoComponent } from './calculator-demo/calculator-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsDemoComponent,
    CalculatorComponent,
    CalculatorDemoComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
