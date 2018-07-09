module.exports = (sequelize, DataTypes) => {
	var Note = sequelize.define(
		'Note',
		{
			id: {
				type: DataTypes.INTEGER(3),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			note: {
				//the note itself
				type: DataTypes.STRING,
			},
			whoCreated: {
				//who added a note to the order
				type: DataTypes.STRING(20),
			},
			whoUpdated: {
				//In case someone edits a particular note
				type: DataTypes.STRING(20),
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);
	Note.associate = function(models) {
		Note.belongsTo(models.Order, {
			onDelete: 'CASCADE',
			foreignKey: 'OrderId',
		});
	};
	return Note;
};
