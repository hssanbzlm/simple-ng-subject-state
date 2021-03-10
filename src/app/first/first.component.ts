import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Input() name: string;
  @Output() save = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickSave(name) {
    this.save.emit(name);
  }
}
