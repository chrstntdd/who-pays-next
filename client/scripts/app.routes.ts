import {Routes} from '@angular/router';

import {DashboardRoutes} from './dashboard/index';

// ... is a spread operator to spread the objects in an array
export const routes: Routes = [
    ...DashboardRoutes
]
