import { Mediator } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import { LOAD_TEXTURES, LOG_REMOVE_BIG_IMAGE, PARSE_USER_ARGS, START_APPLICATION } from "../config/app.constants";

export default class AppMediator extends Mediator{
    constructor(){
        super();
    }

    public start(){
        this.getFacade().subscribe(LOG_REMOVE_BIG_IMAGE, this._onRemoveBigImage);
        this.getFacade().subscribe(LOAD_TEXTURES, this._onLoadTextures);
        this.getFacade().subscribe(PARSE_USER_ARGS, this._onUserArgs);

        this._onStart();
    }

    private _onUserArgs(){
        const msg = `>>> loading user arguments`;
        console.log(msg);
    }

    private _onPack(){
        const msg = `>>> pack images`; 
        console.log(msg);
    }

    private _onStart(){
        const msg = `
******************************************************************
**************** THANK YOU FOR USING TEXTURE PACKER **************
******************************************************************
        `;

        console.log(msg);
    }

    private _onLoadTextures(notification:INotification){
        const msg = `>>> loading textures`;
        console.log(msg);
    }

    private _onRemoveBigImage = (notification:INotification) => {
        const img = notification.getPayload();
        const msg = `... skipping ${img.src} because it is too big`;
        console.log(msg);
    }
}