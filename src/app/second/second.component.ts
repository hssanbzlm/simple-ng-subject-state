import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  @Input() name: string;
  @Output() save = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickSave(name) {
    this.save.emit(name);
  }
}
