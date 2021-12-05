import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patch-editor',
  templateUrl: './patch-editor.component.html',
  styleUrls: ['./patch-editor.component.scss']
})
export class PatchEditorComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  
  private value : string = "";

  constructor(private _fb : FormBuilder) { }

  editMessage: FormGroup = this._fb.group({
    editedMessage: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.value = this.editMessage.value.editedMessage;
    this.newItemEvent.emit(this.value);
  }

  
}
