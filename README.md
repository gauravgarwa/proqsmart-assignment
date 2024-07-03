# Proqsmart Assignment - Gaurav

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# About the Project

This project is a simple CSV data validator built with Angular. It reads CSV data, validates it, and displays the errors in a table. The validation includes checking for empty values and ensuring data types match the expected format.

## Features

- Upload CSV file or provide a URL to fetch the CSV data.
- Validate CSV data for empty values and data type mismatches.
- Display errors in a user-friendly table format.
- Navigate through pages of data.

## Technologies Used

- Angular
- Papa Parse (for CSV parsing)
- TypeScript

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (>=14.x)
- Angular CLI (>=12.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/csv-data-validator.git
   cd csv-data-validator

2. Install dependencies:

   ```
   npm install
   ```

3. Run the application:

   ```
   ng serve
   ```
4. Open your browser and navigate to http://localhost:4200.

## Usage

### Upload CSV File:

- Click on the "Upload CSV" button.
- Select a CSV file from your local machine.
- Fetch CSV from URL:

- Enter the URL of the CSV file in the provided input box.
- Click on the "Fetch CSV" button.
- View and Validate Data:

- The CSV data will be displayed in a table.
- Errors will be highlighted in the table cells with messages indicating the type of error (e.g., "Empty value", "Invalid Email").

### Navigate Data:

- Use the "Next" and "Previous" buttons to navigate through pages of data.
- Project Structure

   ```
   src/app/
   data.service.ts: Contains the logic for parsing and validating the CSV data.
   app.component.ts: Handles the file upload and URL fetching functionalities.
   app.component.html: The template file for the main component, includes the table and buttons.
   app.component.css: Styles for the application.
   ```

## Acknowledgments
Thanks <a href="https://proqsmart.com/">Proqsmart</a> for giving the opportinity.
Uses <a href="https://www.papaparse.com/">Papa Parse</a> for CSV parsing.



