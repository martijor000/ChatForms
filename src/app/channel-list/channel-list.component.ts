import { Component, OnInit } from '@angular/core';
import { IChannels } from '../models/channel';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channels: any[] = [];
  

  constructor(public service: FirstService) {
  }

  ngOnInit(){
    this.service.getChannel().subscribe(data => this.channels = data);
  }

}
