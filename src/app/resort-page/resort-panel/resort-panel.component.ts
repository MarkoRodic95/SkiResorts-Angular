import { Component, OnInit, Input } from '@angular/core';
import { SkiResort } from 'src/app/model/ski-resort';

@Component({
  selector: 'app-resort-panel',
  templateUrl: './resort-panel.component.html',
  styleUrls: ['./resort-panel.component.css']
})
export class ResortPanelComponent implements OnInit {
  @Input() resort: SkiResort
  constructor() { }

  ngOnInit(): void {
  }

}
