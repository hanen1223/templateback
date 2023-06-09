import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/product', title: 'product',  icon:'objects_spaceship', class: '' },
    { path: '/activity', title: 'activity',  icon:'design_bullet-list-67', class: '' },
    { path: '/forum', title: 'forum',  icon:'ui-1_bell-53', class: '' },
    { path: '/campcenter', title: 'campcenter',  icon:'education_atom', class: '' },
    { path: '/front', title: 'front',  icon:'text_caps-small', class: '' },
    { path: '/front', title: 'front',  icon:'location_map-big', class: '' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
