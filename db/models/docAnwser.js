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
    static async checkAnswer(doc_answer) {
      let condition = new Array(doc_answer.length)
      for (let i = 0; i < doc_answer.length; i++ ) {
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
        if(answer.length == doc_answer.length) {
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
  }

  DocAnswer.init({
    doc_name: DataTypes.STRING,
    target_people: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocAnswer',
    tableName: 'doc_answer',
    timestamps: false
  })
  return DocAnswer
}