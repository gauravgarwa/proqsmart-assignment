import { Injectable } from "@angular/core";
import * as Papa from "papaparse";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private csvData: any[] = [];
  private errors: any[] = [];

  parseCsvData(csvData: string) {
    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        this.csvData = result.data;
        this.validateData();
      },
    });
  }

  validateData() {
    this.errors = [];
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10}$/;

    this.csvData.forEach((row, rowIndex) => {
      const rowErrors: any = {};
      if (!row.first_name) {
        rowErrors["First Name"] = "Empty value error";
      } else if (typeof row.first_name !== "string") {
        rowErrors["First Name"] = "Data Type mismatch error";
      }

      if (!row.last_name) {
        rowErrors["Last Name"] = "Empty value error";
      } else if (typeof row.last_name !== "string") {
        rowErrors["Last Name"] = "Data Type mismatch error";
      }

      if (!row.email) {
        rowErrors["Email"] = "Empty value error";
      } else if (!emailRegex.test(row.email)) {
        rowErrors["Email"] = "Data Type mismatch error";
      }

      if (!row.phone) {
        rowErrors["Phone number"] = "Empty value error";
      } else if (!phoneRegex.test(row.phone)) {
        rowErrors["Phone number"] = "Data Type mismatch error";
      }

      if (!row.city) {
        rowErrors["City"] = "Empty value error";
      } else if (typeof row.city !== "string") {
        rowErrors["City"] = "Data Type mismatch error";
      }

      if (!row.address) {
        rowErrors["Address"] = "Empty value error";
      } else if (typeof row.address !== "string") {
        rowErrors["Address"] = "Data Type mismatch error";
      }

      if (!row.gpa) {
        rowErrors["GPA"] = "Empty value error";
      } else if (
        isNaN(row.gpa) ||
        parseFloat(row.gpa) < 0 ||
        parseFloat(row.gpa) > 10
      ) {
        rowErrors["GPA"] = "Data Type mismatch error";
      }

      if (Object.keys(rowErrors).length > 0) {
        this.errors.push({ rowIndex, errors: rowErrors });
      }
    });
  }

  getCsvData() {
    return this.csvData;
  }

  getErrors() {
    return this.errors;
  }

  getValidRowCount() {
    return this.csvData.length - this.errors.length;
  }

  getInvalidRowCount() {
    return this.errors.length;
  }
}
