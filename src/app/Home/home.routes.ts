import { Routes } from "@angular/router";

import { VideoListComponent } from "@App/Home/VideoList/VideoListComponent";
// import { GeneralComponent } from "@App/Settings/General/GeneralComponent";
// import { PersonalComponent } from "@App/Settings/Personal/PersonalComponent";

export const HOME_ROUTES: Routes = [
    {
        path: "video-list",
        component: VideoListComponent,
        // loadChildren: () => import("@App/Core/Dashboard/DashboardModule").then(module => module.DashboardModule),
        // canActivate: [AuthenticationGuard]
    }//,
    // {
    //     path: "general",
    //     component: GeneralComponent
    // },
    // {
    //     path: "personal",
    //     component: PersonalComponent
    // }
];
