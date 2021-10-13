import { program } from "commander";
import IUserArgsService from "./IUserArgsService";

export default class UserArgsService implements IUserArgsService{
    constructor(){
        program.version("2.0.0"); 
        program.option('--dir <type>', 'the texture source directory', './');
        program.option('--size <number>', 'the output atlas size', '2048');
        program.option('--output <type>', 'the output dir', './');
        program.parse(process.argv);
    }

    getUserArg(key: string) {
        return program.opts()[key] || null;
    }
}