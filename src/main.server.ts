import { bootstrapApplication } from '@angular/platform-browser';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';
import { config } from './app/app.config.server';
const bootstrap = () => bootstrapApplication(NavBarComponent,  config);


export default bootstrap;
