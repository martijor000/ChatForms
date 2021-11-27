import { ChatMessage } from './../models/chat';
import { Injectable } from '@angular/core';
import { interval, Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { IChannels } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  public obs: Observable<number> = interval(5000);

  public items: IChannels[] = [];

  public Test: ChatMessage[] = [];

  public data: any[] = [];

  private apiUrl = "http://73.19.65.35:3500/api/";

  constructor(private http: HttpClient) {}

  public getChannel(): Observable<any> {
    return this.http.get(this.apiUrl + "channel/");
  }

  public getMessage(id: string): Observable<ChatMessage> {
    return this.http.get<ChatMessage>(`${this.apiUrl}channel/${id}`);
  }

  public postChannel(body: ChatMessage){
    return this.http.post(`${this.apiUrl}channel/${body.username}`, body)
  }

  public postMessage(body: ChatMessage){
    return this.http.post(`${this.apiUrl}channel/${body.username}`, body)
  }

  public patchMessage(bodyUrl: string, body: ChatMessage){
    return this.http.patch(`${this.apiUrl}channel/${bodyUrl}`, body)
  }

  public deleteChannel(channelName: string)
  {
    console.log(channelName)
    return this.http.delete(`${this.apiUrl}channel/` + channelName)
  }

}
