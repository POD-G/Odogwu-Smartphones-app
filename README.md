## Smartphone Ecommerce Web Application
This is a smartphone ecommerce web application built using Vits React, JavaScript, C#/.NET, and Postgres. It allows customers to browse and purchase mobile phones online, as well as track the status of their orders.

# Requirements
Node.js
npm
.NET Framework 4.7.2 or later
PostgreSQL

*Installation*

Clone this repository to your local machine.

Open the command prompt or terminal and navigate to the root directory of the project.
Run the following commands to install the necessary dependencies:

*npm install*

Create a new Postgres database and update the connection string in the appsettings.json file located in the SmartphoneEcommerceWebApp directory.

Navigate to the SmartphoneEcommerceWebApp directory and run the following command to apply the database migrations:

*dotnet ef database update*

Run the following command to start the web application:

*dotnet run*

Open a web browser and navigate to http://localhost:5173 to access the web application.

# Usage

Customers can browse the available mobile phones on the home page and view detailed product information, including specifications and customer reviews. They can add products to their cart, enter their payment information, and choose between home delivery or pickup at a local store. Customers can also view their order history and track the status of their current orders.

# Contributing
This project is open to contributions. If you find a bug or have a feature request, please submit an issue or pull request. For more information on how to contribute, please see the CONTRIBUTING.md file.

# License
This project is licensed under the MIT License. See the LICENSE.md file for more information.
