import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video2 } from './searchvideo.model';

@Injectable({ providedIn: 'root' })
export class VideoSearchService {
  private readonly apiUrl = 'https://yt-api.p.rapidapi.com/search';
  private readonly headers = new HttpHeaders({
    'X-Rapidapi-Host': 'yt-api.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  getSearchVideos(searchText: string): Observable<Video2[]> {
    const url = `${this.apiUrl}?query=${searchText}`;
    return this.http.get<any>(url, { headers: this.headers }).pipe(
      map((response: any) => {
        if (response && response.data && response.data.length > 0) {
          return response.data.map((item: any) => {
            if (item.type === 'video' && item.videoId) {
              let thumbnailUrl = '';
              let channelThumbnailUrl ='';
              console.log(item);
              if (item.thumbnail && item.thumbnail.length > 0) {
                item.thumbnail.sort((a: any, b: any) => b.width - a.width);
                thumbnailUrl = item.thumbnail[0].url;
              }
              if (item.channelThumbnail && item.channelThumbnail.length > 0) {
                item.thumbnail.sort((a: any, b: any) => b.width - a.width);
                channelThumbnailUrl = item.channelThumbnail[0].url;
              }

              return {
                videoURL: `https://www.youtube.com/watch?v=${item.videoId}`,
                title: item.title || '',
                description: item.description || '',
                thumbnail: thumbnailUrl,
                channelThumbnail : channelThumbnailUrl,
                channelName: item.channelTitle || '',
                viewCount : item.viewCount,
                videoid : item.videoId,
                publishDate : item.publishDate
              } as Video2;
            } else {
              console.error('Invalid item found:', item);
              return null;
            }
          }).filter((video: Video2 | null) => video !== null);
        } else {
          console.error('No data found in the response:', response);
          return [];
        }
      })
    );
  }
}

//This is the service for second free api but display 5 videos only 
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Video2 } from './searchvideo.model';


// @Injectable({ providedIn: 'root' })
// export class VideoSearchService {
//   private readonly apiKey = 'AIzaSyBmOg1B9Na7EeLNSBEx1HJrUABnRVDhitM';
//   private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/search';

//   constructor(private http: HttpClient) {}

//   getSearchVideos(searchText: string): Observable<Video2[]> {
//     const url = `${this.apiUrl}?key=${this.apiKey}&part=snippet&type=video&q=${encodeURIComponent(searchText)}`;
//     return this.http.get<any>(url).pipe(
//       map((response: any) => {
//         if (response && response.items && response.items.length > 0) {
//           return response.items.map((item: any) => {
//             const snippet = item.snippet;
//             return {
//               videoURL: `https://www.youtube.com/watch?v=${item.id.videoId}`,
//               title: snippet.title || '',
//               description: snippet.description || '',
//               thumbnail: snippet.thumbnails?.high?.url || '',
//               channelThumbnail: snippet.thumbnails?.default?.url || '',
//               channelName: snippet.channelTitle || '',
//               viewCount: 'N/A', // View count is not available in search response, you'd need to make another API call to get this
//               videoId: item.id.videoId,
//               publishDate: snippet.publishedAt
//             } as Video2;
//           });
//         } else {
//           console.error('No data found in the response:', response);
//           return [];
//         }
//       })
//     );
//   }
// }

