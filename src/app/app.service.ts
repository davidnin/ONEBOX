import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) {}

  public title = new BehaviorSubject("Catalog");

  getEvents() {
    const path = "./assets/data/events.json";
    return this.http.get(path);
  }

  getEventsInfo(id: number) {
    const path = "./assets/data/event-info-" + id + ".json";
    return this.http.get(path);
  }

  setTitle(title: string): void {
    this.title.next(title);
  }
}
