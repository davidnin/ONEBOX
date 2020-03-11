import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "catalog-listing",
  templateUrl: "./catalog-listing.component.html",
  styleUrls: ["./catalog-listing.component.css"]
})
export class CatalogListingComponent implements OnInit {
  fakeBBDD: any;
  public title: string = "Catalog";
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.setTitle(this.title);
    this.appService.getEvents().subscribe((data: Object) => {
      this.fakeBBDD = data;
      this.fakeBBDD.sort(this.orderByDate);
      this.fakeBBDD.forEach(ele => {
        ele.startDate = new Date(parseInt(ele.startDate)).toLocaleDateString(
          "en-GB"
        );
        ele.endDate = new Date(parseInt(ele.endDate)).toLocaleDateString(
          "en-GB"
        );
      });
    });
  }

  orderByDate(a, b): number {
    return a.endDate - b.endDate;
  }
}
