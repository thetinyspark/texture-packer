import { program } from "commander";
import IUserArgsService from "./IUserArgsService";

export default class UserArgsService implements IUserArgsService{
    constructor(){
        program.version("1.11.0"); 
        program.option('--dir <type>', 'the texture source directory', './');
        program.option('--size <number>', 'the output atlas size', '2048');
        program.option('--output <type>', 'the output dir', './');
        program.option('--optimize <number>', 'optimize by cropping transparent pixels', '1');
        program.option('--debug <number>', 'draws regions', '0');
        program.parse(process.argv);
    }

    getUserArg(key: string) {
        return program.opts()[key] || null;
    }
}