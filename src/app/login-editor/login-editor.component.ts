import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IChatMessage } from '../models/chat';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-login-editor',
  templateUrl: './login-editor.component.html',
  styleUrls: ['./login-editor.component.scss']
})
export class LoginEditorComponent implements OnInit {

  
  constructor(private _fb : FormBuilder, private _firstService : FirstService, private _router: Router) {}

  @Input() name: any = {
    first: "",
    last: ""
  };

  loginForm: FormGroup = this._fb.group({
    firstName: [this.name.first, Validators.required],
    lastName: [this.name.last, Validators.required]
  })

  channelName : string = "";
  user: string ="";


  ngOnInit(): void {
    
  }

  onSubmit(): void{

    this.channelName = this.loginForm.value.firstName.charAt(0) + this.loginForm.value.lastName;
    this.user = this.loginForm.value.firstName + " " + this.loginForm.value.lastName;

    let post: IChatMessage = {
      username: this.user,
      message: "Welcome to Martin Chat!",
      id: "",
      created_on: new Date,
      updated_on: new Date
    }
    
    console.log(this.loginForm.value)
    this._firstService.postChannel(post, this.channelName).subscribe((data) => {
      this._router.navigate(['channel/' + this.channelName]);
    });
  }

  joinChannel(){
    this._router.navigate(['channel']);
}

}
