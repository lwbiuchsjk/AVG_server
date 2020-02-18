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

module.exports = router;