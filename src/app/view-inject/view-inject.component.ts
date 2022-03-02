import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-inject',
  templateUrl: './view-inject.component.html',
  styleUrls: ['./view-inject.component.scss']
})
export class ViewInjectComponent implements OnInit {

  constructor(
    private bsModal: BsModalService
  ) { }

  ngOnInit(): void {
  }


  openSampleModal() {
    // this.bsModal.show();
  }

}
