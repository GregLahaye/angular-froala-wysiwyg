import { NgModule } from '@angular/core';
import { FroalaEditorModule } from './editor';
import { FroalaViewModule } from './view';
import * as i0 from "@angular/core";
import * as i1 from "./editor/editor.module";
import * as i2 from "./view/view.module";
export { FroalaEditorDirective, FroalaEditorModule } from './editor';
export { FroalaViewDirective, FroalaViewModule } from './view';
var MODULES = [
    FroalaEditorModule,
    FroalaViewModule
];
var FERootModule = /** @class */ (function () {
    function FERootModule() {
    }
    FERootModule.ɵfac = function FERootModule_Factory(t) { return new (t || FERootModule)(); };
    FERootModule.ɵmod = i0.ɵɵdefineNgModule({ type: FERootModule });
    FERootModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                FroalaEditorModule.forRoot(),
                FroalaViewModule.forRoot()
            ], FroalaEditorModule,
            FroalaViewModule] });
    return FERootModule;
}());
export { FERootModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FERootModule, { imports: [i1.FroalaEditorModule, i2.FroalaViewModule], exports: [FroalaEditorModule,
        FroalaViewModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FERootModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FroalaEditorModule.forRoot(),
                    FroalaViewModule.forRoot()
                ],
                exports: MODULES
            }]
    }], null, null); })();
//# sourceMappingURL=index.js.map