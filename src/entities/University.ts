import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("university", { schema: "psep" })
export class University {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "university_id",
    unsigned: true,
  })
  universityId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("int", { name: "faculty_id", unsigned: true })
  facultyId: number;

  @Column("int", { name: "study_program_id", unsigned: true })
  studyProgramId: number;

  @Column("int", { name: "course_id", unsigned: true })
  courseId: number;
}
