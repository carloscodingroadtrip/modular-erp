module.exports = (sequelize, DataTypes) => {
	var AddressBook = sequelize.define(
		'AddressBook',
		{
			addressId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
		}
	);
	AddressBook.associate = function(models) {
		AddressBook.belongsTo(models.Customer, {
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
			foreignKey: 'CustomerId',
		});
	};
	return AddressBook;
};
