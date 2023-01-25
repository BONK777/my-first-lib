import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    MyLibComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
