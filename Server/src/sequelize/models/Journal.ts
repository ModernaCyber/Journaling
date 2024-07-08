import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
// import { User } from "./User"; // Assuming User model is defined in User.ts

@Table
export class Journal extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  title!: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
  })
  content!: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @Column({
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt!: Date;

//   @ForeignKey(() => User)
//   @Column({
//     allowNull: false,
//   })
//   userId!: number;

//   @BelongsTo(() => User)
//   user!: User;
}
