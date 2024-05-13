import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("study_program", { schema: "psep" })
export class StudyProgram {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "study_program_id",
    unsigned: true,
  })
  studyProgramId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("date", { name: "accreditation_date" })
  accreditationDate: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("varchar", { name: "academic_title", length: 45 })
  academicTitle: string;

  @Column("int", { name: "course_id", unsigned: true })
  courseId: number;

  @Column("int", { name: "employment_position_id", unsigned: true })
  employmentPositionId: number;
}
