"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Index');
// Script/Index.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShaderUtils = require("./ShaderUtils");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockPrefab = null;
        _this.foregroundNode = null;
        _this.bgSprite = null;
        _this.templateQueue = [];
        _this.blockPool = new cc.NodePool('block');
        _this.wave = 0;
        _this.templateHeight = 1334;
        _this.speed = 600;
        _this.createBlockFlag = 0;
        _this.bgMoveY = 0;
        return _this;
    }
    Index.prototype.start = function () {
        // let initCount = 6;
        // for (let i = 0; i < initCount; ++i) {
        //   this.blockPool.put(cc.instantiate(this.blockPrefab));
        // }
        // this.createNewBlock();
        // this.createNewBlock();
        // this.createNewBlock();
        // this.createNewBlock();
        ShaderUtils.setShader(this.bgSprite, "uv");
    };
    Index.prototype.createNewBlock = function () {
        var block = this.blockPool.get();
        block.y = this.templateHeight * (this.wave - 2);
        block.x = 0;
        block.parent = this.foregroundNode;
        this.templateQueue.push(block);
        if (this.wave > 4) {
            var reuseNode = this.templateQueue.shift();
            this.blockPool.put(reuseNode);
        }
        this.wave++;
    };
    Index.prototype.update = function (dt) {
        this.bgMoveY += dt * 0.2;
        this.bgMoveY = this.bgMoveY % 1.0;
        ShaderUtils.use(this.bgSprite);
        ShaderUtils.setUniformIf(this.bgSprite, "u_frameMoveY", this.bgMoveY);
        // this.foregroundNode.y -= this.speed*dt;
        // this.createBlockFlag += this.speed*dt;
        // if (this.createBlockFlag > this.templateHeight) {
        //   this.createNewBlock();
        //   this.createBlockFlag -= this.templateHeight;
        // }
    };
    __decorate([
        property(cc.Prefab)
    ], Index.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Index.prototype, "foregroundNode", void 0);
    __decorate([
        property(cc.Sprite)
    ], Index.prototype, "bgSprite", void 0);
    Index = __decorate([
        ccclass
    ], Index);
    return Index;
}(cc.Component));
exports.default = Index;

cc._RF.pop();