module.exports = (sequelize, DataTypes) => {
	var role = sequelize.define(
		'role',
		{
			id: {
				type: DataTypes.INTEGER(2),
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			role_name: {
				type: DataTypes.STRING(15),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);
	// role.associate = function(models) {
	// 	role.hasMany(models.user);
	// };

	return role;
};
