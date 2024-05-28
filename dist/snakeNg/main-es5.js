(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Dev\snakeNg\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "H2YD":
    /*!************************************************!*\
      !*** ./src/app/snake-game/objects/key-code.ts ***!
      \************************************************/

    /*! exports provided: KEY_CODE */

    /***/
    function H2YD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_CODE", function () {
        return KEY_CODE;
      });

      var KEY_CODE;

      (function (KEY_CODE) {
        KEY_CODE["KEY_UP"] = "ArrowUp";
        KEY_CODE["KEY_DOWN"] = "ArrowDown";
        KEY_CODE["KEY_RIGHT"] = "ArrowRight";
        KEY_CODE["KEY_LEFT"] = "ArrowLeft";
      })(KEY_CODE || (KEY_CODE = {}));
      /***/

    },

    /***/
    "JQqH":
    /*!*********************************************!*\
      !*** ./src/app/snake-game/objects/snake.ts ***!
      \*********************************************/

    /*! exports provided: Snake */

    /***/
    function JQqH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Snake", function () {
        return Snake;
      });
      /* harmony import */


      var _settings_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../settings/global */
      "TL1N");
      /* harmony import */


      var _directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./directions */
      "yQGp");

      var Snake = /*#__PURE__*/function () {
        function Snake(color) {
          _classCallCheck(this, Snake);

          this.color = color;
          this.snakeBody = [{
            x: 4 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 5 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"],
            y: _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 2 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]
          }, {
            x: 3 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 4 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"],
            y: _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 2 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]
          }, {
            x: 2 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 3 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"],
            y: _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 2 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]
          }, {
            x: 1 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 2 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"],
            y: _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + 2 * _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]
          }];
        }

        _createClass(Snake, [{
          key: "getSnake",
          value: function getSnake() {
            return this.snakeBody;
          }
        }, {
          key: "getSnakeHead",
          value: function getSnakeHead() {
            return this.snakeBody[0];
          }
        }, {
          key: "addBlockToSnake",
          value: function addBlockToSnake() {
            this.snakeBody.push({
              x: this.snakeBody[this.snakeBody.length - 1].x,
              y: this.snakeBody[this.snakeBody.length - 1].y
            });
          }
        }, {
          key: "moveSnakeTo",
          value: function moveSnakeTo(direction) {
            this.snakeBody.pop();

            if (direction === _directions__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].RIGHT) {
              this.snakeBody.unshift({
                x: this.getSnakeHead().x + _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"],
                y: this.getSnakeHead().y
              });
            }

            if (direction === _directions__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].DOWN) {
              this.snakeBody.unshift({
                x: this.getSnakeHead().x,
                y: this.getSnakeHead().y + _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] + _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]
              });
            }

            if (direction === _directions__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].LEFT) {
              this.snakeBody.unshift({
                x: this.getSnakeHead().x - _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] - _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"],
                y: this.getSnakeHead().y
              });
            }

            if (direction === _directions__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"].UP) {
              this.snakeBody.unshift({
                x: this.getSnakeHead().x,
                y: this.getSnakeHead().y - _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] - _settings_global__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]
              });
            }
          }
        }, {
          key: "isHittingWall",
          value: function isHittingWall(width, height) {
            return this.getSnakeHead().x <= -_settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] || this.getSnakeHead().x >= width + _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] || this.getSnakeHead().y <= -_settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"] || this.getSnakeHead().y >= height + _settings_global__WEBPACK_IMPORTED_MODULE_0__["BLOCK_SIZE"];
          }
        }, {
          key: "isEatingItself",
          value: function isEatingItself() {
            var tempArray = _toConsumableArray(this.snakeBody);

            var tempSnakeBlock = tempArray.shift();
            return tempArray.filter(function (e) {
              return e.x === tempSnakeBlock.x && e.y === tempSnakeBlock.y;
            }).length > 0;
          }
        }, {
          key: "isEatingApple",
          value: function isEatingApple(apple) {
            return this.getSnakeHead().x === apple.x && this.getSnakeHead().y === apple.y;
          }
        }]);

        return Snake;
      }();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _snake_game_snake_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./snake-game/snake-game.component */
      "gbrh");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'snakeNg';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-snake-game");
          }
        },
        directives: [_snake_game_snake_game_component__WEBPACK_IMPORTED_MODULE_1__["SnakeGameComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "TL1N":
    /*!***********************************************!*\
      !*** ./src/app/snake-game/settings/global.ts ***!
      \***********************************************/

    /*! exports provided: BLOCK_SIZE, COLS, ROWS, GRID_SIZE, SNAKE_COLOR, APPLE_COLOR */

    /***/
    function TL1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function () {
        return BLOCK_SIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLS", function () {
        return COLS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROWS", function () {
        return ROWS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GRID_SIZE", function () {
        return GRID_SIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SNAKE_COLOR", function () {
        return SNAKE_COLOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLE_COLOR", function () {
        return APPLE_COLOR;
      });

      var BLOCK_SIZE = 30;
      var COLS = 20;
      var ROWS = 20;
      var GRID_SIZE = 1;
      var SNAKE_COLOR = 'green';
      var APPLE_COLOR = 'red';
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _snake_game_snake_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./snake-game/snake-game.component */
      "gbrh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _snake_game_snake_game_component__WEBPACK_IMPORTED_MODULE_2__["SnakeGameComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
        });
      })();
      /***/

    },

    /***/
    "gbrh":
    /*!****************************************************!*\
      !*** ./src/app/snake-game/snake-game.component.ts ***!
      \****************************************************/

    /*! exports provided: SnakeGameComponent */

    /***/
    function gbrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnakeGameComponent", function () {
        return SnakeGameComponent;
      });
      /* harmony import */


      var _objects_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./objects/snake */
      "JQqH");
      /* harmony import */


      var _settings_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings/global */
      "TL1N");
      /* harmony import */


      var _objects_directions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./objects/directions */
      "yQGp");
      /* harmony import */


      var _objects_key_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./objects/key-code */
      "H2YD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["snake"];

      function SnakeGameComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function SnakeGameComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SnakeGameComponent_ng_template_17_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.pauseGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Pause Game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function SnakeGameComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SnakeGameComponent_ng_template_19_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.resumeGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Resume Game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var SnakeGameComponent = /*#__PURE__*/function () {
        function SnakeGameComponent() {
          _classCallCheck(this, SnakeGameComponent);

          this.speed = 1;
          this.time = {
            start: 0,
            elapsed: 0,
            total: 2000
          };
          this.isRunning = false;
        }

        _createClass(SnakeGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ctx = this.canvasSnake.nativeElement.getContext('2d');
            this.ctx.canvas.width = _settings_global__WEBPACK_IMPORTED_MODULE_1__["COLS"] * _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"] + (_settings_global__WEBPACK_IMPORTED_MODULE_1__["COLS"] * _settings_global__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"] + 1);
            this.ctx.canvas.height = _settings_global__WEBPACK_IMPORTED_MODULE_1__["ROWS"] * _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"] + (_settings_global__WEBPACK_IMPORTED_MODULE_1__["COLS"] * _settings_global__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"] + 1);
            this.snake = new _objects_snake__WEBPACK_IMPORTED_MODULE_0__["Snake"](_settings_global__WEBPACK_IMPORTED_MODULE_1__["SNAKE_COLOR"]);
            this.drawSnake();
            this.resetStats();
          }
        }, {
          key: "keyEvent",
          value: function keyEvent(event) {
            if (event.code === _objects_key_code__WEBPACK_IMPORTED_MODULE_3__["KEY_CODE"].KEY_DOWN) {
              this.movingDirection = _objects_directions__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].DOWN;
            }

            if (event.code === _objects_key_code__WEBPACK_IMPORTED_MODULE_3__["KEY_CODE"].KEY_UP) {
              this.movingDirection = _objects_directions__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].UP;
            }

            if (event.code === _objects_key_code__WEBPACK_IMPORTED_MODULE_3__["KEY_CODE"].KEY_LEFT) {
              this.movingDirection = _objects_directions__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].LEFT;
            }

            if (event.code === _objects_key_code__WEBPACK_IMPORTED_MODULE_3__["KEY_CODE"].KEY_RIGHT) {
              this.movingDirection = _objects_directions__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].RIGHT;
            }
          }
        }, {
          key: "playGame",
          value: function playGame() {
            var _this = this;

            this.isRunning = true;
            this.resetGame();
            this.time.start = performance.now();
            this.randomApple();
            requestAnimationFrame(function (now) {
              return _this.animate(now);
            });
          }
        }, {
          key: "resumeGame",
          value: function resumeGame() {
            var _this2 = this;

            this.isRunning = !this.isRunning;
            this.time.start = performance.now();
            requestAnimationFrame(function (now) {
              return _this2.animate(now);
            });
          }
        }, {
          key: "pauseGame",
          value: function pauseGame() {
            this.isRunning = !this.isRunning;
            cancelAnimationFrame(this.currentFrameId);
          }
        }, {
          key: "resetGame",
          value: function resetGame() {
            this.isRunning = false;
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.snake = new _objects_snake__WEBPACK_IMPORTED_MODULE_0__["Snake"](_settings_global__WEBPACK_IMPORTED_MODULE_1__["SNAKE_COLOR"]);
            this.movingDirection = _objects_directions__WEBPACK_IMPORTED_MODULE_2__["DIRECTIONS"].RIGHT;
            cancelAnimationFrame(this.currentFrameId);
            this.resetStats();
            this.drawSnake();
          }
        }, {
          key: "gameOver",
          value: function gameOver() {
            cancelAnimationFrame(this.currentFrameId);
            this.ctx.fillStyle = 'black';
            this.ctx.font = '46px \'Press Start 2P\'';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Game Over!', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
            this.ctx.font = '36px \'Press Start 2P\'';
            this.ctx.fillText('Your score: ' + this.points, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 + 100);
          }
        }, {
          key: "animate",
          value: function animate(now) {
            var _this3 = this;

            this.time.elapsed = now - this.time.start;

            if (this.time.elapsed > 250) {
              this.drawFrame();
              this.time.start = now;
            }

            this.currentFrameId = requestAnimationFrame(function (timestamp) {
              return _this3.animate(timestamp);
            });

            if (this.snake.isEatingItself() || this.snake.isHittingWall(this.ctx.canvas.width, this.ctx.canvas.height)) {
              this.gameOver();
            }

            if (this.snake.isEatingApple(this.apple)) {
              this.snake.addBlockToSnake();
              this.randomApple();
            }
          }
        }, {
          key: "drawFrame",
          value: function drawFrame() {
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.updateStats();
            this.drawSnake();
            this.drawApple();
            this.snake.moveSnakeTo(this.movingDirection);
          }
        }, {
          key: "updateStats",
          value: function updateStats() {
            this.points++;
            this.snakeBlocks = this.snake.snakeBody.length;
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this.points = 0;
            this.snakeBlocks = this.snake.getSnake().length;
          }
        }, {
          key: "drawApple",
          value: function drawApple() {
            this.drawRoundedCornerRec(this.apple.x, this.apple.y, _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], 20, _settings_global__WEBPACK_IMPORTED_MODULE_1__["APPLE_COLOR"]);
          }
        }, {
          key: "randomApple",
          value: function randomApple() {
            var random1 = Math.floor(Math.random() * _settings_global__WEBPACK_IMPORTED_MODULE_1__["COLS"] - 1) + 1;
            var random2 = Math.floor(Math.random() * _settings_global__WEBPACK_IMPORTED_MODULE_1__["ROWS"] - 1) + 1;
            this.apple = {
              x: random1 * _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"] + random1 + _settings_global__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"],
              y: random2 * _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"] + random2 + _settings_global__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]
            };
          }
        }, {
          key: "drawSnake",
          value: function drawSnake() {
            var _this4 = this;

            this.snake.getSnake().forEach(function (snakeBlock) {
              _this4.drawRoundedCornerRec(snakeBlock.x, snakeBlock.y, _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _settings_global__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], 20, _this4.snake.color);
            });
          }
        }, {
          key: "drawRoundedCornerRec",
          value: function drawRoundedCornerRec(x, y, width, height, radius, color) {
            this.ctx.lineJoin = 'round';
            this.ctx.lineWidth = radius;
            this.ctx.strokeStyle = color;
            this.ctx.fillStyle = color;
            this.ctx.strokeRect(x + radius / 2, y + radius / 2, width - radius, height - radius);
            this.ctx.fillRect(x + radius / 2, y + radius / 2, width - radius, height - radius);
          }
        }]);

        return SnakeGameComponent;
      }();

      SnakeGameComponent.ɵfac = function SnakeGameComponent_Factory(t) {
        return new (t || SnakeGameComponent)();
      };

      SnakeGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SnakeGameComponent,
        selectors: [["app-snake-game"]],
        viewQuery: function SnakeGameComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasSnake = _t.first);
          }
        },
        hostBindings: function SnakeGameComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function SnakeGameComponent_keydown_HostBindingHandler($event) {
              return ctx.keyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        decls: 24,
        vars: 6,
        consts: [[1, "grid"], [1, "game-board"], ["snake", ""], [1, "right-column"], [1, "button-container"], [1, "play-button", "button", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["pause", ""], ["resume", ""], [1, "pause-button", "button", 3, "click"]],
        template: function SnakeGameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "canvas", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "SNAKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SnakeGameComponent_Template_button_click_14_listener() {
              return ctx.playGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " New Game ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SnakeGameComponent_ng_container_16_Template, 1, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SnakeGameComponent_ng_template_17_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SnakeGameComponent_ng_template_19_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SnakeGameComponent_Template_button_click_22_listener() {
              return ctx.resetGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Reset Game ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Score: ", ctx.points, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Snake blocks: ", ctx.snakeBlocks, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Speed: ", ctx.speed + "x", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isRunning)("ngIfThen", _r2)("ngIfElse", _r4);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Press Start\\ 2P, cursive\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 640px 200px\r\n}\r\n\r\n.right-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 300px\r\n}\r\n\r\n.game-board[_ngcontent-%COMP%] {\r\n  border: 2px solid\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 15px 30px;\r\n  cursor: pointer;\r\n  width: 140px;\r\n  border: 1px solid #000\r\n}\r\n\r\n.play-button[_ngcontent-%COMP%] {\r\n  background-color: #4caf50\r\n}\r\n\r\n.reset-button[_ngcontent-%COMP%] {\r\n  background-color: red\r\n}\r\n\r\n.pause-button[_ngcontent-%COMP%] {\r\n  background-color: #8edf91\r\n}\r\n\r\n.pause-button.button-disabled[_ngcontent-%COMP%] {\r\n  background-color: #ccc\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWtlLWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNuYWtlLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBQcmVzcyBTdGFydFxcIDJQLCBjdXJzaXZlXHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjQwcHggMjAwcHhcclxufVxyXG5cclxuLnJpZ2h0LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMzAwcHhcclxufVxyXG5cclxuLmdhbWUtYm9hcmQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkXHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwXHJcbn1cclxuXHJcbi5wbGF5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MFxyXG59XHJcblxyXG4ucmVzZXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWRcclxufVxyXG5cclxuLnBhdXNlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlZGY5MVxyXG59XHJcblxyXG4ucGF1c2UtYnV0dG9uLmJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "yQGp":
    /*!**************************************************!*\
      !*** ./src/app/snake-game/objects/directions.ts ***!
      \**************************************************/

    /*! exports provided: DIRECTIONS */

    /***/
    function yQGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function () {
        return DIRECTIONS;
      });

      var DIRECTIONS;

      (function (DIRECTIONS) {
        DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
        DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
        DIRECTIONS[DIRECTIONS["RIGHT"] = 2] = "RIGHT";
        DIRECTIONS[DIRECTIONS["LEFT"] = 3] = "LEFT";
      })(DIRECTIONS || (DIRECTIONS = {}));
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map