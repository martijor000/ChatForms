import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IChatMessage } from '../models/chat';
import { FirstService } from '../services/first.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent implements OnInit {

   urlID : string =  "";

  constructor(private _fb: FormBuilder, private _firstService : FirstService, private router: ActivatedRoute) { 
    this.router.params.subscribe(params => {
      this.urlID = params['id'];
    });
  }

  messageForm : FormGroup = this._fb.group({
  user: ['', Validators.required],
  newMessage: ['', Validators.required]

  });

  onSubmit(): void{

    let post: IChatMessage = {
      username: this.messageForm.value.user,
      message: this.messageForm.value.newMessage,
      id: "",
      created_on: new Date,
      updated_on: new Date
    }
      this._firstService.postMessage(post, this.urlID);
  }

  ngOnInit(): void {

  }

}
