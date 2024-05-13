import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("course", { schema: "psep" })
export class Course {
  @PrimaryGeneratedColumn({ type: "int", name: "course_id", unsigned: true })
  courseId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("text", { name: "sillabus" })
  sillabus: string;

  @Column("int", { name: "year_id", unsigned: true })
  yearId: number;

  @Column("int", { name: "semester_id", unsigned: true })
  semesterId: number;

  @Column("int", { name: "course_type_id", unsigned: true })
  courseTypeId: number;
}
