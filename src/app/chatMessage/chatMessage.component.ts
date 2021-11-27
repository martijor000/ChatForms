import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit, Type } from '@angular/core';
import { FirstService } from '../services/first.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatMessage } from '../models/chat';


@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {

  public show:boolean = false;
  public hide:boolean = true;
  public storeMessage: string = "";

  @Input() msgs: any = {
    username: "",
    message: "",
    id: "",
    created_on: new Date,
    updated_on: new Date
  };

  @Input() patchMsgs: any = {
    username: "",
    message: "",
    id: "",
    created_on: new Date,
    updated_on: new Date
  }

  constructor(public service: FirstService, public router : Router) { 
  }

  ngOnInit(): void{
  }

  showHide(oldMessage: string)
  {
    this.storeMessage = oldMessage;
    this.show = true;
    this.hide = false;
    console.log(this.storeMessage)
  }

  updateMessage(){

    let newMessage = (<HTMLInputElement>document.getElementById("edit")).value;

    // It was really hard for me to figure out how to take out the messages of the array msgs. So I found this function on the web
    // https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
    // Below they had alternatives to map but maybe we can go further into depth with maping in class if we have time.
    // What this function is doing is looping through the array of msgs and pushing the message property of each into the array of output. 

    function getFields(input: Array<any>, field: string) {
      var output = [];
      for (var i=0; i < input.length ; ++i)
          output.push(input[i][field]);
      return output;
    }

    var result = getFields(this.msgs, "message"); 
    
    var index = 0;

    for(var i=0; i < result.length; i++)
    {
      if(result[i] == this.storeMessage)
      {
        index = i;
      }
    }
    var objMessage = 'message';
    this.msgs[index][objMessage] = newMessage;
    this.show = false;
    this.hide = true;

    this.patchMsgs = this.msgs;
    console.log(this.patchMsgs)
    this.service.patchMessage(this.router.url.substring(this.router.url.lastIndexOf("/") + 1),this.patchMsgs).subscribe();

  }
}
