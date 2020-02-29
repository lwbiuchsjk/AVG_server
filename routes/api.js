var express = require('express');
var path = require('path');
var router = express.Router();
const models = require('../db/models')

// 演示路由
router.get('/ajax-demo', function (req, res) {
    res.send("这是后端生成的剧本内容  " + req.query.date)
});

// 获取下一步数据
// 因为要查询数据库，而数据库查询是一个典型的异步操作，所以必须添加async
router.get('/next-move', async function (req, res) {
    let options = await models.Drama.getDrama(req.query.index)
    res.send({ options: options })
})

// 尝试返回信息
// 直接将信息返回
router.get('/get-Answer', async function (req, res) {
    let doc_answer = await models.DocAnswer.checkPeopleAnswer(req.query.hero)
    if (doc_answer == 1) {
        let timeline = await models.DocAnswer.checkTimelineAnswer(req.query.timeline)
        let timeline_answer;
        switch (timeline) {
            case 1:
                timeline_answer = await models.TimelineAnswer.checkAnswer(timeline)
                res.send({ hero: '调查对象正确', timeline: "时间线正确", fileName: timeline_answer.action })
                break;
            case 0:
                timeline_answer = await models.TimelineAnswer.checkAnswer(timeline)
                res.send({ hero: '调查对象正确', timeline: "时间线错误", fileName: timeline_answer.action })
                break;
            case -1:
                res.send({ hero: '调查对象正确', timeline: "请补全时间线", fileName: "" })
                break;
            default:
                console.log("ERR!")
        }
    } else {
        res.send({ hero: "调查对象错误", timeline: "", fileName: "" })
    }
})

router.get('/game-begin', async function (req, res) {
    //console.log(path.join(__dirname, '../public/file/', "调查5.pdf"))
    res.sendFile(path.join(__dirname, '../public', "test.txt"))
})

module.exports = router;