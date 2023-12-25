import { NgModule } from '@angular/core';
import { NgxVisionComponent } from './ngx-vision.component';
import { VisionDirective } from './ngx-vision.directive';



@NgModule({
  declarations: [
    NgxVisionComponent,
    VisionDirective
  ],
  imports: [
  ],
  exports: [
    NgxVisionComponent,
    VisionDirective
  ]
})
export class NgxVisionModule { }
