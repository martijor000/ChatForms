import { FirstService } from './../services/first.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-chatList',
  templateUrl: './chatList.component.html',
  styleUrls: ['./chatList.component.scss']
})
export class ChatListComponent implements OnInit {

  chatmsgs: any[] = [];

  constructor(public service: FirstService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.service.getMessage(params['id']).subscribe(data => {
        console.log(data)
        this.chatmsgs.push(data);
      });
    });
  }

  ngOnInit(){
  }

}
