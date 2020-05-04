
module.exports=(sequelize, DataTypes) => {
    const following = sequelize.define('following', {
        userId: DataTypes.STRING,
        followerId: DataTypes.STRING
    })
    return following
}
