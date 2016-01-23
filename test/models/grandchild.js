module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grandchild', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
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
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'parent',
        key: 'id'
      }
    },
    grandParentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'grandParent',
        key: 'id'
      }
    },
  }, {
    tableName: 'grandchild',
    freezeTableName: true
  });
};
