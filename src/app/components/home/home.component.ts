import { Component, OnInit } from '@angular/core';
import {  eppoApps, AppCategory } from '../../epoApps.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apps = eppoApps;
  appCategory = Object.values(AppCategory);
  constructor() { }

  ngOnInit() {

  }

}
