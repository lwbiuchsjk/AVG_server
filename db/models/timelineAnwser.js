'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
    class TimelineAnswer extends Sequelize.Model {

        /**
         * 查询文件指定是否正确
         * 
         * @static
         * @param {*} flag 查询正确答案还是错误答案
         * @memberof TimelineAnswer
         */
        static async checkAnswer(flag) {
            let last_answer = await this.findOne({
                where: {
                    timeline_answer: flag
                }
            })
            
            return last_answer.get({plain: true})
        }
    }

    TimelineAnswer.init({
        timeline_answer: DataTypes.INTEGER,
        action: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'TimelineAnswer',
        tableName: 'timeline_answer',
        timestamps: false
    })
    return TimelineAnswer
}