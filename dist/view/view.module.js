import { NgModule } from '@angular/core';
import { FroalaViewDirective } from './view.directive';
import * as i0 from "@angular/core";
var FroalaViewModule = /** @class */ (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule, providers: [] };
    };
    FroalaViewModule.ɵfac = function FroalaViewModule_Factory(t) { return new (t || FroalaViewModule)(); };
    FroalaViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: FroalaViewModule });
    FroalaViewModule.ɵinj = i0.ɵɵdefineInjector({});
    return FroalaViewModule;
}());
export { FroalaViewModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FroalaViewModule, { declarations: [FroalaViewDirective], exports: [FroalaViewDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FroalaViewModule, [{
        type: NgModule,
        args: [{
                declarations: [FroalaViewDirective],
                exports: [FroalaViewDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=view.module.js.map