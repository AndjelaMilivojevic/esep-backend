import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("semester", { schema: "psep" })
export class Semester {
  @PrimaryGeneratedColumn({ type: "int", name: "semester_id", unsigned: true })
  semesterId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;
}
