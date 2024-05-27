# Vowel & Consonant Counter

## Overview

Vowel & Consonant Counter is an application that allows users to analyze text for vowels and consonants. The application supports both online and offline modes for text analysis.

## Features

- Users can enter text and start the analysis with the press of a button.
- The application displays the analysis results in a human-readable format.
- An existing (previous) output remains visible.
- A toggle switch allows switching between online and offline analysis modes:
  - **Offline**: Uses the application's own implementation of the text analyzer.
  - **Online**: Uses the REST API of the server to analyze the user input.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Spring Boot

## Setup and Running the Application

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080`.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Angular application:
   ```bash
   ng serve
   ```

4. Open the application in a browser:
  - Navigate to `http://localhost:4200`.

### Project Structure

- `backend`: Contains the Spring Boot backend code.
- `frontend`: Contains the Angular frontend code.

### Running Unit Tests

#### Frontend

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Backend

To run the backend tests, use:
```bash
mvn test
```

## Development

### Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

#### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Backend

#### Running the Application

Navigate to the `backend` directory and run the Spring Boot application:
```bash
cd backend
mvn spring-boot:run
```
