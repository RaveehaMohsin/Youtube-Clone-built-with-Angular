import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video2 } from './searchvideo.model';

@Injectable({ providedIn: 'root' })
export class VideoSearchService {
  private readonly apiUrl = 'https://yt-api.p.rapidapi.com/search';
  private readonly headers = new HttpHeaders({
    'X-Rapidapi-Key': 'f88f56ceebmsh8b75cd1acebc8bep117995jsn257a38877a31',
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
              if (item.thumbnail && item.thumbnail.length > 0) {
                item.thumbnail.sort((a: any, b: any) => b.width - a.width);
                thumbnailUrl = item.thumbnail[0].url;
              }

              return {
                videoURL: `https://www.youtube.com/watch?v=${item.videoId}`,
                title: item.title || '',
                description: item.description || '',
                thumbnail: thumbnailUrl,
                channelName: item.channelTitle || ''
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

