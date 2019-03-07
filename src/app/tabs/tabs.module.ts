import { NgModule } from '@angular/core';
import { TabsComponent, TabComponent } from './tabs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    TabComponent
  ]
})
export class TabsModule { }
