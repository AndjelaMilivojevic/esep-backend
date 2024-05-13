import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employment_position", { schema: "psep" })
export class EmploymentPosition {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "employment_position_id",
    unsigned: true,
  })
  employmentPositionId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("int", { name: "study_program_id", unsigned: true })
  studyProgramId: number;
}
