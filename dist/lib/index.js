"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var webstorage_service_1 = require("./service/webstorage.service");
__export(require("./decorator/index"));
__export(require("./service/index"));
__export(require("./utility/index"));
var WebStorageModule = (function () {
    function WebStorageModule() {
    }
    return WebStorageModule;
}());
WebStorageModule = __decorate([
    core_1.NgModule({
        providers: [webstorage_service_1.LocalStorageService, webstorage_service_1.SessionStorageService]
    })
], WebStorageModule);
exports.WebStorageModule = WebStorageModule;
//# sourceMappingURL=index.js.map