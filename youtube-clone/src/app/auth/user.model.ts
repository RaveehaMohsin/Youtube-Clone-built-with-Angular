export class User{
    constructor
    (  public email : string ,
        public id : string,
        private _token : string,
        private _tokenexpirationdata : Date,
    ){

    }

    get token()
    {
        if(!this._tokenexpirationdata || new Date() > this._tokenexpirationdata)
            {
                return null;
            }
        return this._token
    }
}