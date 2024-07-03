import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-upload-page",
  templateUrl: "./upload-page.component.html",
  styleUrls: ["./upload-page.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class UploadPageComponent {
  file: File | null = null;
  fileUrl: string = "";

  constructor(
    private router: Router,
    private dataService: DataService,
    private http: HttpClient
  ) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const csvData = e.target.result;
        this.dataService.parseCsvData(csvData);
      };
      reader.readAsText(this.file);
    }
  }

  uploadFromUrl() {
    if (this.fileUrl) {
      this.http.get(this.fileUrl, { responseType: "text" }).subscribe({
        next: (csvData) => {
          this.dataService.parseCsvData(csvData);
        },
        error: (error) => {
          console.error("Failed to fetch the file from URL:", error);
        },
      });
    }
  }

  nextPage() {
    this.router.navigate(["/preview"]);
  }
}
