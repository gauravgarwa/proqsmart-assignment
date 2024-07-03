import { Routes } from "@angular/router";
import { UploadPageComponent } from "./upload-page/upload-page.component";
import { PreviewPageComponent } from "./preview-page/preview-page.component";
import { SummaryPageComponent } from "./summary-page/summary-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "/upload", pathMatch: "full" },
  { path: "upload", component: UploadPageComponent },
  { path: "preview", component: PreviewPageComponent },
  { path: "summary", component: SummaryPageComponent },
];
