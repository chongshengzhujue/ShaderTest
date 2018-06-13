const { ccclass, property } = cc._decorator;

import ShaderUtils = require("./ShaderUtils");

@ccclass
export default class Index extends cc.Component {

  @property(cc.Prefab)
  blockPrefab: cc.Prefab = null;

  @property(cc.Node)
  foregroundNode: cc.Node = null;

  @property(cc.Sprite)
  bgSprite: cc.Sprite = null;

  templateQueue: cc.Node[] = [];
  blockPool: cc.NodePool = new cc.NodePool('block');
  wave: number = 0;
  templateHeight: number = 1334;
  speed: number = 600;
  createBlockFlag: number = 0;

  bgMoveY: number = 0;

  start() {
    // let initCount = 6;

    // for (let i = 0; i < initCount; ++i) {
    //   this.blockPool.put(cc.instantiate(this.blockPrefab));
    // }

    // this.createNewBlock();
    // this.createNewBlock();
    // this.createNewBlock();
    // this.createNewBlock();
    ShaderUtils.setShader(this.bgSprite, "uv");
  }

  createNewBlock() {
    const block = this.blockPool.get();

    block.y = this.templateHeight * (this.wave - 2);
    block.x = 0;
    block.parent = this.foregroundNode;
    this.templateQueue.push(block);
    if (this.wave > 4) {
      const reuseNode = this.templateQueue.shift();
      this.blockPool.put(reuseNode);
    }

    this.wave++;
  }

  update (dt) {
    this.bgMoveY += dt*0.2;
    this.bgMoveY = this.bgMoveY%1.0;
    ShaderUtils.use(this.bgSprite);
    ShaderUtils.setUniformIf(this.bgSprite, "u_frameMoveY", this.bgMoveY);
    // this.foregroundNode.y -= this.speed*dt;
    // this.createBlockFlag += this.speed*dt;

    // if (this.createBlockFlag > this.templateHeight) {
    //   this.createNewBlock();
    //   this.createBlockFlag -= this.templateHeight;
    // }
  }
}
