import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "psep" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 128 })
  password: string;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("tinyint", { name: "active", width: 1, default: () => "'1'" })
  active: boolean;
}
