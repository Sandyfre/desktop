import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  title = 'todolistpractice';

  @ViewChild(MatSidenav)
   sidenav !: MatSidenav;

   constructor(private observer:BreakpointObserver ) {

   }

   ngAfterViewInit(){
    this.observer.observe([Breakpoints.HandsetPortrait]).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open(); 
      }
    });
   }
}
