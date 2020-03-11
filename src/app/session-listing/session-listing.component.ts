import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { AppService } from "../app.service";

@Component({
  selector: "session-listing",
  templateUrl: "./session-listing.component.html",
  styleUrls: ["./session-listing.component.css"]
})
export class SessionListingComponent implements OnInit {
  public id: number;
  public fakeResponse: any;
  public title: string = "Session";
  public isEmptyBBDD: boolean = false;
  private sub: any;

  constructor(
    private location: Location,
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.appService.setTitle(this.title);
    this.sub = this.route.queryParams.subscribe(
      params => (this.id = +params["id"])
    );

    this.appService.getEventsInfo(this.id).subscribe(
      data => {
        this.fakeResponse = data;
        if (this.fakeResponse.sessions) {
          this.fakeResponse.sessions.sort(this.orderByDate);
          this.fakeResponse.sessions.forEach(ele => {
            ele.buyTicket = 0;
            ele.date = new Date(parseInt(ele.date)).toLocaleDateString("en-GB");
          });
        }
      },
      err => {
        this.isEmptyBBDD = true;
      }
    );
  }

  onclick() {
    this.location.back();
  }

  orderByDate(a, b): number {
    return a.date - b.date;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  findSession(dateBBDD: number): any {
    return this.fakeResponse.sessions.filter(
      element => element.date === dateBBDD
    );
  }

  restOneTicket(dateBBDD: number): void {
    const result = this.findSession(dateBBDD);
    if (result && result[0].buyTicket > 0) {
      result[0].buyTicket--;
    }
  }

  addOneTicket(dateBBDD: number): void {
    const result = this.findSession(dateBBDD);
    if (result && result[0].availability > result[0].buyTicket) {
      result[0].buyTicket++;
    }
  }
}
