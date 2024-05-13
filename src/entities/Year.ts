import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("year", { schema: "psep" })
export class Year {
  @PrimaryGeneratedColumn({ type: "int", name: "year_id", unsigned: true })
  yearId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;
}
