import { Component } from '@angular/core';


@Component({
  selector:'dynamic-tabs',
  templateUrl: './dynamictab.component.html'
})
export class DynamicTabComponent {

  tabs = [
    {icon:"fa fa-plus",methodName:"addNewTab();",disabled:"true"}
  ]

  addNewTab(): void{
    this.tabs.splice(this.tabs.length-1,1);
    console.log(this.tabs);
    const newTabIndex = this.tabs.length +1;
    this.tabs.push({title: `New User${newTabIndex+1}`,content :'Input data for new user',disabled : false,removable:true});
    this.tabs.push({icon:"fa fa-plus",methodName:"addNewTab();",disabled:"true"});
    this.tabs[newTabIndex-1].active = true;

  }

  removeTabHandler(tab: any):void{
    this.tabs.splice(this.tabs.indexOf(tab),1);
    console.log('${tab.title} tab removed')
  }
  constructor( ) { }

}
