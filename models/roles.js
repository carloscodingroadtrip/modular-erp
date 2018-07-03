module.exports = (sequelize, DataTypes) => {
	var Role = sequelize.define(
		'Role',
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

	Role.associate = function(models) {
		Role.hasMany(models.User, {
			as: 'roles',
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Role;
};
