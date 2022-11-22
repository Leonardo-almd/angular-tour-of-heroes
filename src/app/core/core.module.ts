import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';



const components = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent
]

const modules = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [CommonModule ,modules],
  exports: [components, modules]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('')
    }
  }
}
