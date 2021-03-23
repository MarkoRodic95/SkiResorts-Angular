import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiResortService } from '../service/ski-resort.service';
import { SkiResort } from '../model/ski-resort';

@Component({
  selector: 'app-resort-page',
  templateUrl: './resort-page.component.html',
  styleUrls: ['./resort-page.component.css']
})
export class ResortPageComponent implements OnInit {
  resortId: number;
  resort: SkiResort;
  constructor(private route: ActivatedRoute, private service: SkiResortService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.resortId = x['id']
      this.updateResort();
    })
  }

  updateResort() {
    this.service.getOne(this.resortId).subscribe(x => {
      this.resort = x;
    })
  }

}
