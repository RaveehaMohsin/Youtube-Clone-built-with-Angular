export interface Video2 {
  videoURL: string;
  title: string;
  description: string;
  thumbnail: string;
  channelName: string;
  channelThumbnail : string;
  viewCount : number;
  videoid : string;
  publishDate : Date;

}


//This is the model for second free api but display 5 videos only 

// export interface Video2 {
//     videoURL: string;
//     title: string;
//     description: string;
//     thumbnail: string;
//     channelName: string;
//     channelThumbnail: string;
//     viewCount: string; // Keeping as string since the initial response does not provide view count
//     videoId: string; // Correcting to match the response field name
//     publishDate: string; // Keeping as string because it's an ISO date string in the response
//   }
  