module.exports = (sequelize, DataTypes) => {
	var Status = sequelize.define(
		'Status',
		{
			id: {
				type: DataTypes.INTEGER(3),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			status: {
				type: DataTypes.STRING(40),
			},
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);
	Status.associate = function(models) {
		Status.hasMany(models.Order);
	};
	return Status;
};
