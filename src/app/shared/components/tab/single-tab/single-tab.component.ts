import { Component, OnInit } from '@angular/core';
import { Itab } from 'src/app/shared/models/allInterface';
import { ActivatedRoute, Params } from '@angular/router';
import { TabService } from 'src/app/shared/services/tab.service';


@Component({
  selector: 'app-single-tab',
  templateUrl: './single-tab.component.html',
  styleUrls: ['./single-tab.component.scss']
})
export class SingleTabComponent implements OnInit {
  public tabId !: number;
  public tabInfo !: Itab
  constructor(private _route : ActivatedRoute, private _tabService : TabService) { }

  ngOnInit(): void {
    this.tabId = +this._route.snapshot.params['tabId']
    this.tabInfo = this._tabService.getSingleTabApi(this.tabId)
  }

}
