const Sequelize = require('sequelize')
const db =new Sequelize('SocialMediaAppdb', 'SMAuser', 'socialpass', {
    host: 'localhost',
    dialect: 'mysql'
  })

const COL_ID_DEF = {
    type:Sequelize.DataTypes.INTEGER ,
    autoIncrement : true,
    primaryKey : true
}

const COL_USERNAME_DEF = {
    type:Sequelize.DataTypes.STRING(30),
    unique : true,
    allowNull : false
}

const COL_TITLE_DEF = {
    type:Sequelize.DataTypes.STRING(140),
    allowNull:false
}



const Users = db.define('users',{
    id:COL_ID_DEF,
    username:COL_USERNAME_DEF
})

const Posts = db.define('posts',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body:{
        type: Sequelize.DataTypes.TEXT,
        allowNull : false
    }
})

const Comments = db.define('comments',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body:{
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)



module.exports={
    db,
    Users,
    Posts,
    Comments
}
