import { Component } from "@angular/core";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { UploadPageComponent } from "./upload-page/upload-page.component";
import { PreviewPageComponent } from "./preview-page/preview-page.component";
import { SummaryPageComponent } from "./summary-page/summary-page.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    UploadPageComponent,
    PreviewPageComponent,
    SummaryPageComponent,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular";
}
