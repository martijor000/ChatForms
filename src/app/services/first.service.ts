import { IChatMessage } from './../models/chat';
import { Injectable } from '@angular/core';
import { interval, Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { IChannels } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  private apiUrl = "http://73.19.65.35:3500/api/";

  constructor(private http: HttpClient) {}

  public getChannel(): Observable<any> {
    return this.http.get(this.apiUrl + "channel/");
  }

  public getMessage(id: string): Observable<IChatMessage> {
    return this.http.get<IChatMessage>(`${this.apiUrl}channel/${id}`);
  }

  public postChannel(body: IChatMessage, id: string){
    return this.http.post(`${this.apiUrl}channel/${id}`, body)
  }

  public postMessage(body: IChatMessage, id: string){
    this.http.post(`${this.apiUrl}channel/${id}`, body).subscribe(data =>{
      this.getMessage(id).subscribe();
      location.reload();
    })
  }

  public patchMessage(bodyUrl: string, body: IChatMessage){
    return this.http.patch(`${this.apiUrl}channel/${bodyUrl}`, body)
  }

  public deleteChannel(channelName: string)
  {
    return this.http.delete(`${this.apiUrl}channel/` + channelName)
  }

}
