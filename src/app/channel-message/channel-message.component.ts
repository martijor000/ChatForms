import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel-message',
  templateUrl: './channel-message.component.html',
  styleUrls: ['./channel-message.component.scss']
})
export class ChannelMessageComponent implements OnInit {

  @Input() channels: any = {
    channel: ""
  };

  constructor(private _router: Router) { }

  ngOnInit(){
  }

  joinClick(channelname: string)
  {
    this._router.navigate(['channel/' + channelname]);
  }

}
