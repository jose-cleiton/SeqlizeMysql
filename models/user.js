const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fulName: DataTypes.STRING,
    email: DataTypes.STRING,
},{
  underscored: true,
});

}

module.export = User;