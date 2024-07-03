import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-preview-page",
  templateUrl: "./preview-page.component.html",
  styleUrls: ["./preview-page.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class PreviewPageComponent implements OnInit {
  csvData: any[] = [];
  errors: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.csvData = this.dataService.getCsvData();
    this.errors = this.dataService.getErrors();
  }

  hasError(rowIndex: number, field: string): string {
    const error = this.errors.find(
      (e) => e.rowIndex === rowIndex && e.errors[field]
    );
    return error ? error.errors[field] : "";
  }

  nextPage() {
    this.router.navigate(["/summary"]);
  }
}
