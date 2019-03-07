import {Component, ContentChildren, Input, QueryList, AfterContentInit} from '@angular/core';

/**
 * Implementing a single tab
**/
@Component({
  selector: 'angular-tab',
  template: `<div *ngIf='active' class='tab-content'>
                 <ng-content></ng-content>
             </div>`
})
export class TabComponent {
  active: boolean;
  @Input() title;
  constructor() {
    this.active = false;
  }
}

/**
 * Implementing the tabs component to display one or more tabs
**/
@Component({
  selector: 'angular-tabs',
  styleUrls: ['tabs.component.css'],
  templateUrl: 'tabs.component.html'})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.tabs.first.active = true;
  }

  activate(tab_) {
    for (const tab of this.tabs.toArray()) {
      tab.active = false;
    }
    tab_.active = true;
  }
}
