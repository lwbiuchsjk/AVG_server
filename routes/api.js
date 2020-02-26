var express = require('express');
var router = express.Router();
const models = require('../db/models')

// 演示路由
router.get('/ajax-demo', function(req, res) {
  res.send("这是后端生成的剧本内容  " + req.query.date)
});

// 获取下一步数据
// 因为要查询数据库，而数据库查询是一个典型的异步操作，所以必须添加async
router.get('/next-move', async function(req, res) {
  let options = await models.Drama.getDrama(req.query.index)
  res.send({options: options})
})

// 尝试返回信息
// 直接将信息返回
router.get('/get-anwser', async function(req, res) {
  let anwser = await models.DocAnwser.checkAnwser(req.query.hero)
  if (anwser == 1) {
    res.send({hero: "正确"})
  } else {
    res.send({hero: "错误"})
  }
})

module.exports = router;