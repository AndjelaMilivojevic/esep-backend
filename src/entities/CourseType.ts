import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("course_type", { schema: "psep" })
export class CourseType {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "course_type_id",
    unsigned: true,
  })
  courseTypeId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;
}
