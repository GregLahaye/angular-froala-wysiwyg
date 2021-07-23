import { NgModule, ModuleWithProviders } from '@angular/core';

import { FroalaViewDirective } from './view.directive';
import { FroalaEditorModule } from "../editor";

@NgModule({
  declarations: [FroalaViewDirective],
  exports: [FroalaViewDirective]
})
export class FroalaViewModule {
  public static forRoot(): ModuleWithProviders<FroalaEditorModule> {
    return { ngModule: FroalaViewModule, providers: [] };
  }
}
