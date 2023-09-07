import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/app/shared/models/allInterface';
import { MobileService } from 'src/app/shared/services/mobile.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-mo',
  templateUrl: './single-mo.component.html',
  styleUrls: ['./single-mo.component.scss']
})
export class SingleMoComponent implements OnInit {
  public mobileId !: number;
  public moInfo !: Imobile;
  public isAvailable = true;
  constructor(private _moService:MobileService, private _route : ActivatedRoute) { }


  ngOnInit(): void {
    this.mobileId =  +this._route.snapshot.params['moId'];
    console.log(this.mobileId);
    this.moInfo =this._moService.getSingleMoApi(this.mobileId)
  }

}
