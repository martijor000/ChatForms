import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IChatMessage } from 'src/app/models/chat';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss']
})
export class UserUIComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  
}
