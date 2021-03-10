import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
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
