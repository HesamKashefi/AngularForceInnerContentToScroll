import { Routes } from '@angular/router';
import { Settings } from './Settings/settings/settings';
import { Users } from './Settings/Components/users/users';

export const routes: Routes = [
    {
        path: '',
        component: Settings,
        children: [
            {
                path: 'users',
                component: Users
            },
            {
                path: '**',
                redirectTo: 'users'
            }
        ]
    }
];
