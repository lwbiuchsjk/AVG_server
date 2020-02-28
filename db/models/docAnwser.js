'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
    class DocAnswer extends Sequelize.Model {

        /**
         * 查询文件指定是否正确
         * 
         * @static
         * @param {*} doc_answer
         * @memberof DocAnswer
         */
        static async checkPeopleAnswer(doc_answer) {
            let condition = new Array(doc_answer.length)
            for (let i = 0; i < doc_answer.length; i++) {
                let item = JSON.parse(doc_answer[i])
                condition[i] = {
                    doc_name: item.text,
                    target_people: item.hero
                }
            }
            console.log(condition)
            let result = await this.findAll({
                where: {
                    [Op.or]: condition
                }
            }).then(answer => {
                if (answer.length == doc_answer.length) {
                    console.log("RIGHT!")
                    return 1
                } else {
                    console.log("WRONG!")
                    return 0
                }
            }).catch(error => {
                console.log(error)
            })

            console.log(result)
            return result
        }

        static async checkTimelineAnswer(doc_timeline) {
            let timeline_right = function(timeline) {
                // 辅助方法，判断提交的timeline就是正确的timeline
                let before_sort = new Array(doc_timeline.doc)
                for (let i in doc_timeline) {
                    before_sort[i] = doc_timeline[i]
                }
                let after_sort = timeline.sort()
                console.log(before_sort)
                console.log(after_sort)
                for (let index in before_sort) {
                    if (before_sort[index] != after_sort[index]) {
                        console.log("match ERR!!!")
                        return false
                    }
                }
                return true
            } 
            let condition = new Array(doc_timeline.length)
            for (let i = 0; i < doc_timeline.length; i++) {
                condition[i] = {
                    doc_name: doc_timeline[i],
                }
            }

            let true_answers = await this.findAll({
                where : {
                    [Op.or]: condition
                }
            })

            let player_timeline = new Array(doc_timeline.length)

            if (true_answers.length != doc_timeline.length) {
                // 用户发来的选项不合法
                console.log("illigal timeline input!!!")
                return -1
            }

            for (let index in true_answers) {
                let answer = true_answers[index].get({plain:true})
                let tid = doc_timeline.indexOf(answer.doc_name)
                player_timeline[tid] = answer.timeline
            }

            if (timeline_right(player_timeline)) {
                return 1
            }

            return 0
        }
    }

    DocAnswer.init({
        doc_name: DataTypes.STRING,
        target_people: DataTypes.STRING,
        timeline: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'DocAnswer',
        tableName: 'doc_answer',
        timestamps: false
    })
    return DocAnswer
}