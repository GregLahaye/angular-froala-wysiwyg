import { NgModule } from '@angular/core';
import { FroalaEditorDirective } from './editor.directive';
import * as i0 from "@angular/core";
var FroalaEditorModule = /** @class */ (function () {
    function FroalaEditorModule() {
    }
    FroalaEditorModule.forRoot = function () {
        return { ngModule: FroalaEditorModule, providers: [] };
    };
    FroalaEditorModule.ɵfac = function FroalaEditorModule_Factory(t) { return new (t || FroalaEditorModule)(); };
    FroalaEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: FroalaEditorModule });
    FroalaEditorModule.ɵinj = i0.ɵɵdefineInjector({});
    return FroalaEditorModule;
}());
export { FroalaEditorModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FroalaEditorModule, { declarations: [FroalaEditorDirective], exports: [FroalaEditorDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FroalaEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [FroalaEditorDirective],
                exports: [FroalaEditorDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=editor.module.js.map