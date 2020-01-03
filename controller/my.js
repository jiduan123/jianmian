'use strict';

const Controller = require('egg').Controller;

class MyController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '相应到客户端的内容';
  }
}

module.exports = MyController;
