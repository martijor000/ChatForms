import { Component, OnInit, Input } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';
import { Router } from '@angular/router';
import { ChatMessage } from 'src/app/models/chat';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss']
})
export class ChatUIComponent implements OnInit {

  constructor(private _router: Router, private firstService: FirstService) { }

  @Input() chatMessage: ChatMessage = {
    username: "",
    message: "",
    id: "",
    created_on: new Date,
    updated_on: new Date
  };  


  ngOnInit(){
  }

  SendMessage(message: string)
  {
    this.chatMessage.username = this._router.url.substring(this._router.url.lastIndexOf("/") + 1);
    this.chatMessage.message = message;
    this.firstService.postMessage(this.chatMessage).subscribe(() => {
    });

  }

  delete()
  {
    this.firstService.deleteChannel(this._router.url.substring(this._router.url.lastIndexOf("/") + 1)).subscribe();
    this._router.navigate(['channel']);
  }
}
