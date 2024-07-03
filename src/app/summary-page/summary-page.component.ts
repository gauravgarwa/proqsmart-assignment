import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-summary-page",
  templateUrl: "./summary-page.component.html",
  styleUrls: ["./summary-page.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class SummaryPageComponent implements OnInit {
  validRowCount: number = 0;
  invalidRowCount: number = 0;
  totalRecords: number = 0;
  errors: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.validRowCount = this.dataService.getValidRowCount();
    this.invalidRowCount = this.dataService.getInvalidRowCount();
    this.totalRecords = this.dataService.getCsvData().length;
    this.errors = this.dataService.getErrors();
  }

  getKeys(obj: any) {
    return Object.keys(obj);
  }

  goBack() {
    this.router.navigate(["/upload"]);
  }
}
