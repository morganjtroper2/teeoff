import { DataTypes, Sequelize, Model } from 'sequelize';
import { Optional } from 'sequelize/types';
import bcrypt from 'bcrypt';

interface UserAttributes {
  username: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'username'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public username!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Method to hash and set the password for the user
  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

// Define the UserFactory function to initialize the User model
export function UserFactory(sequelize: Sequelize): typeof User {
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      sequelize,
      hooks: {
        // Before creating a new user, hash and set the password
        beforeCreate: async (user: User) => {
          await user.setPassword(user.password);
        },
        // Before updating a user, hash and set the new password if it has changed
        beforeUpdate: async (user: User) => {
          if (user.changed('password')) {
            await user.setPassword(user.password);
          }
        },
      }
    }
  );

  return User;
}
