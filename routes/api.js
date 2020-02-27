var express = require('express');
var path = require('path');
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
router.get('/get-Answer', async function(req, res) {
  let doc_answer = await models.DocAnswer.checkAnswer(req.query.hero)
  let timeline = await models.TimelineAnswer.checkAnswer(req.query.timeline)
  if (doc_answer == 1) {
    console.log(timeline.action)
    res.send({hero: "正确", timeline: timeline.timeline_answer, fileName: timeline.action})
    //console.log(path.join(__dirname, '../public', "test.txt"))
    //res.sendFile(timeline.action)
  } else {
    res.send({hero: "错误", timeline: "请先选择正确人员", fileName: ""})
  }
})

router.get('/test', async function(req, res) {
  res.sendFile(path.join(__dirname, '../public', "test.txt"))
})

module.exports = router;