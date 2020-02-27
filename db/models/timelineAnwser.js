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
            let last_answer = await this.findOne({
                where: {
                    timeline_answer: "wrong"
                }
            })

            let true_answers = await this.findAll({})

            for (let index in true_answers) {
                let answer = true_answers[index].get({plain:true})
                let array = answer.timeline_answer.split(',')
                let bingoNumber = 0
                if (array.length == timeline_answer.length) {
                    for (let j in array) {
                        if (timeline_answer[j] != undefined && timeline_answer[j] != "" && (array[j] == timeline_answer[j] || array[j] == "*")) {
                            bingoNumber++
                        }
                    }
                    if (bingoNumber == array.length) {
                        return answer
                    }
                } 
            }
            
            return last_answer.get({plain: true})
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