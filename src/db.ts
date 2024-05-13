import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";
import { Course } from "./entities/Course";
import { CourseType } from "./entities/CourseType";
import { EmploymentPosition } from "./entities/EmploymentPosition";
import { Faculty } from "./entities/Faculty";
import { Semester } from "./entities/Semester";
import { StudyProgram } from "./entities/StudyProgram";
import { University } from "./entities/University";
import { User } from "./entities/User";
import { Year } from "./entities/Year";

configDotenv()
export const AppDataSource = new DataSource ({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number.parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        Course, 
        CourseType, 
        EmploymentPosition,
        Faculty,
        Semester,
        StudyProgram,
        University,
        User,
        Year
     ],
    logging: false
})