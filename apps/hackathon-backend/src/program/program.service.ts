import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import to from 'await-to-js';


@Injectable()
export class ProgramService {
    constructor(
        @InjectModel('Program') private readonly programModel: Model<any>,

      ) {}
    
    
    getPrograms(): string[] {
        return ["Program1", "Program2", "Program3"];
    }

    async createProgram(assetData: any) {
        const [err,asset] = await to(this.programModel.create(assetData));
    
        if (err) {
          throw new Error(`Failed to create asset: ${err.message}`);
        }

        return asset
    }
    
}