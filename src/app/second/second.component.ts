import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  name$ = new Subject<string>();
  name: string;
  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.name$ = this.service.name;
  }

  save() {
    this.service.save(this.name);
  }
}
