import { Facade, ICommandFactoryMethod } from "@thetinyspark/coffe-maker";
import { LOAD_TEXTURES, PACK_IMAGES, PARSE_USER_ARGS, START_APPLICATION } from "./app.constants";
import { container } from "./ioc";

export const facade = new Facade();
facade.registerCommand(START_APPLICATION, container.get(START_APPLICATION) as ICommandFactoryMethod);
facade.registerCommand(PARSE_USER_ARGS, container.get(PARSE_USER_ARGS) as ICommandFactoryMethod);
facade.registerCommand(LOAD_TEXTURES, container.get(LOAD_TEXTURES) as ICommandFactoryMethod);
facade.registerCommand(PACK_IMAGES, container.get(PACK_IMAGES) as ICommandFactoryMethod);