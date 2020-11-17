(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2KC":
/*!***************************************************************************!*\
  !*** ./src/app/emprestimo/colaborador-form/colaborador-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: ColaboradorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradorFormComponent", function() { return ColaboradorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_colaborador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/colaborador */ "ZT7j");
/* harmony import */ var _colaborador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colaborador.service */ "t05J");
/* harmony import */ var _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/functions/avisoToast */ "GxR1");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");








class ColaboradorFormComponent {
    constructor(colaboradorService, fb, toast) {
        this.colaboradorService = colaboradorService;
        this.fb = fb;
        this.toast = toast;
    }
    createColaborador(colaborador) {
        this.formColaborador = this.fb.group({
            nome: [colaborador.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])],
            telefone: [colaborador.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)])],
            email: [colaborador.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
        });
        return this.formColaborador;
    }
    ngOnInit() {
        this.createColaborador(new _shared_colaborador__WEBPACK_IMPORTED_MODULE_2__["Colaborador"]());
    }
    onSubmit(colaborador) {
        if (this.validaDados(this.formColaborador) == 1) {
            this.inscricao = this.colaboradorService.postColaborador(colaborador).subscribe(() => {
                this.formColaborador.reset();
                this.toast.miToast('Colaborador cadastrado com sucesso!', 2000);
            });
        }
        else {
            if (this.validaDados(this.formColaborador) == 2) {
                this.toast.miToast('Todos os campos são invalidos. Por favor verifique.', 2000);
            }
            else if (this.validaDados(this.formColaborador) == 3) {
                this.toast.miToast('O nome informado é inválido! Deve conter de 3 a 30 caracteres.', 2000);
            }
            else if (this.validaDados(this.formColaborador) == 4) {
                this.toast.miToast('O email informado é inválido! Por favor verifique.', 2000);
            }
            else {
                this.toast.miToast('O telefone informado é inválido! Por favor verifique!', 2000);
            }
        }
    }
    validaDados(colaborador) {
        if (colaborador.valid) {
            return 1;
        }
        else {
            if (this.formColaborador.controls['nome'].status == 'INVALID' && this.formColaborador.controls['email'].status == 'INVALID' && this.formColaborador.controls['telefone'].status == 'INVALID') {
                return 2;
            }
            else if (this.formColaborador.controls['nome'].status == 'INVALID') {
                return 3;
            }
            else if (this.formColaborador.controls['email'].status == 'INVALID') {
                return 4;
            }
            else if (this.formColaborador.controls['telefone'].status == 'INVALID') {
                return 5;
            }
        }
    }
}
ColaboradorFormComponent.ɵfac = function ColaboradorFormComponent_Factory(t) { return new (t || ColaboradorFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__["avisoToast"])); };
ColaboradorFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColaboradorFormComponent, selectors: [["app-colaborador-form"]], decls: 27, vars: 1, consts: [[1, "container", 3, "formGroup"], [1, "row"], [1, "col", "s12"], [1, "input-field", "col", "s12"], [1, "material-icons", "prefix"], ["for", "nome"], ["id", "nome", "name", "nome", "type", "text", "formControlName", "nome", 1, "validate"], [1, "input-field", "col", "s6"], ["for", "telefone"], ["id", "telefone", "name", "telefone", "type", "text", "formControlName", "telefone", "mask", "(00) 0000-0000||(00) 0 0000-0000", 1, "validate"], ["for", "email"], ["id", "email", "name", "email", "type", "email", "formControlName", "email", 1, "validate"], [1, "row", "center"], ["type", "submit", "name", "action", 1, "btn", "red", "darken-1", 3, "click"]], template: function ColaboradorFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cadastro de colaborador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColaboradorFormComponent_Template_button_click_25_listener() { return ctx.onSubmit(ctx.formColaborador.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formColaborador);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc3RpbW8vY29sYWJvcmFkb3ItZm9ybS9jb2xhYm9yYWRvci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColaboradorFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-colaborador-form',
                templateUrl: './colaborador-form.component.html',
                styleUrls: ['./colaborador-form.component.css']
            }]
    }], function () { return [{ type: _colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__["avisoToast"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\suporte\Desktop\targetSistemas\emprestimo_equipamento\src\main.ts */"zUnb");


/***/ }),

/***/ "2VbG":
/*!*************************************************************!*\
  !*** ./src/app/emprestimo/item-form/item-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function() { return ItemFormComponent; });
/* harmony import */ var _shared_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/item */ "3lN8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.service */ "u3Lc");
/* harmony import */ var _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/functions/avisoToast */ "GxR1");







class ItemFormComponent {
    constructor(itemService, fb, toast) {
        this.itemService = itemService;
        this.fb = fb;
        this.toast = toast;
    }
    createItem(item) {
        this.formItem = this.fb.group({
            qtdRestante: [item.qtdRestante, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])],
            marca: [item.marca, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])],
            item: [item.item, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])],
        });
    }
    ngOnInit() {
        this.createItem(new _shared_item__WEBPACK_IMPORTED_MODULE_0__["Item"]());
    }
    onSubmit(item) {
        if (this.validaDados(this.formItem) == 1) {
            this.inscricao = this.itemService.postItem(item).subscribe(() => {
                this.formItem.reset();
                this.toast.miToast('Item cadastrado com sucesso!', 2000);
            });
        }
        else {
            if (this.validaDados(this.formItem) == 2) {
                this.toast.miToast('Todos os campos são invalidos. Por favor verifique.', 2000);
            }
            else if (this.validaDados(this.formItem) == 3) {
                this.toast.miToast('A quantidade informada é inválida! A quantidade mínima permitida é 1.', 2000);
            }
            else if (this.validaDados(this.formItem) == 4) {
                this.toast.miToast('A marca informada é inválida! A marca deve ter pelo menos 1 caractere.', 2000);
            }
            else {
                this.toast.miToast('O item informado é inválido! O item deve ter pelo menos 1 caractere!', 2000);
            }
        }
    }
    validaDados(item) {
        if (item.valid) {
            return 1;
        }
        else {
            if (this.formItem.controls['qtdRestante'].status == 'INVALID' && this.formItem.controls['marca'].status == 'INVALID' && this.formItem.controls['item'].status == 'INVALID') {
                return 2;
            }
            else if (this.formItem.controls['qtdRestante'].status == 'INVALID') {
                return 3;
            }
            else if (this.formItem.controls['marca'].status == 'INVALID') {
                return 4;
            }
            else if (this.formItem.controls['item'].status == 'INVALID') {
                return 5;
            }
        }
    }
}
ItemFormComponent.ɵfac = function ItemFormComponent_Factory(t) { return new (t || ItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__["avisoToast"])); };
ItemFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItemFormComponent, selectors: [["app-item-form"]], decls: 25, vars: 1, consts: [[1, "container", 3, "formGroup"], [1, "row"], [1, "input-field", "col", "s3"], [1, "material-icons", "prefix"], ["for", "quantidade"], ["type", "number", "name", "quantidade", "formControlName", "qtdRestante"], [1, "input-field", "col", "s4"], ["for", "item"], ["type", "text", "name", "item", "formControlName", "item"], ["for", "marca"], ["type", "text", "name", "marca", "formControlName", "marca"], [1, "row", "center"], ["type", "submit", "name", "action", 1, "btn", "red", "darken-1", 3, "click"]], template: function ItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cadastro de item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "filter_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Qtde. Dispon\u00EDvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "desktop_windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "business_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemFormComponent_Template_button_click_23_listener() { return ctx.onSubmit(ctx.formItem.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formItem);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc3RpbW8vaXRlbS1mb3JtL2l0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ItemFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-item-form',
                templateUrl: './item-form.component.html',
                styleUrls: ['./item-form.component.css']
            }]
    }], function () { return [{ type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__["avisoToast"] }]; }, null); })();


/***/ }),

/***/ "3lN8":
/*!*******************************************!*\
  !*** ./src/app/emprestimo/shared/item.ts ***!
  \*******************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
}


/***/ }),

/***/ "AdNH":
/*!******************************************************************!*\
  !*** ./src/app/emprestimo/emprestimo-form/emprestimo.service.ts ***!
  \******************************************************************/
/*! exports provided: EmprestimoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoService", function() { return EmprestimoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EmprestimoService {
    constructor(http) {
        this.http = http;
        this.emitirPDF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.baseUrl = 'http://localhost:80/emprestimo';
    }
    postEmprestimo(emprestimo) {
        const cadastrarUrl = `${this.baseUrl}`;
        this.emitirPDF.emit(emprestimo);
        return this.http.post(cadastrarUrl, emprestimo);
    }
    postEmprestimoDevolvido(emprestimo) {
        emprestimo.forEach(element => {
            console.log(element['id_emprestimo']);
            const postEmprestimoDevolvido = `${this.baseUrl}/${element['id_emprestimo']}`;
            const obj = { "devolvido": true };
            this.http.post(postEmprestimoDevolvido, obj).subscribe();
        });
    }
    getEmprestimosColaborador() {
        const getAllEmprestimo = `${this.baseUrl}/colaborador`;
        return this.http.get(getAllEmprestimo);
    }
    getEmprestimoById(id) {
        const getEmprestimoId = `${this.baseUrl}/colaborador/${id}`;
        return this.http.get(getEmprestimoId);
    }
}
EmprestimoService.ɵfac = function EmprestimoService_Factory(t) { return new (t || EmprestimoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmprestimoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmprestimoService, factory: EmprestimoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GZcK":
/*!*************************************************!*\
  !*** ./src/app/emprestimo/emprestimo.module.ts ***!
  \*************************************************/
/*! exports provided: options, EmprestimoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoModule", function() { return EmprestimoModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _emprestimo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emprestimo.routing.module */ "HN4c");
/* harmony import */ var _emprestimo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emprestimo.component */ "PRiO");
/* harmony import */ var _emprestimo_form_emprestimo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emprestimo-form/emprestimo-form.component */ "NgpI");
/* harmony import */ var _emprestimo_detalhe_emprestimo_detalhe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emprestimo-detalhe/emprestimo-detalhe.component */ "jYah");
/* harmony import */ var _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-form/item-form.component */ "2VbG");
/* harmony import */ var _colaborador_form_colaborador_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colaborador-form/colaborador-form.component */ "+2KC");













const options = null;
class EmprestimoModule {
}
EmprestimoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmprestimoModule });
EmprestimoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EmprestimoModule_Factory(t) { return new (t || EmprestimoModule)(); }, providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_4__["MaskPipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _emprestimo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmprestimoRoutingModuleModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmprestimoModule, { declarations: [_emprestimo_component__WEBPACK_IMPORTED_MODULE_6__["EmprestimoComponent"],
        _emprestimo_form_emprestimo_form_component__WEBPACK_IMPORTED_MODULE_7__["EmprestimoFormComponent"],
        _emprestimo_detalhe_emprestimo_detalhe_component__WEBPACK_IMPORTED_MODULE_8__["EmprestimoDetalheComponent"],
        _colaborador_form_colaborador_form_component__WEBPACK_IMPORTED_MODULE_10__["ColaboradorFormComponent"],
        _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_9__["ItemFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _emprestimo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmprestimoRoutingModuleModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EmprestimoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _emprestimo_component__WEBPACK_IMPORTED_MODULE_6__["EmprestimoComponent"],
                    _emprestimo_form_emprestimo_form_component__WEBPACK_IMPORTED_MODULE_7__["EmprestimoFormComponent"],
                    _emprestimo_detalhe_emprestimo_detalhe_component__WEBPACK_IMPORTED_MODULE_8__["EmprestimoDetalheComponent"],
                    _colaborador_form_colaborador_form_component__WEBPACK_IMPORTED_MODULE_10__["ColaboradorFormComponent"],
                    _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_9__["ItemFormComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _emprestimo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmprestimoRoutingModuleModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forChild()
                ],
                providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_4__["MaskPipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "GxR1":
/*!***********************************************************!*\
  !*** ./src/app/emprestimo/shared/functions/avisoToast.ts ***!
  \***********************************************************/
/*! exports provided: avisoToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avisoToast", function() { return avisoToast; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "TVxV");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);



class avisoToast {
    constructor() { }
    miToast(msg, tempoMs) {
        new materialize_css__WEBPACK_IMPORTED_MODULE_1__["Toast"]({
            html: msg,
            displayLength: tempoMs
        });
    }
}
avisoToast.ɵfac = function avisoToast_Factory(t) { return new (t || avisoToast)(); };
avisoToast.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: avisoToast, factory: avisoToast.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](avisoToast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HN4c":
/*!*********************************************************!*\
  !*** ./src/app/emprestimo/emprestimo.routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EmprestimoRoutingModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoRoutingModuleModule", function() { return EmprestimoRoutingModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _emprestimo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emprestimo.component */ "PRiO");
/* harmony import */ var _emprestimo_detalhe_emprestimo_detalhe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emprestimo-detalhe/emprestimo-detalhe.component */ "jYah");
/* harmony import */ var _emprestimo_form_emprestimo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emprestimo-form/emprestimo-form.component */ "NgpI");
/* harmony import */ var _colaborador_form_colaborador_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colaborador-form/colaborador-form.component */ "+2KC");
/* harmony import */ var _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-form/item-form.component */ "2VbG");









const routes = [
    { path: 'cadastrar', component: _emprestimo_form_emprestimo_form_component__WEBPACK_IMPORTED_MODULE_4__["EmprestimoFormComponent"] },
    { path: 'cadastrar/colaborador', component: _colaborador_form_colaborador_form_component__WEBPACK_IMPORTED_MODULE_5__["ColaboradorFormComponent"] },
    { path: 'cadastrar/item', component: _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_6__["ItemFormComponent"] },
    { path: 'consultar', component: _emprestimo_component__WEBPACK_IMPORTED_MODULE_2__["EmprestimoComponent"], children: [
            { path: ':id', component: _emprestimo_detalhe_emprestimo_detalhe_component__WEBPACK_IMPORTED_MODULE_3__["EmprestimoDetalheComponent"] }
        ] }
];
class EmprestimoRoutingModuleModule {
}
EmprestimoRoutingModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmprestimoRoutingModuleModule });
EmprestimoRoutingModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmprestimoRoutingModuleModule_Factory(t) { return new (t || EmprestimoRoutingModuleModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmprestimoRoutingModuleModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimoRoutingModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Kveh":
/*!*************************************************!*\
  !*** ./src/app/emprestimo/shared/emprestimo.ts ***!
  \*************************************************/
/*! exports provided: Emprestimo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emprestimo", function() { return Emprestimo; });
class Emprestimo {
}


/***/ }),

/***/ "NgpI":
/*!*************************************************************************!*\
  !*** ./src/app/emprestimo/emprestimo-form/emprestimo-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmprestimoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoFormComponent", function() { return EmprestimoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_emprestimo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/emprestimo */ "Kveh");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "TVxV");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emprestimo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emprestimo.service */ "AdNH");
/* harmony import */ var _colaborador_form_colaborador_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../colaborador-form/colaborador.service */ "t05J");
/* harmony import */ var _item_form_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../item-form/item.service */ "u3Lc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/functions/avisoToast */ "GxR1");
/* harmony import */ var _pdf_generator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pdf-generator.service */ "V368");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ "tmjD");














function EmprestimoFormComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colaborador_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", colaborador_r2.id_colaborador);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colaborador_r2.nome);
} }
function EmprestimoFormComponent_div_16_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r8.id_item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r8.item, " - ", item_r8.marca, "");
} }
function EmprestimoFormComponent_div_16_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimoFormComponent_div_16_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const itemIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addItem(itemIndex_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmprestimoFormComponent_div_16_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimoFormComponent_div_16_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return []; };
function EmprestimoFormComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "desktop_windows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Selecione um item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmprestimoFormComponent_div_16_option_8_Template, 2, 3, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Selecione o item emprestado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "filter_1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Data Empresimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EmprestimoFormComponent_div_16_a_24_Template, 3, 0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EmprestimoFormComponent_div_16_a_25_Template, 3, 0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.itens);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 == i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 == i_r4);
} }
class EmprestimoFormComponent {
    constructor(emprestimoService, colaboradorService, itemService, fb, router, toast, pdfGeneratorService) {
        this.emprestimoService = emprestimoService;
        this.colaboradorService = colaboradorService;
        this.itemService = itemService;
        this.fb = fb;
        this.router = router;
        this.toast = toast;
        this.pdfGeneratorService = pdfGeneratorService;
    }
    ngOnInit() {
        this.colaboradorService.getColaboradores().subscribe(colaboradores => {
            this.colaboradores = colaboradores;
        });
        this.itemService.getItens().subscribe(itens => {
            this.itens = itens;
        });
        this.createEmprestimo(new _shared_emprestimo__WEBPACK_IMPORTED_MODULE_2__["Emprestimo"]());
        this.iniciaSelect();
    }
    createEmprestimo(form) {
        this.formEmprestimo = this.fb.group({
            id_colaborador: [form.id_colaborador, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            itensArray: this.fb.array([
                this.createItem(form)
            ]),
        });
    }
    iniciaSelect() {
        setTimeout(() => {
            var elems = document.querySelectorAll('select');
            var instances = materialize_css__WEBPACK_IMPORTED_MODULE_3__["FormSelect"].init(elems);
        }, 100);
    }
    addItem(form) {
        this.iniciaSelect();
        this.itensArray.push(this.createItem(form));
    }
    removeItem() {
        var last = this.itensArray.length;
        if (this.itensArray.length > 1) {
            this.itensArray.removeAt(last - 1);
        }
    }
    createItem(form) {
        return this.fb.group({
            id_item: [form.id_item, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qtdEmprestada: [form.qtdEmprestada, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])],
            dtEmprestimo: [form.dtEmprestimo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get itensArray() {
        return this.formEmprestimo.get('itensArray');
    }
    onSubmit(emprestimo) {
        //Variavel emprestimoGamb usada pra fazer verificações nos dados antes de salvar no bd
        let emprestimoGamb;
        //Variavel emprestimos utilizada para enviar dados do emprestimo para geração do termo de responsabilidade
        let emprestimos = [];
        if (this.formEmprestimo.valid) {
            for (let i = 0; i < emprestimo['itensArray'].length; i++) {
                emprestimoGamb = {
                    id_colaborador: emprestimo['id_colaborador'],
                    id_item: emprestimo['itensArray'][i]['id_item'],
                    qtdEmprestada: emprestimo['itensArray'][i]['qtdEmprestada'],
                    dtEmprestimo: emprestimo['itensArray'][i]['dtEmprestimo'].replace(/(\d{2})(\d{2})(\d{4})/, "$2-$1-$3")
                };
                this.inscricao = this.emprestimoService.postEmprestimo(emprestimoGamb).subscribe(() => {
                    // this.router.navigate([''])
                });
                emprestimos.push(emprestimoGamb);
            }
            //Gera termo de responsabilidade após salvar dados do emprestimo no BD
            setTimeout(() => {
                this.pdfGeneratorService.generatePDF(emprestimos);
            }, 1000);
            //Toast para validação do formulário e aviso em caso de sucesso.
            this.toast.miToast('Emprestimo cadastrado com sucesso!\nAguarde enquanto o termo de responsabilidade é gerado.', 3000);
        }
        else {
            this.toast.miToast(`Forumlário inválido!\nPor favor preencha os campos corretamente!`, 4000);
        }
    }
}
EmprestimoFormComponent.ɵfac = function EmprestimoFormComponent_Factory(t) { return new (t || EmprestimoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emprestimo_service__WEBPACK_IMPORTED_MODULE_4__["EmprestimoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_colaborador_form_colaborador_service__WEBPACK_IMPORTED_MODULE_5__["ColaboradorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_item_form_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_8__["avisoToast"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pdf_generator_service__WEBPACK_IMPORTED_MODULE_9__["PdfGeneratorService"])); };
EmprestimoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmprestimoFormComponent, selectors: [["app-emprestimo-form"]], decls: 20, vars: 5, consts: [[1, "container"], [1, "row"], [1, "col", "s12", 3, "formGroup"], [1, "input-field", "col", "s12"], [1, "material-icons", "prefix"], ["id", "usuario", "formControlName", "id_colaborador"], ["disabled", "", "selected", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "usuario"], ["data-error", "wrong", "data-success", "right", 1, "helper-text"], ["formArrayName", "itensArray", 4, "ngFor", "ngForOf"], [1, "row", "center"], ["type", "submit", "name", "action", 1, "btn", "red", "darken-1", 3, "click"], [3, "value"], ["formArrayName", "itensArray"], [3, "formGroupName"], [1, "input-field", "col", "s5"], ["id", "item", "formControlName", "id_item"], ["for", "item"], [1, "input-field", "col", "s3"], ["for", "qtdEmprestada"], ["type", "number", "name", "qtdEmprestada", "formControlName", "qtdEmprestada"], ["for", "dtEmprestimo"], ["type", "text", "name", "dtEmprestimo", "formControlName", "dtEmprestimo", "mask", "00/00/0000"], [1, "row", "bottom"], ["class", "btn-floating btn-floating-add btn-small waves-effect waves-light right red darken-1", 3, "click", 4, "ngIf"], [1, "btn-floating", "btn-floating-add", "btn-small", "waves-effect", "waves-light", "right", "red", "darken-1", 3, "click"], [1, "material-icons"]], template: function EmprestimoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cadastro de emprestimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Selecione um usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmprestimoFormComponent_option_12_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Selecione o usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmprestimoFormComponent_div_16_Template, 26, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimoFormComponent_Template_button_click_18_listener() { return ctx.onSubmit(ctx.formEmprestimo.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formEmprestimo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colaboradores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itensArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_mask__WEBPACK_IMPORTED_MODULE_11__["MaskDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc3RpbW8vZW1wcmVzdGltby1mb3JtL2VtcHJlc3RpbW8tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emprestimo-form',
                templateUrl: './emprestimo-form.component.html',
                styleUrls: ['./emprestimo-form.component.css'],
            }]
    }], function () { return [{ type: _emprestimo_service__WEBPACK_IMPORTED_MODULE_4__["EmprestimoService"] }, { type: _colaborador_form_colaborador_service__WEBPACK_IMPORTED_MODULE_5__["ColaboradorService"] }, { type: _item_form_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_8__["avisoToast"] }, { type: _pdf_generator_service__WEBPACK_IMPORTED_MODULE_9__["PdfGeneratorService"] }]; }, null); })();


/***/ }),

/***/ "PRiO":
/*!****************************************************!*\
  !*** ./src/app/emprestimo/emprestimo.component.ts ***!
  \****************************************************/
/*! exports provided: EmprestimoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoComponent", function() { return EmprestimoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "TVxV");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emprestimo_form_emprestimo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emprestimo-form/emprestimo.service */ "AdNH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return [a0]; };
function EmprestimoComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emprestimo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, emprestimo_r1.id_colaborador));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r1.nome);
} }
const _c1 = function () { return []; };
class EmprestimoComponent {
    constructor(emprestimoService, router) {
        this.emprestimoService = emprestimoService;
        this.router = router;
    }
    ngOnInit() {
        this.emprestimos = this.emprestimoService.getEmprestimosColaborador();
        this.iniciaSelect();
    }
    iniciaSelect() {
        setTimeout(() => {
            var elems = document.querySelectorAll('select');
            var instances = materialize_css__WEBPACK_IMPORTED_MODULE_1__["FormSelect"].init(elems);
        }, 100);
    }
    onNavigate(value) {
        if (value != "") {
            this.router.navigateByUrl(`/consultar/${value}`);
        }
    }
}
EmprestimoComponent.ɵfac = function EmprestimoComponent_Factory(t) { return new (t || EmprestimoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emprestimo_form_emprestimo_service__WEBPACK_IMPORTED_MODULE_2__["EmprestimoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EmprestimoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmprestimoComponent, selectors: [["app-emprestimo"]], decls: 17, vars: 5, consts: [[1, "container"], [1, "row"], [1, "input-field", "col", "s12"], [1, "material-icons", "prefix"], ["name", "usuario", 3, "change"], ["disabled", "", "selected", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "usuario"], [3, "value"]], template: function EmprestimoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Consulta de emprestimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmprestimoComponent_Template_select_change_8_listener($event) { return ctx.onNavigate($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Selecione o colaborador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmprestimoComponent_option_11_Template, 2, 4, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Selecione o colaborador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 2, ctx.emprestimos));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["span[_ngcontent-%COMP%]{\r\n  margin: 0px 5px;\r\n}\r\n\r\ndiv.collection[_ngcontent-%COMP%] {\r\n  margin: 5px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wcmVzdGltby9lbXByZXN0aW1vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc3RpbW8vZW1wcmVzdGltby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbn1cclxuXHJcbmRpdi5jb2xsZWN0aW9uIHtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emprestimo',
                templateUrl: './emprestimo.component.html',
                styleUrls: ['./emprestimo.component.css']
            }]
    }], function () { return [{ type: _emprestimo_form_emprestimo_service__WEBPACK_IMPORTED_MODULE_2__["EmprestimoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "TVxV");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["consultar"]; };
const _c1 = function () { return ["cadastrar/colaborador"]; };
const _c2 = function () { return ["cadastrar/item"]; };
const _c3 = function () { return ["cadastrar"]; };
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = materialize_css__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].init(elems);
});
class AppComponent {
    constructor() {
        this.title = 'Emprestimo de Equipamentos - Target';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 8, consts: [[1, "nav-wrapper", "red", "darken-1"], [1, "brand-logo", "right"], ["id", "nav-mobile", 1, "left", "hide-on-med-and-down"], [3, "routerLink"], ["data-target", "dropdown", 1, "dropdown-trigger"], [1, "material-icons", "right"], ["id", "dropdown", 1, "dropdown-content"], [1, "divider"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Colaborador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Emprestimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "V368":
/*!*********************************************************************!*\
  !*** ./src/app/emprestimo/emprestimo-form/pdf-generator.service.ts ***!
  \*********************************************************************/
/*! exports provided: PdfGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfGeneratorService", function() { return PdfGeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "5RHE");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_functions_currentDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/functions/currentDate */ "mR1/");
/* harmony import */ var _colaborador_form_colaborador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../colaborador-form/colaborador.service */ "t05J");
/* harmony import */ var _item_form_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../item-form/item.service */ "u3Lc");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");







class PdfGeneratorService {
    constructor(currentDate, colaboradorService, itemService, maskPipe) {
        this.currentDate = currentDate;
        this.colaboradorService = colaboradorService;
        this.itemService = itemService;
        this.maskPipe = maskPipe;
        //Varaiveis auxiliares
        this.emprestimos = [];
        this.colaborador = {
            nome: '',
            email: '',
            telefone: '',
        };
        this.itens = [];
    }
    getColaborador(id) {
        this.colaboradorService.getColaboradorById(id).subscribe(colaborador => {
            this.colaborador.nome = colaborador['nome'],
                this.colaborador.email = colaborador['email'],
                this.colaborador.telefone = this.maskPipe.transform(colaborador['telefone'], "(99) 99999-9999");
        });
        return this.colaborador;
    }
    getEmprestimos(emprestimos) {
        this.emprestimos = emprestimos;
        return this.emprestimos;
    }
    getItens(emprestimos) {
        var itensArray = [];
        for (let i = 0; i < emprestimos.length; i++) {
            this.itemService.getItemById(emprestimos[i]['id_item']).subscribe(item => {
                itensArray.push([
                    emprestimos[i]['qtdEmprestada'],
                    item['item'],
                    item['marca'],
                    emprestimos[i]['dtEmprestimo'].replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
                ]);
            });
        }
        return itensArray;
    }
    generatePDF(emprestimos) {
        this.getEmprestimos(emprestimos);
        let user = this.getColaborador(this.emprestimos[0]['id_colaborador']);
        let rows = this.getItens(this.emprestimos);
        let columns = ['Quantidade', "Item", "Marca", "Data"];
        //Parametros iniciais de posicionamento de parse das imagens usadas para base64
        let yCoordinate = 50;
        let xCoordinate = 25;
        let imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAABhCAYAAADMdqO0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABOGSURBVHhe7Z0JVFXVGseds55NappTg73Gt95avddqraempZallpVW2uyUOAWUOIAhDkkqICgqYc6ZCoKKJmjOU0qKmiLmnIaKM1dUBMHv7f/m7Mu5h3PuPSBc7qH9X+tb917O3vvse86PPXz72+dWIikpN0tCJ+V2Seik3C4JnZTbJaGTcrskdFJul4ROyu2S0Em5XRUCOltGBt3KyVE+SXm6LA3dzawsSgoOpsnt2tFVBp6UNWRJ6NCq7VmyhL578UUaWKkSfdO0KWVduKAclfJ0WQ66UykpFN2lC/WvWpX6M+BgQU8/LaGzkCwD3cUTJyjOz498772XBjDQ+jHrK6GzpDweupzr12lzVBSNePJJB9iESeisJ4+GLjUpicJatbJ3o2rYJHTWlUdCl75/P83+5BPyueceQ9iESeisJ4+CznbuHCWNGEHD69blXakeZFqT0FlPHgFdzrVrtH3OHBr53HPkV7kyTahajYZXrsLdIV4qwPRMQmc9lTt0hzdupEnt2nF4YF8x6EIYdKHMgqtWpSEMPkwejOCT0FlP5QZdxqFDtMDLi4/bRFcKsAR0AjzYmCpV6etKVexpJHTWltuhu5GZSavHjyf/xo2LuEC00KnhQ5cbVKUKebPjSCfgk9BZT26DLi83l1JiY2ns88/bu1IBmyvohAG+8cz8GXwAFukldNaTW6A7kZxM0zp1ogHVqunCJswVdMIA31jW5Q5m4z3AF/jUUxI6C6lMocPSVYy3N/nUqlWkK9Uzs9DBxHjvOwbfuGeeoeuXLytnlfJ0lQl02TYbrY2IoLFNm9I3rCs04/qAFQe6iczCqlWnmDZt6M/16+l2fr5ydilPV6lDtzchgUKaN+et2mAFoGBmQ9h7Z64PmBnowphFMJv17LO0N3o65d28qZxZyioqNehO7t5NM7p2Je+aNe2D/K8ZQJh1ohsEMKNZVwioBGDFhS6c2bSHG9CmocMo68wZ5cxSVtMdQ2c7e5YSAgJoUO3avBsV4zY1dAIawIfPgQy+Lys5uj6MoEMewBZavQYlfNCVMlJ2K2eWsqpKDF321au09YcfaASbOepNEvSgU4M0jpk/m31iNivA00KHrhQ2v1lzOsK67fzcXOXsUlZWiaBLW72aItq2NfS3CYCMoBMG+OD6wHor8vRhBugAGlq37x99jHZNmkQ5mZnKmaUqgooFXXpqKs3t0YMG1KjBWzctaGozAx1MjPdGMfh8lDyRtevQOh9fsp08qZxZqiLJNHSHEhNpRKNGTp27ajMLndpCq1an6Mcep/Rt25Sz6usmm7H++ON8mjw5kiZNmszf37hxQzkqVRa6yoZTs2bNsl/z2NjFlF9CN5Vp6HZODKcw1hrBDeLK9QEzC504PvWuuynuvtq0sWVr5YzGwgXo3LkLNW/eghveX7lyRTkqVRY6c+YMtWv3uv2af/bZ53Tr1i3laPFkGroURnikAgi6Ql+d2WdxoMPfYZOq30U//uMBWvbgQ7Sydn3a8NIrdPv2beWs+gJ0H7CZbDM2wYDhvYSubHX27Fnq2PFN+zXv2bOXe6CbrAAjXB9YbRCuj+JAh79NrFadZt1zLy154CFa8WA9SmD2MzMJnWeq3KETBvi+YzaUwaV2fRhBh/ehDLbomvdQ7P11aDmDDAbgJHSeLY+BDgbwYAi0HMQgE8CpoRM2pUZNWnjvg0Vgk9B5vjwKOmHC9TGSuz4q231u46tUo4jqNWherftpKetKlz9Yvwhswu4EukzpyytT6UFX5rNXV9AJA3wItAxgwA2tXJWm312L4u6vax+3ObOSQvf++x/QuXPnuCtFWF5enpLaUbhQOTk5Dmn1DGlc1UMrbbm5LlZQUL6Zuggz+k5Gwvn1ytGznBznddVC1717D7p27ZpDGWbrV+rQiTFcJOtKVzGI9tZvQqvqPExLVXAZWUmg+9//mvEp/GuvvcasHbfXX3+Dli5dqqR21KFDh+jtt9/h03+RXs/eeKM9DR06jJKTf1NyGis1NZWCgkbymyLyow7Dhw9XUhTV9u3byc9vMDtPB4fzOrMvvuhDCQnLOajOBECmTJnKr5Gr7wlDmnff7UwTJ06kU6dOKaU4Sg0drnmLFi8VKWPZsgQltXOVGnRi3IaudO4/7qN41pUm12tMlxv/k043bEo7HmrEWztn8JUUOpj4D4ThgsTExCipHZWWlkatW7fhoKrz6BnSIO2SJfoAQxs2bGTgvFGkPNTB19dXSeWo2NhYeuWV1qbqoGfjxo2j7OxspTRHHTt2jPvQcH69vM4MeXBdDxw4oJRWKC102muO7wKHsRmVCnSALaxaDZrButL4B+ryScIyZtsZaJcYdAAPdrzBY7SpbkN+TA++0oRu0aJFSmpHAbqXX37F1A0X5bZt+yrt35+qlFCo06dPU4cOHe1p1fVAHXx8fJSUhdq3bx+1avWyQ/lmTZzD6AZjYO/t7cPPra2PK1OX3atX7yJQm4EuJiZWSe1cdwSd6Eqj7rqbYu6r7QAQoBLQCbvC7AKzgw8/Qr8oXS4AvFPoXnqpJb3zzrt8ZQLWpct7tHLlSiW1o44ePUqffPIpS1OQ1sgAmvpGhIaGKiUUavbs2Q43Aa2XyI86jB07VklZqG+//ZaXJ/K8+uprDuc1MsAt8uCc+A7abnbPnr0OZQM+9XUxMnStuIbq8jdt2qyUWiAtdC1btnIoA9czMTFJSe1cJYIOsGGygHHbT7Ue4MBoXSB60MHQ4gG+c42eoN31mvBVCAFfSScSeG+z2ZSjpaNff/2VX1hxEzBw1srf399+k5s1a8HGNMuUI/rKz8+jTz/9zJ4HN9rMmBHCMlTnzp3t9WnfvgOd1AREoPUTUOB19OjRptwauN4RERH2vKhfdPR05WiB1NDB3Dp7BXDhrCudzcZtWE0wcoEYQSdMdLl/sfHerywdygG4JYWutP10CCBo3bq1/QZ27dpNOVKoQYMG2QHC66FDh5Uj+srNzaEPP/zIXm9MVvBdzAg3GF2nyAvo0GqrtXDhQn5M1AdjR7PasmWLw3eJiJikHCmQHnRl7qfbGR5BU6pVp+k14QKpwycFeg5eYa6gE4ZWD69H2XhvS90GtNFDoEPXpYauW7cPlSOF0kKXlnZQOaIvQPfRRx/b640u06x/ETf4yy+97XkBHSYNamEci2OiPkbjWj1t3rzZ86A7EhdHCQ2bUBKDyRlswsxCJyyzyZN0iXW5+15+tUygu3z5MruwW2jevB9p1qzZTm327Dmse4lm3WvBOAfnkNCVA3SMBLrABpc73nmPt3KJTlYWYGahE2O8Uw0fp2SWflMZtHS7dqXwMRnGXbigZg03QEJXoPKBTlF+Ti6dnL+ANjZvRYlsEmC00mAGOsB2tlFTSqnXmE0iymZMBxBwc8UFLYnhHBUduq1btzp8l3A2nFKrXKETymaVSBsTTElPPE1JDD6zs1cBG1wnB+o7uk7uZPaqBx3KwaqCuJgCIPHerCGPFaErzkRi0aIY+3dBGVOnTlOOFMgjoBOyHUijXV/0pZ/rNWRdbuF4Tw86wIbu9BibNGxgkwaku1M/HcwIOrgZOnV6m6fBxYRTeMqUKbR8+XKXtnjxYmrVqtBlYjXo8Dpw4ECaNi2Kf2cjmzp1Kk2YEMJn0uq8K1asUEotkEdBB93Oy6Nza9bS1vZv8u4W8KihE+O29IZN+d+MlsNKG7qDBw/yJSqRbsCAgaZ9S1gst/LsVdQb9TJj6jxwKF+6dEkptUAeB51Q3o1sOv7DTFr3nxdpJRujYWIA2OAI3qNxBGuBcwd0Q4YMNX2hEEFhdeiKY8iH79CmTVtawxoQrTwWOqEb6emUGjiSUp7+Nx18+FFaq7PkpWdlDR2iOlyFGwlVBOhQJzOG5TIsx/Xo0ZPPYvWuv8dDJ3QpegZtY60dNt3odadak9AZq7jQ4XX06DG0bt06Wrt2raGtWbOGpVlPe/f+zmPijGQZ6HLil9HFR56iIw0epXV1GvCWzllr50nQXb9+3fIrEnFxccqRO5dloLu5eAldYtBlKuO6ffWbcN+eUVdb2tAhjEkLnVkVrL22sUNnZu3VDHRi7RV5AA5aVLPSrr1qobuTtVdXshx0YnEfkwoEdCY/BGdw0RlsaUP3559/OlwotCxwgmKh/MiRI7qGY4cPH6affvrJHpeGvH36eCmlFqq40OF7YdykzoPIlL/++ovH5jkzRJSgDuK76EG3dOkyfkzUGZDiH8/Z90UkNZYIXcmS0AlfnQDwRIPHaHPdhhw20eqVNnToShGQKG4yDOFKHTt25AAaGW4oyhV5kP/776OVUgtVXOig8PBwh/ogvAkhS4i/c25duJ8ReVA3PeiOHj1mTyMMEwTAovc9C6wD75ZdydLQCUOrd5HZH6rZLfx3pQkdhIE0bizSiRsh8jkzkRaAYE8FWhutSgLdiRMnWJff3gE8vfPrmTq9HnTwQU6YMKFYZePazJw5SynBWBUCOmGAL4ON9/bWa0K/sPHeumYtXUKHgE1Eu6L7g+G9UReBG4EH7LRt25bfjOLae++9T7/9ph9oiXB03DSkw2tqatG9BXpC7BpWSsQ51BA4M1fQQVlZWRQQMNxetitDyz9jxkwlt7HEs0zENUcwqmWhg+H41SZP0mUGX1rnri6hwyAfoeC+vl+xG+/L3gfzi+1Me/bsoZCQMPr660E8jzPDWAhrtrgZ+A830vTp0+15UBejnVR6On78OEVGRvK8vXr1cmq9e/fmLQu6SlfQQdgKiHD9UaNGsfJ97HXUM2weWr36FyWnsbBCERgYaL/mEyeGF3tLpFC5Q4dj1xhwmf96gbLHjKP89KLdmFaAEj4lbB6BIeDSFahC6nzOzIxrBWnwD4D0eC1J+DbyouXGkMGZoSXv16+/vdVzBp1a6u+kZ6i3mRZL75qXVOUGHf6WxWBD95rVZwDd2r1XySVlJLQwxYXOE1Uu0MFvdxX2Zme6mbiKbpt02P6dhdaoIBC1EDp00VaUW6EDbNfRlb7QnLKnz6TbmaW7g8uKQveGjeGTJ0/mMWxGFhg4wsFviBm1zWZuU4+nyS3QoQvFuM327H/pekAQ5Z00P+Cu6Lpy5TJfGmvRomAW7MzE7BXvEQNnVZU5dDa0bE2eomuf9aZck3s8/07KzLxCn3/enbVehVAZGVo4AAd3xenT1v3xljKFLntBDNlef4tuxi2j23kl25hb0YWWDuuxZlo6PEFg2LBhRTZZW01lCl3+2QzKP39e+SSlJ7hd4HzGysn69et1Dcc2btzEo2bMRsl4ssoUOikpPUnopNwuCZ2U2yWhk3K7JHRSbpeETsrtsix0cB0gaBJPn9RubsGmmosXLyqfCoQIECyQp6Sk8Cexq4WysI6JsG6EuOM9QrnT09Pt0SvYy4AATKQRhs8isgQRGOd13EPIn5GRYejqwDFnERvIh2cA//777zzapCLIktABMn//ABoyZAh/qjmeOr5hwwblKHHfFtYqhfC4evxyH+LksC2vT58+fA+EAAqABgQE0ODBQ3hoOBbW8T4qKsoOC/YfdOvWjW/YHjTIj/z8/OibbwLtwGAvAgI+d+zYwT8LJSWt4qHmgFkrQIsnkxs9NhUQ4zx44mdQUBAh9B5PZbe6LAkdHh2PgEIBzR9//ME30wjBmQoohRDAied6iH2daMHwN5Efr4AHgAUHf0cJCQnss+PvQCxYsIDw3A/8DeXA1C0UoHvrrU7k5eVlD51PTz/Nnw2MyGbtKgLOifIAMQJG1ecSWrBgIa+PEH46wKqRJWpZEjpsEsZ/PTz0egJ0CNkWQrru3btzz7+rgMWQkFDWOhVteQAdIoWNtH//fr5EFRoaxn8TFRo1ajSPDu7Xrx9v1dQC+Hi2yvnzF3grixB2rZYvX8EDN9HVVyRZEjq0CjNmzOCtire3N4dBvTFHCx3GXXgKUd++/fiG5ZCQEMPQckRvJCYmKp8KFR+/hG8AQquEbh2vgF8Ij+rHOW22TB5sOWbMt7yLR5g3zquFbs6cuczm8Pfbtm3jabXh34jQxQOnvbz68TLxlFCzm7M9WZadSEAY3O/atYtGjhzJu1vRRWmhE8JxDMrRrfXvP0B3B5kRdAsXLqKwsDA+CRF7UdX7MgDdsGH+/D1aVIzvMHFBN4wxpxo61Pvjjz9mYI7h4OGfBjvE9H40BLp6NYuNFZN5+cHBwcpfrStLQoenmKN7EsLNxQYWAYEWOmxmxp5QIYDQt29f3fGREXSYeODnxI2khg4tq9iyiDppocMGa7Rc8+fPp3nz5vFXTEq0MXLYCK3eGISZOlp3MRa1qiwJ3c8/r+S7o6KivudRt9jhhdYCv9MAodtTTyR2795NvXt/wX/7Cg87HDEiiP+ICKJ2tRo/foLuD58gX8+ePe2RvJGRU/g5BeiADl2uVmilMP4U0CE9unikV+vixUt8B7/6HyE+Pp4Diy4Wj4zAGBDwW12W7V5xEwHC3Llz+aMi1OMhBDju3LlL+VQgdIuYlSL9qlWrdIGDAIPeeA+zT4zr4uLi2XnjuKHFgk8Qwtht586d/L1aubm32CRhK4cPAnSYNOhNaFBndYuIFg3+QPxjod7JycmWb+UgS4/ppKwpCZ2U2yWhk3K7JHRSbpeETsrtktBJuV0SOim3S0In5XZJ6KTcLgmdlNsloZNyuyR0Um4W0f8Bm1dptaEcDb0AAAAASUVORK5CYII=';
        //Variaveis de data
        const dataCorrente = this.currentDate.currentDate();
        const diaCorrente = this.currentDate.getCurrentDay();
        const anoCorrente = this.currentDate.getCurrentYear();
        const mesCorrenteLongo = this.currentDate.getLongMonth();
        //Criação do PDF
        setTimeout(() => {
            const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__();
            //Parametros de formatação do PDF
            var pageSize = doc.internal.pageSize;
            var pageWidth = pageSize.width ? pageSize.width : pageSize.width();
            var textOptions = {
                align: 'justify',
                maxWidth: pageWidth - 51
            };
            //Cabeçalho
            doc.addImage(imgData, "PNG", 10, 5, 40, 30);
            doc.setFontSize(11);
            doc.setFont('helvetica');
            //Informações de usuario e termos.
            doc.text(`Data de Criação ${dataCorrente}`, xCoordinate, yCoordinate, textOptions);
            doc.setFontStyle('bold');
            doc.text('Termo de Responsabilidade pela Guarda e Uso de Equipamento', xCoordinate, yCoordinate += 5, textOptions);
            doc.setFontStyle("normal");
            doc.text('IDENTIFICAÇÃO DO EMPREGADO', xCoordinate, yCoordinate += 10, textOptions);
            doc.text(`Nome: ${user.nome}`, xCoordinate, yCoordinate += 5, textOptions);
            doc.text(`Fone para contato: ${user.telefone} e-mail: ${user.email}`, xCoordinate, yCoordinate += 5, textOptions);
            doc.text('Recebi da empresa:', xCoordinate, yCoordinate += 5, textOptions);
            doc.setFontStyle('bold');
            doc.text("TARGET SOLUÇÃO EM DISTRIBUIÇÃO LTDA", xCoordinate + 35, yCoordinate, textOptions);
            doc.setFontStyle('normal');
            doc.text(", CNPJ nº", xCoordinate + 119, yCoordinate, textOptions),
                doc.setFontStyle('bold');
            doc.text("68.473.545/0001-59.", xCoordinate + 137, yCoordinate, textOptions);
            doc.setFontStyle("normal");
            doc.text("A título de empréstimo, para meu uso exclusivo, conforme determinado na lei, os equipamentos especificados neste termo de responsabilidade, comprometendo-me a mantê-los em perfeito estado de conservação, ficando ciente de que:", xCoordinate, yCoordinate += 5, textOptions);
            doc.text("1-", xCoordinate, yCoordinate += 13, textOptions);
            doc.text("Se o equipamento for danificado ou inutilizado por emprego inadequado, mau uso, negligência ou extravio, a empresa me fornecerá novo equipamento e cobrará o valor de um equipamento da mesma marca ou equivalente ao da praça", xCoordinate + 10, yCoordinate, textOptions);
            doc.text("2-", xCoordinate, yCoordinate += 13, textOptions);
            doc.text("Em caso de dano, inutilização ou extravio do equipamento deverei comunicar imediatamente ao setor competente", xCoordinate + 10, yCoordinate, textOptions);
            doc.text("3-", xCoordinate, yCoordinate += 8, textOptions);
            doc.text("Terminando os serviços ou no caso de rescisão do contrato de trabalho, devolverei o equipamento completo e em perfeito estado de conservação, considerando-se o tempo do uso do mesmo, ao setor competente.", xCoordinate + 10, yCoordinate, textOptions);
            doc.text("4-", xCoordinate, yCoordinate += 13, textOptions);
            doc.text("Estando os equipamentos em minha posse, estarei sujeito a inspeções sem prévio aviso.", xCoordinate + 10, yCoordinate, textOptions);
            //Tabela
            doc.autoTable({
                theme: 'grid',
                styles: { halign: 'center' },
                head: [columns],
                body: rows,
                tableWidth: pageWidth - 51,
                margin: { left: xCoordinate + 10 },
                startY: yCoordinate += 5,
                showHead: 'everyPage',
                pageBreak: 'avoid',
                rowPageBreak: 'avoid'
            });
            //Assinatura e roda-pé
            doc.text(`Ribeirão Preto, ${diaCorrente} de ${mesCorrenteLongo}, ${anoCorrente}.`, xCoordinate, doc.lastAutoTable.finalY + 15, textOptions);
            doc.text('Ciente (Nome / Assinatura):', xCoordinate, doc.lastAutoTable.finalY + 25, textOptions);
            doc.text('Devolução Atestamos que o bem foi devolvido em ___/___/_____ , nas seguintes condições: (_)Em perfeito estado (_)Apresentando defeito (_)Faltando peças/ acessórios.', xCoordinate, doc.lastAutoTable.finalY + 35, textOptions);
            doc.setDrawColor(0, 0, 0);
            doc.setLineWidth(0.25);
            doc.line(xCoordinate + 10, doc.lastAutoTable.finalY + 60, pageWidth - 30, doc.lastAutoTable.finalY + 60);
            doc.text('(Data / assinatura / nome do responsável pelo recebimento)', xCoordinate + 20, doc.lastAutoTable.finalY + 65, textOptions);
            const filename = `TermoResponsabilidade_${user.nome.replace(/\s/g, '_')}_${dataCorrente}`;
            doc.output('dataurlnewwindow', { filename: filename });
            doc.save(filename);
        }, 2000);
    }
}
PdfGeneratorService.ɵfac = function PdfGeneratorService_Factory(t) { return new (t || PdfGeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_functions_currentDate__WEBPACK_IMPORTED_MODULE_2__["currentDate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_colaborador_form_colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_item_form_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"])); };
PdfGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfGeneratorService, factory: PdfGeneratorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfGeneratorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_functions_currentDate__WEBPACK_IMPORTED_MODULE_2__["currentDate"] }, { type: _colaborador_form_colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"] }, { type: _item_form_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }, { type: ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: options, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _emprestimo_emprestimo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emprestimo/emprestimo.module */ "GZcK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing.module */ "lm+D");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "tmjD");










const options = null;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _emprestimo_emprestimo_module__WEBPACK_IMPORTED_MODULE_0__["EmprestimoModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _emprestimo_emprestimo_module__WEBPACK_IMPORTED_MODULE_0__["EmprestimoModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _emprestimo_emprestimo_module__WEBPACK_IMPORTED_MODULE_0__["EmprestimoModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZT7j":
/*!**************************************************!*\
  !*** ./src/app/emprestimo/shared/colaborador.ts ***!
  \**************************************************/
/*! exports provided: Colaborador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colaborador", function() { return Colaborador; });
class Colaborador {
}


/***/ }),

/***/ "jYah":
/*!*******************************************************************************!*\
  !*** ./src/app/emprestimo/emprestimo-detalhe/emprestimo-detalhe.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmprestimoDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoDetalheComponent", function() { return EmprestimoDetalheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _emprestimo_form_emprestimo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emprestimo-form/emprestimo.service */ "AdNH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _emprestimo_form_pdf_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emprestimo-form/pdf-generator.service */ "V368");
/* harmony import */ var _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/functions/avisoToast */ "GxR1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "tmjD");








function EmprestimoDetalheComponent_div_22_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmprestimoDetalheComponent_div_22_tr_18_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const emprestimo_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onChange(emprestimo_r5, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emprestimo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r5.qtdEmprestada);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r5.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r5.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 4, emprestimo_r5.dtEmprestimo, "dd/MM/yyyy", "UTC"));
} }
function EmprestimoDetalheComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Emprestimos ativos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantidade emprestada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Data do emprestimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Selecionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmprestimoDetalheComponent_div_22_tr_18_Template, 14, 8, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.emprestimosNaoDevolvidos);
} }
function EmprestimoDetalheComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "N\u00E3o existe emprestimo ativo para esse coalborador!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmprestimoDetalheComponent_div_24_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emprestimo_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r9.qtdEmprestada);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r9.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r9.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 4, emprestimo_r9.dtEmprestimo, "dd/MM/yyyy", "UTC"));
} }
function EmprestimoDetalheComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Emprestimos devolvidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantidade emprestada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Data do emprestimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmprestimoDetalheComponent_div_24_tr_16_Template, 10, 8, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.emprestimosDevolvidos);
} }
class EmprestimoDetalheComponent {
    constructor(emprestimoService, route, pdfService, toast) {
        this.emprestimoService = emprestimoService;
        this.route = route;
        this.pdfService = pdfService;
        this.toast = toast;
        this.emprestimosMarcados = [];
    }
    onChange(emprestimo, marcado) {
        if (marcado) {
            this.emprestimosMarcados.push(emprestimo);
        }
        else {
            var i = this.emprestimosMarcados.indexOf(emprestimo);
            this.emprestimosMarcados.splice(i, 1);
        }
    }
    darBaixa(pdf) {
        this.emprestimoService.postEmprestimoDevolvido(this.emprestimosMarcados);
        if (pdf) {
            //imprimir
            this.emprestimosMarcados.forEach((e) => {
                var data = new Date(e.dtEmprestimo);
                e.dtEmprestimo = `${data.getDate() + 1}/${data.getMonth() + 1}/${data.getFullYear()}`;
            });
            this.toast.miToast('A baixa foi dada com sucesso!\nAguarde enquanto o termo de responsabilidade é gerado.', 3000);
            this.pdfService.generatePDF(this.emprestimosMarcados);
            this.ngOnInit();
        }
        else {
            this.toast.miToast('A baixa foi dada com sucesso!', 3000);
            this.ngOnInit();
        }
    }
    ngOnInit() {
        this.emprestimosMarcados = [];
        this.inscricao = this.route.params.subscribe((params) => {
            let id = params['id'];
            this.colaborador = { telefone: "", nome: "", email: "" };
            this.emprestimoService.getEmprestimoById(id).subscribe(emprestimos => {
                this.emprestimosDevolvidos = [];
                this.emprestimosNaoDevolvidos = [];
                for (let i = 0; i < emprestimos.length; i++) {
                    if (!emprestimos[i].devolvido) {
                        this.emprestimosNaoDevolvidos.push(emprestimos[i]);
                    }
                    else {
                        this.emprestimosDevolvidos.push(emprestimos[i]);
                    }
                }
                this.colaborador = {
                    nome: emprestimos[0]['nome'],
                    telefone: emprestimos[0]['telefone'],
                    email: emprestimos[0]['email']
                };
            });
        });
    }
    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }
}
EmprestimoDetalheComponent.ɵfac = function EmprestimoDetalheComponent_Factory(t) { return new (t || EmprestimoDetalheComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emprestimo_form_emprestimo_service__WEBPACK_IMPORTED_MODULE_1__["EmprestimoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_emprestimo_form_pdf_generator_service__WEBPACK_IMPORTED_MODULE_3__["PdfGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__["avisoToast"])); };
EmprestimoDetalheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmprestimoDetalheComponent, selectors: [["app-emprestimo-detalhe"]], decls: 30, vars: 12, consts: [["id", "content"], ["content", ""], ["id", "header", 1, "row"], [1, "col-6"], [1, "material-icons", "prefix"], ["class", "col-6", 4, "ngIf"], [1, "row", "center"], ["type", "submit", 1, "btn", "red", "darken-1", "col", "s3", "offset-s2", 3, "click"], [1, "striped"], [1, "col", "s2"], [1, "col", "s3"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "filled-in", 3, "change"]], template: function EmprestimoDetalheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Informa\u00E7\u00F5es do usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EmprestimoDetalheComponent_div_22_Template, 19, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EmprestimoDetalheComponent_div_23_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EmprestimoDetalheComponent_div_24_Template, 17, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimoDetalheComponent_Template_a_click_26_listener() { return ctx.darBaixa(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dar baixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimoDetalheComponent_Template_a_click_28_listener() { return ctx.darBaixa(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dar baixa e gerar pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nome: ", ctx.colaborador.nome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("E-mail: ", ctx.colaborador.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Telefone: ", ctx.colaborador.telefone.length > 10 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 6, ctx.colaborador.telefone, "(00) 0 0000-0000") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, ctx.colaborador.telefone, "(00) 0000-0000"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emprestimosNaoDevolvidos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emprestimosNaoDevolvidos.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emprestimosDevolvidos.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [ngx_mask__WEBPACK_IMPORTED_MODULE_6__["MaskPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["[type=\"checkbox\"][_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:not(.lever) {\r\n  display: initial;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wcmVzdGltby9lbXByZXN0aW1vLWRldGFsaGUvZW1wcmVzdGltby1kZXRhbGhlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lbXByZXN0aW1vL2VtcHJlc3RpbW8tZGV0YWxoZS9lbXByZXN0aW1vLWRldGFsaGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlt0eXBlPVwiY2hlY2tib3hcIl0gKyBzcGFuOm5vdCgubGV2ZXIpIHtcclxuICBkaXNwbGF5OiBpbml0aWFsO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimoDetalheComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emprestimo-detalhe',
                templateUrl: './emprestimo-detalhe.component.html',
                styleUrls: ['./emprestimo-detalhe.component.css']
            }]
    }], function () { return [{ type: _emprestimo_form_emprestimo_service__WEBPACK_IMPORTED_MODULE_1__["EmprestimoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _emprestimo_form_pdf_generator_service__WEBPACK_IMPORTED_MODULE_3__["PdfGeneratorService"] }, { type: _shared_functions_avisoToast__WEBPACK_IMPORTED_MODULE_4__["avisoToast"] }]; }, null); })();


/***/ }),

/***/ "lm+D":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _emprestimo_emprestimo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emprestimo/emprestimo.component */ "PRiO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const appRoutes = [
    { path: '', component: _emprestimo_emprestimo_component__WEBPACK_IMPORTED_MODULE_0__["EmprestimoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mR1/":
/*!************************************************************!*\
  !*** ./src/app/emprestimo/shared/functions/currentDate.ts ***!
  \************************************************************/
/*! exports provided: currentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentDate", function() { return currentDate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class currentDate {
    constructor() { }
    currentDate() {
        const date = new Date();
        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);
        return `${day}/${month}/${year}`;
    }
    getCurrentDay() {
        return this.currentDate().slice(-10, -8);
    }
    getCurrentYear() {
        return this.currentDate().slice(-4);
    }
    getLongMonth() {
        var monthArray = new Array();
        monthArray[0] = "Janeiro";
        monthArray[1] = "Fevereiro";
        monthArray[2] = "Março";
        monthArray[3] = "Abril";
        monthArray[4] = "Maio";
        monthArray[5] = "Junho";
        monthArray[6] = "Julho";
        monthArray[7] = "Agosto";
        monthArray[8] = "Setembero";
        monthArray[9] = "Outubro";
        monthArray[10] = "Novembero";
        monthArray[11] = "Dezembero";
        var date = new Date();
        var month = monthArray[date.getMonth()];
        return month;
    }
}
currentDate.ɵfac = function currentDate_Factory(t) { return new (t || currentDate)(); };
currentDate.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: currentDate, factory: currentDate.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](currentDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t05J":
/*!********************************************************************!*\
  !*** ./src/app/emprestimo/colaborador-form/colaborador.service.ts ***!
  \********************************************************************/
/*! exports provided: ColaboradorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradorService", function() { return ColaboradorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ColaboradorService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:80/colaborador';
    }
    postColaborador(colaborador) {
        const cadastrarUrl = `${this.baseUrl}`;
        return this.http.post(cadastrarUrl, colaborador);
    }
    getColaboradores() {
        const getAllColaborador = this.baseUrl;
        return this.http.get(getAllColaborador);
    }
    getColaboradorById(id) {
        const getColaboradorId = `${this.baseUrl}/${id}`;
        return this.http.get(getColaboradorId);
    }
}
ColaboradorService.ɵfac = function ColaboradorService_Factory(t) { return new (t || ColaboradorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ColaboradorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColaboradorService, factory: ColaboradorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColaboradorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "u3Lc":
/*!******************************************************!*\
  !*** ./src/app/emprestimo/item-form/item.service.ts ***!
  \******************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ItemService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:80/item';
    }
    postItem(item) {
        const cadastrarUrl = `${this.baseUrl}`;
        return this.http.post(cadastrarUrl, item);
    }
    getItens() {
        const getAllItem = this.baseUrl;
        return this.http.get(getAllItem);
    }
    getItemById(id) {
        const getItemId = `${this.baseUrl}/${id}`;
        return this.http.get(getItemId);
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map