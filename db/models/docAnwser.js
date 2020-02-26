'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

/*
const sequelize = new Sequelize('timeline_anwser', 'root', 'lsb01099z.MYSQL', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
*/

module.exports = (sequelize, DataTypes) => {
  class DocAnwser extends Sequelize.Model {

    /**
     * 查询文件指定是否正确
     * 
     * @static
     * @param {*} doc_anwser
     * @memberof DocAnwser
     */
    static async checkAnwser(doc_anwser) {
      let condition = new Array(doc_anwser.length)
      for (let i = 0; i < doc_anwser.length; i++ ) {
        let item = JSON.parse(doc_anwser[i])
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
      }).then(anwser => {
        if(anwser.length == doc_anwser.length) {
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

  DocAnwser.init({
    doc_name: DataTypes.STRING,
    target_people: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocAnwser',
    tableName: 'doc_anwser',
    timestamps: false
  })
  return DocAnwser
}