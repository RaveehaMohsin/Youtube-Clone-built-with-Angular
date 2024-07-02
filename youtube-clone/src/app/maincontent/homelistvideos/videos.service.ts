import { Injectable } from "@angular/core";
import { Video } from "./single-video.model";

@Injectable({providedIn : 'root'})
export class VideoService{

    private videolist: Video[] =[
        new Video(
            "Introduction to Angular",
            "Learn the basics of Angular framework.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFJSPEfjjrQ2TrgZsIrWJl2NN-qvdFqwazQ&s",
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
            "CSS Masters",
            700,
            35,
            4,
            new Date("2023-06-20")
        ),
        new Video(
            "Python Django Tutorial",
            "Build a web application with Python Django.",
            "https://i.ytimg.com/vi/VR0mBlz6yn0/sddefault.jpg",
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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
            "https://youtu.be/CGLdH5ORX-Y?si=Fje-K-GByOPB_DVr",
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

}