import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',      component: UserProfileComponent },
    { path: 'product',      loadChildren: () => import('../../product/product.module').then(x=>x.ProductModule) },
    { path: 'activity',      loadChildren: () => import('../../activity/activity.module').then(x=>x.ActivityModule) },
    { path: 'campcenter',      loadChildren: () => import('../../campcenter/campcenter.module').then(x=>x.CampcenterModule) },
    { path: 'forum',      loadChildren: () => import('../../forum/forum.module').then(x=>x.ForumModule) }
   


];
