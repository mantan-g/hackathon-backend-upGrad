import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import to from 'await-to-js';


@Injectable()
export class ProgramService {
    constructor(
        @InjectModel('Program') private readonly programModel: Model<any>,

      ) {}

    async createProgram(assetData: any) {
        const [err,asset] = await to(this.programModel.create(assetData));
    
        if (err) {
            console.log(`createProgram failed with ${err.message}`)
          throw new Error(`Failed to create programs: ${err.message}`);
        }

        return{
            message: "success",
             data: asset
    }
}

    async getPrograms(){

        const [err,programs]=await to(this.programModel.find({}).lean().exec()) as any;

        if(err){
            console.log(`getPrograms failed with ${err.message}`)
            throw new Error(`Failed to get programs: ${err.message}`)
        }

        console.log("getPrograms completed")
        return { 
            data: programs
        }
    }
    
}