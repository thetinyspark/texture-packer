// services
export const FILE_SERVICE_TOKEN:string = 'service:file'; 
export const USER_ARGS_SERVICE:string = "service:user-args";
export const PACKER_SERVICE:string = "service:packer-service";
export const DRAWING_SERVICE:string = "service:drawing-service";


// model 
export const APP_MODEL_TOKEN:string = 'model:app';

// commands
export const START_APPLICATION:string = 'START_APP';
export const PARSE_USER_ARGS:string = 'PARSE_USER_ARGS';
export const LOAD_TEXTURES:string = 'LOAD_TEXTURES';
export const PACK_IMAGES:string = 'PACK_IMAGES';
export const REMOVE_BIG_IMAGES:string = 'REMOVE_BIG_IMAGES';
export const EXPORT_COMMAND:string = 'EXPORT_COMMAND';

// view 
export const APP_MEDIATOR:string = 'app:mediator';

// proxies
export const APPLICATION_PROXY_TOKEN:string = 'APP_PROXY';

// custom event 
export const LOG_REMOVE_BIG_IMAGE:string = 'log_remove_big_image';