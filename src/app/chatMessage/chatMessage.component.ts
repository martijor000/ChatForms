import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IChatMessage } from '../models/chat';


@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {

  private storeMessage: string = "";
  private sendMessage: string = "";
  private buttonIndex: number = 0;

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

  public showHide(oldMessage: string) : void
  {
    this.storeMessage = oldMessage;
    this.buttonIndex = this.getIndex();
    document.getElementsByClassName("patchMe")[this.buttonIndex].setAttribute("style", "display: block;");
    document.getElementsByClassName("msg")[this.buttonIndex].setAttribute("style", "display: none;");
  }

  inputMessage(inputMsg: string) : void
  {
    this.sendMessage = inputMsg;
    this.updateMessage();
    document.getElementsByClassName("patchMe")[this.buttonIndex].setAttribute("style", "display: none;");
    document.getElementsByClassName("msg")[this.buttonIndex].setAttribute("style", "display: block;");
  }

  getIndex() : number
  {
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
    return index;
  }

  updateMessage(){
    var objMessage = 'message';
    console.log(this.sendMessage)
    this.msgs[this.buttonIndex][objMessage] = this.sendMessage;
    this.patchMsgs = this.msgs;
    console.log(this.patchMsgs)
    this.service.patchMessage(this.router.url.substring(this.router.url.lastIndexOf("/") + 1),this.patchMsgs).subscribe();

  }
}
