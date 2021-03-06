import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as mat from 'materialize-css';

import { SharedService } from './../shared/services/shared.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {


  constructor(public shared: SharedService) { }

  ngOnInit(): void {
    mat.AutoInit();
    this.setTextAreaOptions();

    this.shared.formStep1 = new FormGroup({
      mark: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9]+$')]),
      model: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
      year: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]{4}'), Validators.min(1950)]),
      details: new FormControl(undefined)
    });
  }

  setTextAreaOptions(): void {
    const txtArea = $('#txtArea')[0];
    mat.textareaAutoResize(txtArea);
  }

  setParentHeight(): void {
    const txtArea = $('#txtArea')[0];
    const height = txtArea.style.height.slice(0, -2);
    const parent = txtArea.parentElement;
    parent.style.height = `${height}px`;
  }

}
