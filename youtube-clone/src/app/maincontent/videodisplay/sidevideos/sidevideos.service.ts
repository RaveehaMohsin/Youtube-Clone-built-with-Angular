import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video3 } from './video.model';


@Injectable({ providedIn: 'root' })
export class SideVideoService {
  private readonly apiKey =;
  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}

  getSearchVideos(searchText: string): Observable<Video3[]> {
    const url = `${this.apiUrl}?key=${this.apiKey}&part=snippet&type=video&q=${encodeURIComponent(searchText)}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        if (response && response.items && response.items.length > 0) {
          return response.items.map((item: any) => {
            const snippet = item.snippet;
            return {
              videoURL: `https://www.youtube.com/watch?v=${item.id.videoId}`,
              title: snippet.title || '',
              description: snippet.description || '',
              thumbnail: snippet.thumbnails?.high?.url || '',
              channelThumbnail: snippet.thumbnails?.default?.url || '',
              channelName: snippet.channelTitle || '',
              viewCount: 'N/A',
              videoId: item.id.videoId,
              publishDate: snippet.publishedAt
            } as Video3;
          });
        } else {
          console.error('No data found in the response:', response);
          return [];
        }
      })
    );
  }
}

