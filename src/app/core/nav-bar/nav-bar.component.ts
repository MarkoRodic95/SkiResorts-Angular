import { Component, OnInit } from '@angular/core';
import { SkiResortService } from 'src/app/service/ski-resort.service';
import { SkiResortInfo } from 'src/app/model/ski-resort-info';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  resorts: SkiResortInfo[]
  constructor(private service: SkiResortService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(x => {
      this.resorts = x;
      console.log(this.resorts)
    })
  }

}
