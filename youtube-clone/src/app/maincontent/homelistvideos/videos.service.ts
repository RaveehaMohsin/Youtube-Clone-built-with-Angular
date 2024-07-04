import { Injectable } from "@angular/core";
import { Video } from "./single-video/single-video.model";

@Injectable({providedIn : 'root'})
export class VideoService{

    private videolist: Video[] =[
        new Video(
            "Introduction to Angular",
            "Learn the basics of Angular framework.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFJSPEfjjrQ2TrgZsIrWJl2NN-qvdFqwazQ&s",
            "https://youtu.be/csG0pwe3O_M?si=BAflzwbdG7dAOzjO",
            "Angular Academy",
            1000,
            50,
            5,
            new Date("2023-06-01")
        ),
        new Video(
            "React Hooks Tutorial",
            "Master React Hooks in 30 minutes.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmij1LpFsKiMvvoeVY5QQv8DKHjaHhgaTFaqP5TykLpiQz-FfPum3v3sOwJL9Ngri-GHU&usqp=CAU",
            "https://youtu.be/LX4JUscM9Sk?si=rpdtVMZlQl1o3Hs_",
            "Reactify",
            500,
            25,
            2,
            new Date("2023-06-05")
        ),
        new Video(
            "Node.js Express Tutorial",
            "Build a RESTful API with Node.js and Express.",
            "https://i.ytimg.com/vi/UW4TyxqRAQs/maxresdefault.jpg",
            "https://youtu.be/w-7RQ46RgxU?si=ZTI1KduLvKnr2AGe",
            "Node Masters",
            800,
            40,
            3,
            new Date("2023-06-10")
        ),
        new Video(
            "JavaScript ES6 Features",
            "Discover the new features of ECMAScript 6.",
            "https://i.ytimg.com/vi/Fud9LnJ6DCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXdilyQgBoMa2bnMCGJQS7Vc-1tQ",
            "https://youtu.be/LO5eTH4Pe8E?si=THvP3-0WWe8zU5-1",
            "JS Wizards",
            1200,
            60,
            6,
            new Date("2023-06-15")
        ),
        new Video(
            "CSS Grid Layout Tutorial",
            "Learn to create responsive layouts with CSS Grid.",
            "https://i.ytimg.com/vi/0xMQfnTU6oo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALodM2cggVmNzauAbHhn-qPNXzeQ",
            "https://youtu.be/xBSlwwitD5U?si=7cFiUQ0WBLtPBpoM",
            "CSS Masters",
            700,
            35,
            4,
            new Date("2023-06-20")
        ),
        new Video(
            "Python Django Tutorial",
            "Build a web application with Python Django.",
            "https://static.codingforentrepreneurs.com/media/series/reactify-django/114c7650-1617-4c85-9bfc-4af289016656.jpg",
            "https://youtu.be/F5mRW0jo-U4?si=b4gfK-s_SBl82kPh",
            "Python Pro",
            1500,
            75,
            7,
            new Date("2023-06-25")
        ),
        new Video(
            "Vue.js Crash Course",
            "Get started with Vue.js framework in one hour.",
            "https://i.ytimg.com/vi/-8lbLiIuQhY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBfnvhW3y-cLKWS-1n7lnO0Fe8arw",
            "https://youtu.be/nhBVL41-_Cw?si=3hOy7K3V5EKbcjbL",
            "Vue Academy",
            900,
            45,
            5,
            new Date("2023-06-30")
        ),
        new Video(
            "MongoDB Tutorial for Beginners",
            "Learn MongoDB database from scratch.",
            "https://i.ytimg.com/vi/084rmLU1UgA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCiUPZoyqEnuPhRLwDM42YaBhd-xA",
            "https://youtu.be/-bt_y4Loofg?si=G2zOKIT-rQ22FTt6",
            "MongoDB Masters",
            1000,
            50,
            6,
            new Date("2023-07-01")
        )

    ]

    getVideos(){
        return this.videolist;
    }

    extractYouTubeId(videoURL : string) {
        let videoId = '';
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = videoURL.match(regex);
    
        if (match) {
            videoId = match[1];
        }
        
        return videoId;
    }

}