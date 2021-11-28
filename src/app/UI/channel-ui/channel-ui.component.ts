import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IChannels } from 'src/app/models/channel';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-channel-ui',
  templateUrl: './channel-ui.component.html',
  styleUrls: ['./channel-ui.component.scss']
})
export class ChannelUIComponent implements OnInit {

  channels: IChannels[] = [];

  constructor(public firstService: FirstService, public _router: Router) {

  }  

  ngOnInit(): void {
  }

  goHome(){
    this._router.navigate(['']);
  }
}