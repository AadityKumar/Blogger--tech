import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";  


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
 isloggedin=false;
 constructor( private router:Router) { 

   if(localStorage.getItem('Loginuser')){
     this.isloggedin=true;
   }
 } 

 
 onLogout() {  
  localStorage.removeItem('Loginuser');
  this.isloggedin = false;  
  this.router.navigate(['/']);
} 


  ngOnInit(): void {
  }
  
navbarCollapsed = true;

toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}

}
