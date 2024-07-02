export class Video{
    title !: string;
    description !:string;
    thumbnail !: string;
    videoURL !: string;
    channelName !: string;
    views!:number;
    likes !: number;
    dislikes !:number;
    uploadDate !:Date;

    constructor(title : string , description : string , thumbnail : string , videourl :string, channelName : string , view : number , likes:number , dislikes : number , uploaddate:Date )
    {
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.videoURL = videourl;
        this.channelName = channelName;
        this.views = view;
        this.likes = likes;
        this.dislikes = dislikes;
        this.uploadDate = uploaddate;

    }
}
