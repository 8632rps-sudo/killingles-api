const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: 'BRL'
    },
    features: {
      type: DataTypes.JSON,
      defaultValue: {
        contentAccess: '20%',
        pronunciationCorrections: 1,
        conversationPracticeHours: 0.5,
        ebooks: 2,
        emailSupport: false,
        prioritySupport: false,
        mentorship: false,
        certificate: false
      }
    },
    duration: {
      type: DataTypes.STRING,
      defaultValue: 'monthly'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return Plan;
};
