import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';
import { SideBarComponent } from './app/side-bar/side-bar.component';
import { FooterComponent } from './app/footer/footer.component';
import { SkillCardComponent } from './app/skill-card/skill-card.component';
import { RightCardComponent } from './app/right-card/right-card.component';
import { SpiderChartComponent } from './app/spider-chart/spider-chart.component';

bootstrapApplication(NavBarComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(SideBarComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(FooterComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(SkillCardComponent, appConfig)
  .catch((err) => console.error(err));  

bootstrapApplication(RightCardComponent, appConfig)
  .catch((err) => console.error(err));  
  
bootstrapApplication(SpiderChartComponent, appConfig)
  .catch((err) => console.error(err)); 