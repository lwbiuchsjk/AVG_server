'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
    class TimelineAnswer extends Sequelize.Model {

        /**
         * 查询文件指定是否正确
         * 
         * @static
         * @param {*} timeline_answer
         * @memberof TimelineAnswer
         */
        static async checkAnswer(timeline_answer) {
            console.log(timeline_answer)
            let last_answer = ""
            let result = await this.findOne({
                where: {
                    timeline_answer: "wrong"
                }
            }).then(answer => {
                last_answer = answer.get({ plain: true }).action
            }).findAll({
            }).then(answers => {
                for (let index in answers) {
                    let item = answers[index].get({ plain: true })
                    let array = item.timeline_answer.split(',')
                    if (array.length == timeline_answer.length) {
                        for (let j in array) {
                            if (array[j] != timeline_answer[j] && array[j] != "*") {
                                return last_answer.action
                            }
                        }
                        return item.action
                    } else {
                        return last_answer.action
                    }
                }
                return last_answer.action
            }).catch(error => {
                console.log(error)
            })

            return result
        }
    }

    TimelineAnswer.init({
        timeline_answer: DataTypes.STRING,
        action: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'TimelineAnswer',
        tableName: 'timeline_answer',
        timestamps: false
    })
    return TimelineAnswer
}