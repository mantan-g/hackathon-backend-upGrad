import { Injectable } from "@nestjs/common";

@Injectable()
export class ProgramService {
    getPrograms(): string[] {
        return ["Program1", "Program2", "Program3"];
    }
}