import { Injectable } from "@angular/core";
import { Video } from "../homelistvideos/single-video/single-video.model";

@Injectable({ providedIn: 'root' })
export class LikedVideosService {
    likedvideos: Video[] = [
        new Video(
            "Gourmet Cooking: Italian Cuisine",
            "Learn how to cook authentic Italian dishes.",
            "https://i.ytimg.com/vi/ob52pLHGFgM/maxresdefault.jpg",
            "https://www.example.com/videos/italian-cuisine",
            "Chef's Kitchen",
            92000,
            15000,
            520,
            new Date("2024-02-22")
        ),

        new Video(
            "Angular Basics",
            "A comprehensive guide to Angular basics.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFJSPEfjjrQ2TrgZsIrWJl2NN-qvdFqwazQ&s",
            "https://www.example.com/videos/angular-basics",
            "Code Academy",
            80000,
            12000,
            400,
            new Date("2024-03-20")
        ),
        new Video(
            "Quick and Easy Breakfast Recipes",
            "Delicious breakfast recipes you can make in minutes.",
            "https://i.ytimg.com/vi/XPovkUZfWok/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsKC5molbheULmYSHTBNauLwaZxg",
            "https://www.example.com/videos/breakfast-recipes",
            "Home Cooking",
            54000,
            9000,
            250,
            new Date("2024-03-05")
        ),
        new Video(
            "React Fundamentals",
            "Learn the fundamentals of React.",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmij1LpFsKiMvvoeVY5QQv8DKHjaHhgaTFaqP5TykLpiQz-FfPum3v3sOwJL9Ngri-GHU&usqp=CAU",
            "https://www.example.com/videos/react-fundamentals",
            "Dev Tutorials",
            75000,
            10000,
            350,
            new Date("2024-04-15")
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
        ),
        new Video(
            "Mastering TypeScript",
            "Deep dive into TypeScript and its features.",
            "https://i.ytimg.com/vi/Fud9LnJ6DCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXdilyQgBoMa2bnMCGJQS7Vc-1tQ",
            "https://www.example.com/videos/typescript",
            "Tech Insights",
            67000,
            11000,
            290,
            new Date("2024-05-10")
        ),

        new Video(
            "Python for Data Science",
            "An introduction to using Python for data science.",
            "https://static.codingforentrepreneurs.com/media/series/reactify-django/114c7650-1617-4c85-9bfc-4af289016656.jpg",
            "https://www.example.com/videos/python-data-science",
            "Data Academy",
            87000,
            14000,
            470,
            new Date("2024-04-01")
        )
    ];

    getLikevideosvideos() {
        return this.likedvideos;
    }

    unlikevideo(video : Video)
    {
        const index = this.likedvideos.indexOf(video);
        if (index > -1) {
            this.likedvideos.splice(index, 1);
        }
    }
}
