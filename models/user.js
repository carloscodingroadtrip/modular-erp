module.exports = (sequelize, DataTypes) => {
	var user = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER(3),
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			user_name: {
				type: DataTypes.STRING(60),
				allowNull: false,
			},
			user_email: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			user_pass: {
				type: DataTypes.STRING(15),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);
	user.associate = function(models) {
		user.belongsTo(models.role);
	};

	return user;
};
