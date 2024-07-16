# AngularODataEntity

## Description

AngularODataEntity is a sample project that uses Angular and OData to manage data entities. 
This project aims to demonstrate how to integrate an OData service into an Angular application using the `angular-odata` library, which is included as a submodule in the repository. 
The integration facilitates CRUD (Create, Read, Update, Delete) operations on data entities.

## Installation

Follow these steps to clone and set up the project on your local machine:

1. **Clone the repository**:

   ```sh
   git clone --recurse-submodules https://github.com/diegomvh/AngularODataEntity.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd AngularODataEntity
   ```

3. **Update the submodules (if necessary)**:

   ```sh
   git submodule update --init --recursive
   ```

4. **Install dependencies**:

   ```sh
   npm install
   ```

5. **Build the angular-odata library**:

   ```sh
   ng build angular-odata
   ```

6. **Start the application**:

   ```sh
   npm start
   ```

The application will be available at http://localhost:4200/.