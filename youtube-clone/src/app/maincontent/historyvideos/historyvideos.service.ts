import { Injectable } from "@angular/core";
import { Video } from "../homelistvideos/single-video/single-video.model";

@Injectable({ providedIn: 'root' })
export class HistoryService {
    historyvideos: Video[] = [
        new Video(
            "History of Space Exploration",
            "Journey through the milestones of space exploration.",
            "https://i.ytimg.com/vi/Lk8KG1T-HZ8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAQzT3Toh3ZdxbpyTo_ImnYIKBvA",
            "https://www.example.com/videos/space-exploration",
            "Science Hub",
            8500,
            1200,
            50,
            new Date("2023-05-10")
        ),
        new Video(
            "Ancient Civilizations: The Egyptians",
            "Uncover the secrets of ancient Egyptian civilization.",
            "https://i.ytimg.com/vi/ha1NneZGm7A/maxresdefault.jpg",
            "https://www.example.com/videos/ancient-egyptians",
            "History Channel",
            78000,
            12000,
            400,
            new Date("2023-07-25")
        ),
        new Video(
            "Top 10 Football Goals",
            "A compilation of the best football goals in history.",
            "https://i.ytimg.com/vi/I2NszE1VPcM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5MiML5_6xTGOj03yX47eJIt3OpA",
            "https://www.example.com/videos/top-10-football-goals",
            "Sports Arena",
            150000,
            25000,
            500,
            new Date("2024-01-05")
        ),
        new Video(
            "Culinary Delights: Italian Cuisine",
            "Exploring the rich flavors of Italian cuisine.",
            "https://i.ytimg.com/vi/ob52pLHGFgM/maxresdefault.jpg",
            "https://www.example.com/videos/italian-cuisine",
            "Food Network",
            20000,
            3000,
            150,
            new Date("2023-12-12")
        ),
        new Video(
            "The Evolution of Jazz Music",
            "A journey through the history of jazz music.",
            "https://i.ytimg.com/vi/5qtg6L6P7Ic/maxresdefault.jpg",
            "https://www.example.com/videos/jazz-music",
            "Music World",
            32000,
            5000,
            200,
            new Date("2023-11-20")
        ),
        new Video(
            "The Art of Coding",
            "An in-depth look at the history and evolution of coding.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZbKK6Ywd4iolvaA5cnEWHzU920wlSH1keg&s",
            "https://www.example.com/videos/the-art-of-coding",
            "Tech Channel",
            10500,
            1500,
            100,
            new Date("2023-06-15")
        ),
        new Video(
            "Wildlife of the Amazon Rainforest",
            "Discover the diverse wildlife of the Amazon rainforest.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjLsRvzei5CL6MO56cThXRxlERhCCruZwGg&s",
            "https://www.example.com/videos/amazon-rainforest",
            "Nature Documentaries",
            45000,
            7000,
            250,
            new Date("2024-03-18")
        ),

        new Video(
            "Modern Architecture Marvels",
            "Showcasing the marvels of modern architecture around the world.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSlUUEHqjqGVai_eD6L9eDUIJBImADgxE2A&s",
            "https://www.example.com/videos/modern-architecture",
            "Design Hub",
            56000,
            8500,
            300,
            new Date("2024-02-14")
        )
    ];

    gethistoryvideos()
    {
        return this.historyvideos;
    }

    deleteVideo(video : Video)
    {
        const index = this.historyvideos.indexOf(video);
        if (index > -1) {
            this.historyvideos.splice(index, 1);
        }
    }
}
