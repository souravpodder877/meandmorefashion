import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// router with id

@Component({
  selector: 'app-top-offer-details',
  templateUrl: './top-offer-details.component.html',
  styleUrls: ['./top-offer-details.component.scss']
})
export class TopOfferDetailsComponent implements OnInit {
  public topOfferProdId;
  constructor(private activeroute: ActivatedRoute) { }
// router with id-
  ngOnInit() {
    let id = parseInt(this.activeroute.snapshot.paramMap.get('id'));
    this.topOfferProdId = id;
  }
}
