import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    // {
    //     path: "",
    //     component: AppComponent
    //     // pathMatch: "full",
    //     // redirectTo: "home"
    // },
    // {
    //     path: "home",
    //     component: AppComponent
    // },

    // Option 1: Lazy Loading another Routing Config
    {
        path: "home",
        loadChildren: () =>
            import("@App/Home/home.routes")
                .then(module => module.HOME_ROUTES)
    },

    // // Option 2: Directly Lazy Loading a Standalone Component
    // {
    //     path: "next-flight",
    //     loadComponent: () =>
    //         import("./next-flight/next-flight.component")
    //             .then(m => m.NextFlightComponent)
    // },
];
