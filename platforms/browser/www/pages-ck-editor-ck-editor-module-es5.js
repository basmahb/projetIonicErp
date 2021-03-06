function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ck-editor-ck-editor-module"], {
  /***/
  "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js":
  /*!************************************************************!*\
    !*** ./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js ***!
    \************************************************************/

  /*! exports provided: CKEditorModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesNg2CkeditorFesm2015Ng2CkeditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CKEditorModule", function () {
      return CKEditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CKEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CKButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CKGroupDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
     *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
     *      </ckbutton>
     *   </ckeditor>
     */


    var CKButtonDirective = /*#__PURE__*/function () {
      /**
       * CKGroup component
       * Usage :
       *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
       *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
       *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
       *      </ckbutton>
       *   </ckeditor>
       */
      function CKButtonDirective() {
        _classCallCheck(this, CKButtonDirective);

        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CKButtonDirective, [{
        key: "initialize",
        value: function initialize(editor) {
          var _this = this;

          editor.instance.addCommand(this.command, {
            exec: function exec(evt) {
              _this.click.emit(evt);
            }
          });
          editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.name) throw new Error('Attribute "name" is required on <ckbutton>');
          if (!this.command) throw new Error('Attribute "command" is required on <ckbutton>');
        }
      }]);

      return CKButtonDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKButtonDirective.prototype, "click", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "command", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "toolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ckbutton'
    })], CKButtonDirective);
    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
     *          .
     *          .
     *      </ckgroup>
     *   </ckeditor>
     */

    var CKGroupDirective = /*#__PURE__*/function () {
      function CKGroupDirective() {
        _classCallCheck(this, CKGroupDirective);
      }

      _createClass(CKGroupDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
          this.toolbarButtons.forEach(function (button) {
            return button.toolbar = _this2.name;
          });
        }
      }, {
        key: "initialize",
        value: function initialize(editor) {
          editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf); // Initialize each button within ckgroup

          this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
          });
        }
      }]);

      return CKGroupDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKGroupDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKGroupDirective.prototype, "previous", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKGroupDirective.prototype, "subgroupOf", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ckgroup'
    })], CKGroupDirective);
    var CKEditorComponent_1;
    /**
     * CKEditor component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
     */

    var CKEditorComponent = CKEditorComponent_1 = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function CKEditorComponent(zone) {
        _classCallCheck(this, CKEditorComponent);

        this.zone = zone;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = '';
      }

      _createClass(CKEditorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
          }
        }
        /**
         * On component destroy
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.instance) {
            this.instance.removeAllListeners();
            CKEDITOR.instances[this.instance.name].destroy();
            this.instance.destroy();
            this.instance = null;
          }
        }
        /**
         * On component view init
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ckeditorInit(this.config || {});
        }
        /**
         * On component view checked
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.ckeditorInit(this.config || {});
        }
        /**
         * Value update process
         */

      }, {
        key: "updateValue",
        value: function updateValue(value) {
          var _this3 = this;

          this.zone.run(function () {
            _this3.value = value;

            _this3.onChange(value);

            _this3.onTouched();

            _this3.change.emit(value);
          });
        }
        /**
         * CKEditor init
         */

      }, {
        key: "ckeditorInit",
        value: function ckeditorInit(config) {
          var _this4 = this;

          if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
          } else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
              return;
            }

            if (this.readonly) {
              config.readOnly = this.readonly;
            } // CKEditor replace textarea


            this.instance = CKEDITOR.replace(this.host.nativeElement, config); // Set initial value

            this.instance.setData(this.value); // listen for instanceReady event

            this.instance.on('instanceReady', function (evt) {
              // if value has changed while instance loading
              // update instance with current component value
              if (_this4.instance.getData() !== _this4.value) {
                _this4.instance.setData(_this4.value);
              } // send the evt to the EventEmitter


              _this4.ready.emit(evt);
            }); // CKEditor change event

            this.instance.on('change', function (evt) {
              _this4.onTouched();

              var value = _this4.instance.getData();

              if (_this4.value !== value) {
                // Debounce update
                if (_this4.debounce) {
                  if (_this4.debounceTimeout) clearTimeout(_this4.debounceTimeout);
                  _this4.debounceTimeout = setTimeout(function () {
                    _this4.updateValue(value);

                    _this4.debounceTimeout = null;
                  }, parseInt(_this4.debounce)); // Live update
                } else {
                  _this4.updateValue(value);
                }
              } // Original ckeditor event dispatch


              _this4.editorChange.emit(evt);
            }); // CKEditor blur event

            this.instance.on('blur', function (evt) {
              _this4.blur.emit(evt);
            }); // CKEditor focus event

            this.instance.on('focus', function (evt) {
              _this4.focus.emit(evt);
            }); // CKEditor contentDom event

            this.instance.on('contentDom', function (evt) {
              _this4.contentDom.emit(evt);
            }); // CKEditor fileUploadRequest event

            this.instance.on('fileUploadRequest', function (evt) {
              _this4.fileUploadRequest.emit(evt);
            }); // CKEditor fileUploadResponse event

            this.instance.on('fileUploadResponse', function (evt) {
              _this4.fileUploadResponse.emit(evt);
            }); // CKEditor paste event

            this.instance.on('paste', function (evt) {
              _this4.paste.emit(evt);
            }); // CKEditor drop event

            this.instance.on('drop', function (evt) {
              _this4.drop.emit(evt);
            }); // Add Toolbar Groups to Editor. This will also add Buttons within groups.

            this.toolbarGroups.forEach(function (group) {
              group.initialize(_this4);
            }); // Add Toolbar Buttons to Editor.

            this.toolbarButtons.forEach(function (button) {
              button.initialize(_this4);
            });
          }
        }
        /**
         * Implements ControlValueAccessor
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._value = value;
          if (this.instance) this.instance.setData(value);
        }
      }, {
        key: "onChange",
        value: function onChange(_) {}
      }, {
        key: "onTouched",
        value: function onTouched() {}
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "documentContains",
        value: function documentContains(node) {
          return document.contains ? document.contains(node) : document.body.contains(node);
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          if (v !== this._value) {
            this._value = v;
            this.onChange(v);
          }
        }
      }]);

      return CKEditorComponent;
    }();

    CKEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CKEditorComponent.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKEditorComponent.prototype, "debounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "editorChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "ready", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "blur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "contentDom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "paste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "drop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('host', {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "host", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKEditorComponent.prototype, "toolbarButtons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKGroupDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKEditorComponent.prototype, "toolbarGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ckeditor',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CKEditorComponent_1;
        }),
        multi: true
      }],
      template: "\n    <textarea #host></textarea>\n  "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CKEditorComponent);
    /**
     * CKEditorModule
     */

    var CKEditorModule = function CKEditorModule() {
      _classCallCheck(this, CKEditorModule);
    };

    CKEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
      exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
    })], CKEditorModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-ckeditor.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ck-editor/ck-editor.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ck-editor/ck-editor.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCkEditorCkEditorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Ck Editor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <p class=\"title\">CK Editor</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div>\n    <ckeditor [(ngModel)]=\"ckeditorContent\"\n      [config]=\"{uiColor: '#0cd1e8',removeButtons:'Source,Copy,Cut,Paste,Undo,Redo,Print,Form,TextField,Textarea,Button,SelectAll,NumberedList,BulletedList,CreateDiv,Table,PasteText,PasteFromWord,Select,HiddenField',removePlugins:'elementspath,save,image,flash,iframe,link,smiley,find,pagebreak,templates,about,maximize,showblocks,newpage,language'}\"\n      [readonly]=\"false\" (change)=\"onChange($event)\" debounce=\"500\">\n    </ckeditor>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <p class=\"title\">Output</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class=\"output\">\n    <div>{{ckeditorContent}}</div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/ck-editor/ck-editor-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/ck-editor/ck-editor-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CkEditorPageRoutingModule */

  /***/
  function srcAppPagesCkEditorCkEditorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CkEditorPageRoutingModule", function () {
      return CkEditorPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ck_editor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ck-editor.page */
    "./src/app/pages/ck-editor/ck-editor.page.ts");

    var routes = [{
      path: '',
      component: _ck_editor_page__WEBPACK_IMPORTED_MODULE_3__["CkEditorPage"]
    }];

    var CkEditorPageRoutingModule = function CkEditorPageRoutingModule() {
      _classCallCheck(this, CkEditorPageRoutingModule);
    };

    CkEditorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CkEditorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ck-editor/ck-editor.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ck-editor/ck-editor.module.ts ***!
    \*****************************************************/

  /*! exports provided: CkEditorPageModule */

  /***/
  function srcAppPagesCkEditorCkEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CkEditorPageModule", function () {
      return CkEditorPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ck_editor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ck-editor-routing.module */
    "./src/app/pages/ck-editor/ck-editor-routing.module.ts");
    /* harmony import */


    var _ck_editor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ck-editor.page */
    "./src/app/pages/ck-editor/ck-editor.page.ts");
    /* harmony import */


    var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-ckeditor */
    "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");

    var CkEditorPageModule = function CkEditorPageModule() {
      _classCallCheck(this, CkEditorPageModule);
    };

    CkEditorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ck_editor_routing_module__WEBPACK_IMPORTED_MODULE_5__["CkEditorPageRoutingModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]],
      declarations: [_ck_editor_page__WEBPACK_IMPORTED_MODULE_6__["CkEditorPage"]]
    })], CkEditorPageModule);
    /***/
  },

  /***/
  "./src/app/pages/ck-editor/ck-editor.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ck-editor/ck-editor.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCkEditorCkEditorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  text-align: center;\n  font-family: \"Avenir\";\n  font-size: 18px;\n  margin: 0px;\n  margin-top: 10px;\n}\n\n.center {\n  width: 100%;\n  height: 100%;\n}\n\n.seperator {\n  width: 90%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 1px;\n  background-color: #ECF0F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.output {\n  padding: 10px;\n}\n\n.cke_bottom {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2stZWRpdG9yL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxjay1lZGl0b3JcXGNrLWVkaXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NrLWVkaXRvci9jay1lZGl0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURTQTtFQUNFLHdCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jay1lZGl0b3IvY2stZWRpdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0F2ZW5pcic7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXBlcmF0b3J7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5vdXRwdXR7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuXG5cbi8vVG8gaGlkZSBBbGwgQ29udHJvbGxlciBVbmNvbW1lbnQgdGhpc1xuLy8gL2RlZXAvIC5ja2VfdG9we1xuLy8gICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5ja2VfYm90dG9te1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vVG8gaGlkZSBBbGwgQ29udHJvbGxlciBVbmNvbW1lbnQgdGhpc1xuLy8gL2RlZXAvIC5ja2Uge1xuLy8gICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuLy8gICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1jb2xvcjogI0UzRTNFMyAhaW1wb3J0YW50O1xuLy8gICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4vLyB9IiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBdmVuaXJcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXBlcmF0b3Ige1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vdXRwdXQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2tlX2JvdHRvbSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/ck-editor/ck-editor.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/ck-editor/ck-editor.page.ts ***!
    \***************************************************/

  /*! exports provided: CkEditorPage */

  /***/
  function srcAppPagesCkEditorCkEditorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CkEditorPage", function () {
      return CkEditorPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var CkEditorPage = /*#__PURE__*/function () {
      function CkEditorPage() {
        _classCallCheck(this, CkEditorPage);

        this.ckeditorContent = '';
      }

      _createClass(CkEditorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange(event) {
          console.log('events', event);
        }
      }]);

      return CkEditorPage;
    }();

    CkEditorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ck-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ck-editor.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ck-editor/ck-editor.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ck-editor.page.scss */
      "./src/app/pages/ck-editor/ck-editor.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CkEditorPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ck-editor-ck-editor-module-es5.js.map