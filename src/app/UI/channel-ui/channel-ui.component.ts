import { Component, OnInit, Input } from '@angular/core';
import { IChannels } from 'src/app/models/channel';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-channel-ui',
  templateUrl: './channel-ui.component.html',
  styleUrls: ['./channel-ui.component.scss']
})
export class ChannelUIComponent implements OnInit {

  channels: IChannels[] = [];

  constructor(public firstService: FirstService) {

  }  

  ngOnInit(): void {
  }
}