function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-distance-matrix-distance-matrix-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/distance-matrix/distance-matrix.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/distance-matrix/distance-matrix.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapsDistanceMatrixDistanceMatrixPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Distance Matrix</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" class=\"map\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/maps/distance-matrix/distance-matrix-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/maps/distance-matrix/distance-matrix-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: DistanceMatrixPageRoutingModule */

  /***/
  function srcAppPagesMapsDistanceMatrixDistanceMatrixRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistanceMatrixPageRoutingModule", function () {
      return DistanceMatrixPageRoutingModule;
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


    var _distance_matrix_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./distance-matrix.page */
    "./src/app/pages/maps/distance-matrix/distance-matrix.page.ts");

    var routes = [{
      path: '',
      component: _distance_matrix_page__WEBPACK_IMPORTED_MODULE_3__["DistanceMatrixPage"]
    }];

    var DistanceMatrixPageRoutingModule = function DistanceMatrixPageRoutingModule() {
      _classCallCheck(this, DistanceMatrixPageRoutingModule);
    };

    DistanceMatrixPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DistanceMatrixPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/distance-matrix/distance-matrix.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/maps/distance-matrix/distance-matrix.module.ts ***!
    \**********************************************************************/

  /*! exports provided: DistanceMatrixPageModule */

  /***/
  function srcAppPagesMapsDistanceMatrixDistanceMatrixModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistanceMatrixPageModule", function () {
      return DistanceMatrixPageModule;
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


    var _distance_matrix_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./distance-matrix-routing.module */
    "./src/app/pages/maps/distance-matrix/distance-matrix-routing.module.ts");
    /* harmony import */


    var _distance_matrix_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./distance-matrix.page */
    "./src/app/pages/maps/distance-matrix/distance-matrix.page.ts");

    var DistanceMatrixPageModule = function DistanceMatrixPageModule() {
      _classCallCheck(this, DistanceMatrixPageModule);
    };

    DistanceMatrixPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _distance_matrix_routing_module__WEBPACK_IMPORTED_MODULE_5__["DistanceMatrixPageRoutingModule"]],
      declarations: [_distance_matrix_page__WEBPACK_IMPORTED_MODULE_6__["DistanceMatrixPage"]]
    })], DistanceMatrixPageModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/distance-matrix/distance-matrix.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/maps/distance-matrix/distance-matrix.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapsDistanceMatrixDistanceMatrixPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9kaXN0YW5jZS1tYXRyaXgvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXG1hcHNcXGRpc3RhbmNlLW1hdHJpeFxcZGlzdGFuY2UtbWF0cml4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9kaXN0YW5jZS1tYXRyaXgvZGlzdGFuY2UtbWF0cml4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBzL2Rpc3RhbmNlLW1hdHJpeC9kaXN0YW5jZS1tYXRyaXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/maps/distance-matrix/distance-matrix.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/maps/distance-matrix/distance-matrix.page.ts ***!
    \********************************************************************/

  /*! exports provided: DistanceMatrixPage */

  /***/
  function srcAppPagesMapsDistanceMatrixDistanceMatrixPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistanceMatrixPage", function () {
      return DistanceMatrixPage;
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
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    
    */


    var DistanceMatrixPage = /*#__PURE__*/function () {
      function DistanceMatrixPage() {
        _classCallCheck(this, DistanceMatrixPage);

        this.latOri = 21.7606883;
        this.longOri = 72.1534491;
        this.latDest = 21.7616667;
        this.longDest = 72.1444012;
      }

      _createClass(DistanceMatrixPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap(this.latOri, this.longOri, this.latDest, this.longDest);
        }
      }, {
        key: "loadMap",
        value: function loadMap(latOri, lngOri, latDest, lngDest) {
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer();
          directionsDisplay = new google.maps.DirectionsRenderer();
          var bounds = new google.maps.LatLngBounds();
          var origin1 = {
            lat: parseFloat(latOri),
            lng: parseFloat(lngOri)
          };
          var destinationA = {
            lat: latDest,
            lng: lngDest
          };
          var destinationIcon = 'https://chart.googleapis.com/chart?' + 'chst=d_map_pin_letter&chld=D|FF0000|000000';
          var originIcon = 'https://chart.googleapis.com/chart?' + 'chst=d_map_pin_letter&chld=O|FFFF00|000000';
          var map = new google.maps.Map(this.mapElement.nativeElement, {
            center: {
              lat: latOri,
              lng: lngOri
            },
            disableDefaultUI: true,
            zoom: 100
          });
          var custPos = new google.maps.LatLng(latOri, lngOri);
          var restPos = new google.maps.LatLng(latDest, lngDest);
          var icon = {
            url: 'assets/avatars/1.jpg',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor

          };
          var icon2 = {
            url: 'assets/avatars/2.jpg',
            scaledSize: new google.maps.Size(60, 60),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor

          };
          var marker = new google.maps.Marker({
            map: map,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: icon
          });
          var markerCust = new google.maps.Marker({
            map: map,
            position: restPos,
            animation: google.maps.Animation.DROP,
            icon: icon2
          });
          marker.setMap(map);
          markerCust.setMap(map);
          directionsDisplay.setMap(map); // directionsDisplay.setOptions({ suppressMarkers: true });

          directionsDisplay.setOptions({
            polylineOptions: {
              strokeWeight: 4,
              strokeOpacity: 1,
              strokeColor: 'red'
            },
            suppressMarkers: true
          });
          var geocoder = new google.maps.Geocoder();
          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function (response, status) {
            if (status !== 'OK') {
              alert('Error was: ' + status);
            } else {
              var originList = response.originAddresses;
              var destinationList = response.destinationAddresses;

              var showGeocodedAddressOnMap = function showGeocodedAddressOnMap(asDestination) {
                var icon = asDestination ? destinationIcon : originIcon;
                return function (results, status) {
                  if (status === 'OK') {
                    map.fitBounds(bounds.extend(results[0].geometry.location));
                  } else {
                    alert('Geocode was not successful due to: ' + status);
                  }
                };
              };

              directionsService.route({
                origin: origin1,
                destination: destinationA,
                travelMode: 'DRIVING'
              }, function (response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });

              for (var i = 0; i < originList.length; i++) {
                var results = response.rows[i].elements;
                geocoder.geocode({
                  'address': originList[i]
                }, showGeocodedAddressOnMap(false));

                for (var j = 0; j < results.length; j++) {
                  geocoder.geocode({
                    'address': destinationList[j]
                  }, showGeocodedAddressOnMap(true));
                }
              }
            }
          });
        }
      }]);

      return DistanceMatrixPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DistanceMatrixPage.prototype, "mapElement", void 0);
    DistanceMatrixPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-distance-matrix',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./distance-matrix.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/distance-matrix/distance-matrix.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./distance-matrix.page.scss */
      "./src/app/pages/maps/distance-matrix/distance-matrix.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DistanceMatrixPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-maps-distance-matrix-distance-matrix-module-es5.js.map