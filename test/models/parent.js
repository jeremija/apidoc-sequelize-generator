module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parent', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    category: {
      type: DataTypes.ENUM('CAT1', 'CAT2'),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    parentDetailsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'program',
        key: 'id'
      }
    }
  }, {
    tableName: 'parent',
    freezeTableName: true
  });
};
