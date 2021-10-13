import { Container } from "@thetinyspark/coffe-maker";
import LoadTextureCommand from "../command/LoadTexturesCommand";
import PackImagesCommand from "../command/PackImagesCommand";
import ParseUserArgsCommand from "../command/ParseUserArgsCommand";
import StartApplicationCommand from "../command/StartApplicationCommand";
import AppProxy from "../model/proxy/AppProxy";
import FileService from "../service/FileService";
import { PackerService } from "../service/PackerService";
import UserArgsService from "../service/UserArgsService";
import { APPLICATION_PROXY_TOKEN, FILE_SERVICE_TOKEN, LOAD_TEXTURES, PACKER_SERVICE, PACK_IMAGES, PARSE_USER_ARGS, START_APPLICATION, USER_ARGS_SERVICE } from "./app.constants";

export const container = new Container();

// services
container.register(FILE_SERVICE_TOKEN, ()=>{return new FileService()}, true);
container.register(USER_ARGS_SERVICE, ()=>{return new UserArgsService()}, true);
container.register(PACKER_SERVICE, ()=>{return new PackerService()}, true);

// proxies
container.register(APPLICATION_PROXY_TOKEN, ()=> {return new AppProxy()}, true);

// comands
container.register(START_APPLICATION, ()=>{return new StartApplicationCommand()});
container.register(PARSE_USER_ARGS, ()=>{return new ParseUserArgsCommand()});
container.register(LOAD_TEXTURES, ()=>{return new LoadTextureCommand()});
container.register(PACK_IMAGES, ()=>{return new PackImagesCommand()});