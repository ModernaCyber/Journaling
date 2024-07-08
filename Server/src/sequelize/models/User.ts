import { Column, DataType, Model, Table } from "sequelize-typescript";
@Table
export class User extends Model {
    @Column
    name!: string;
  
    @Column
    email!: string;
  
    @Column
    password!: string;
  
    @Column
    isActive?: boolean;
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
    
}
