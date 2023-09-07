import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Icomputer } from 'src/app/shared/models/allInterface';
import { ComputerService } from 'src/app/shared/services/computer.service';

@Component({
  selector: 'app-single-comp',
  templateUrl: './single-comp.component.html',
  styleUrls: ['./single-comp.component.scss']
})
export class SingleCompComponent implements OnInit {
  public compId !: number;
  public compInfo !: Icomputer;
  constructor(private _route : ActivatedRoute, private _compService : ComputerService) { }

  ngOnInit(): void {
    this.compId = +this._route.snapshot.params['cId']
    console.log(this.compId);
    this.compInfo = this._compService.getSingleComputerApi(this.compId)
  }

}
