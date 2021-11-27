import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChatMessage } from 'src/app/models/chat';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss']
})
export class UserUIComponent implements OnInit {

  @Input() userMessage: ChatMessage = {
    username: "",
    message: "Testing",
    id: "",
    created_on: new Date,
    updated_on: new Date
  };  

  constructor(private _router: Router, private firstService: FirstService) { 
  }

  ngOnInit(): void {

  }

  createChannel(firstName: string, lastName: string){
    if(this.checkUser(firstName) && this.checkUser(lastName)){
      this.userMessage.username = firstName.charAt(0) + lastName;
      this.firstService.postChannel(this.userMessage).subscribe((data) => {
      });
      this._router.navigate(['channel/' + firstName.charAt(0) + lastName]);
    }
    else{
      window.alert("Please fill in all the fields");
    }
  }


  joinChannel(){
      this._router.navigate(['channel']);
  }

  private checkUser(checkString: string){
    if(checkString == "")
    {
      return false;
    }
    else{
      return true;
    }
  }
}
