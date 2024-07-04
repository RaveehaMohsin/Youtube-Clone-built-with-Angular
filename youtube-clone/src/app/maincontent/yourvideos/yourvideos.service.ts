import { Injectable } from "@angular/core";
import { Video } from "../homelistvideos/single-video/single-video.model";

@Injectable({providedIn : 'root'})
export class YourVideosService{

    YourVideosData : Video[]=[
        {
           title: 'Breaking News: Major Event Unfolds',
           description: 'Detailed coverage of a significant event that has just happened. Stay tuned for more updates.',
           thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqvoAt8vC-XcpSrfShh8-blZX7gnolSCS_A&s',
           videoURL: 'https://youtu.be/XUhacmCj7uU?si=lyUxKfAPouNlkKxM',
           channelName: 'Global Media Hub',
           views: 125000,
           likes: 1000,
           dislikes: 50,
           uploadDate: new Date('2024-06-01'),
         },
         {
          
           title: 'Top 10 Comedy Skits of All Time',
           description: 'A compilation of the funniest comedy skits that will make you laugh out loud.',
           thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnBum3bDsYUUx2e0jTq-Krp8aN-0LtX_YQw&s',
           videoURL: 'https://example.com/videos/comedy1.mp4',
           channelName: 'Global Media Hub',
           views: 250000,
           likes: 5000,
           dislikes: 100,
           uploadDate: new Date('2024-05-15'),
         },
         {
           
           title: 'Educational Video: Learn Angular in 30 Minutes',
           description: 'An introductory video to Angular, covering the basics and getting you started with your first project.',
           thumbnail: 'https://i.ytimg.com/vi/Ati-oip_HcU/mqdefault.jpg?days_since_epoch=19877',
           videoURL: 'https://example.com/videos/education1.mp4',
           channelName: 'Global Media Hub',
           views: 75000,
           likes: 2500,
           dislikes: 30,
           uploadDate: new Date('2024-04-10'),
         },
         {
           
           title: 'Travel Vlog: Exploring the Alps',
           description: 'Join us on an adventure through the stunning landscapes of the Alps. A visual treat for nature lovers.',
           thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_pcO0Du8j0EjzPpiNubSRQBIUnP7-CzWQw&s',
           videoURL: 'https://example.com/videos/travel1.mp4',
           channelName: 'Global Media Hub',
           views: 150000,
           likes: 4000,
           dislikes: 60,
           uploadDate: new Date('2024-03-20'),
         },
         {         
           title: 'Cooking Show: Delicious Pasta Recipes',
           description: 'Learn how to cook three different pasta recipes that are sure to delight your taste buds.',
           thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVA5NyzwdQ-ETZhBLhY3LD8MMV6JCt6D-vUA&s',
           videoURL: 'https://example.com/videos/cooking1.mp4',
           channelName: 'Global Media Hub',
           views: 95000,
           likes: 3000,
           dislikes: 40,
           uploadDate: new Date('2024-02-14'),
         },
         
         
   ]

   getVideos()
   {
    return this.YourVideosData;
   }

   getvideo(index : number)
   {
    return this.YourVideosData[index];
   }

   addvideo(video : Video)
   {
    this.YourVideosData.unshift(video);
   }

   updateVideo(index :number , video : Video)
   {
    this.YourVideosData[index] = video;
   }

   deleteVideo(index : number)
   {
    this.YourVideosData.splice(index , 1);
   }
   

}