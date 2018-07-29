import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.css']
})
export class AppLoadingComponent implements OnInit {
  @Input() isVisible?: boolean = true;
  @Input() position?: string = 'relative';
  constructor() {}

  ngOnInit() {}
}
