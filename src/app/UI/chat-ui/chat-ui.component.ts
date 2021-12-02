import { Component, OnInit, Input } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';
import { Router } from '@angular/router';
import { IChatMessage } from 'src/app/models/chat';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss']
})
export class ChatUIComponent implements OnInit {

  constructor(private _router: Router, private firstService: FirstService) { }




  ngOnInit() : void{
  }




  delete()
  {
    this.firstService.deleteChannel(this._router.url.substring(this._router.url.lastIndexOf("/") + 1)).subscribe();
    this._router.navigate(['channel']);
    setTimeout(() => window.location.reload(), 80);
  }
}
