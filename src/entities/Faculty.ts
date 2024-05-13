import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("faculty", { schema: "psep" })
export class Faculty {
  @PrimaryGeneratedColumn({ type: "int", name: "faculty_id", unsigned: true })
  facultyId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("varchar", { name: "picture_path", length: 255 })
  picturePath: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("int", { name: "study_program_id", unsigned: true })
  studyProgramId: number;
}
