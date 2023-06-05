# Create ReactJS - NodeJS server - App Service Azure

![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)

## Table of Contents
- [Create ReactJS - NodeJS server - App Service Azure](#create-reactjs---nodejs-server---app-service-azure)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Technologies Used](#technologies-used)
  - [Prerequisites](#prerequisites)
    - [Create MS SQL Database](#create-ms-sql-database)
    - [Run Express Server](#run-express-server)
    - [Run ReactJS](#run-reactjs)
    - [Create Azure SQL Database](#create-azure-sql-database)
    - [Create Linux Azure App Service for Express Server](#create-linux-azure-app-service-for-express-server)
    - [Create Windows Azure App Service for ReactJS](#create-windows-azure-app-service-for-reactjs)
  - [Project Status](#project-status)
  - [Room for Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

<!-- * [License](#license) -->

## About The Project
- Create simple reactjs - express - mssql application on local and cloud enviroment
- About the cloud, I use:
    - Linux Azure App Service for reactjs frontend
    - Windows Azrure App Service for express backend
    - Azure SQL Database
    - Azure DevOps for CI/CD Application

## Technologies Used
- ReactJS - Express - MSSQL - NodeJS
- Azure App Service
- Azure SQL Database (MSSQL)
- Azure DevOps

## Prerequisites
- Local NodeJS and MSSQL for testing.
- Microsoft Azure Account – for accessing Azure Portal and hosting your application. If you don’t have an account yet, you can create one for free using this link.
- Azure DevOps Account – for storing the source code and implementing build and release pipelines. Azure DevOps is free to use and if you don’t have an account yet, you can create one using this [link](https://azure.microsoft.com/en-us/services/devops/).

### Create MS SQL Database
- Create Database
    ```sql
    create table EmployeeDemographics(
        EmployeeID int,
        Firstname varchar(50),
        Lastname varchar(50),
        Age int,
        Gender varchar(50)
    );

    insert into EmployeeDemographics
    values (1001, 'Jim', 'Halpert', 30, 'Male');
    ```

- Result:

    ![SQL_01](./img/SQL_01.png)

- Ensure TCP/IP Enabled:

    ![SQL_02](./img/SQL_02.png)

### Run Express Server
- Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
- Config ./backend/dbconfig.js

    ![DBConfig_01](./img/DBConfig_01.png)

- Run the server

    Run Terminal at backend folder and run command:
    ```ps
    npm install
    npm run server
    ```
- Expect result
    ![express_result](./img/express_result.png)

### Run ReactJS
- Config proxy server
    
    ./frontend/package.json
    ```json
    "proxy": "http://localhost:5000"
    ```

    ./frontend/src/App.js
    ```js
    const API_URL = 'http://localhost:5000';
    ```

- Run the server

    Run Terminal at frontend folder and run command:
    ```ps
    npm install
    npm run start
    ```
- Expect result
    Input Jim on Firstame and Click:

    ![reactjs_result](./img/reactjs_result.png)

### Create Azure SQL Database
- Create Azure SQL Database Server

    ![createsqlserver](./img/createsqlserver.png)

- Config Public Access SQL Server. Add your IP Adress

    ![sqlserverconfig](./img/sqlserverconfig.png)

- Create Azure SQL Database

    ![createsqldatabase_01](./img/createsqldatabase_01.png)
    
    ![createsqldatabase_02](./img/createsqldatabase_02.png)

    ![createtable_01](./img/createtable_01.png)
    
    ![createtable_02](./img/createtable_02.png)

- Test with local express server, modify ./backend/dbconfig.js

    ![DBConfig_02](./img/DBConfig_02.png)

    At backend folder, run:
    ```ps
    npm run server
    ```

- Expect result

    ![express_result_02](./img/express_result_02.png)

### Create Linux Azure App Service for Express Server
- Create Linux App Service Plan

    ![linuxappserviceplan](./img/linuxappserviceplan.png)

- Create Web App Service

    ![linuxappservice](./img/linuxappservice.png)

- Modify ./backend/dbconfig.js (have done before)

- Build Azure DevOps Pipeline
  - Create new Project, go to https://dev.azure.com
    
    ![createdevopsorg](./img/createdevopsorg.png)
  
  - Create Service Connection:
    - Azure Service Principal: [Tutorial to create Service Principal](https://developer.hashicorp.com/terraform/tutorials/azure-get-started/azure-build)

    - GitHub PAT

        ![githubpat](./img/githubpat.png)
    
    ![serviceconnect_01](./img/serviceconnect_01.png)

    ![serviceconnect_02](./img/serviceconnect_02.png)

    ![serviceconnect_03](./img/serviceconnect_03.png)
    
  - Create Backend CI pipeline
    - Create new pipeline
    - Chose Use the classic editor
        ![backend_CI_01](./img/backend_CI_01.png)
    - Chose your GitHub Source
        ![backend_CI_02](./img/backend_CI_02.png)
    - Chose your Empty job
        ![backend_CI_03](./img/backend_CI_03.png)
    - Edit pipeline
        ![backend_CI_04](./img/backend_CI_04.png)
        ![backend_CI_05](./img/backend_CI_05.png)
        ![backend_CI_06](./img/backend_CI_06.png)
        ![backend_CI_07](./img/backend_CI_07.png)

  - Create Backend CD pipeline
    - Chose your Empty job
        ![backend_CD_01](./img/backend_CD_01.png)
    - Edit pipeline
        ![backend_CD_05](./img/backend_CD_05.png)
        ![backend_CD_01](./img/backend_CD_01.png)
        ![backend_CD_03](./img/backend_CD_03.png)
        ![backend_CD_04](./img/backend_CD_04.png)
- Expect result
    - Run CI and CD pipeline
        ![express_result_03](./img/express_result_03.png)
        
    

### Create Windows Azure App Service for ReactJS
- Create Windows App Service Plan

    ![windowsappserviceplan](./img/windowsappserviceplan.png)

- Create App Service

    ![winappservice](./img/winappservice.png)

- Config proxy server
    
    ./frontend/package.json
    ```json
    "proxy": "https://linuxappservice11.azurewebsites.net"
    ```

    ./frontend/src/App.js
    ```js
    const API_URL = 'https://linuxappservice11.azurewebsites.net';
    ```

- Build Azure DevOps Pipeline
  - Create Frontend CI pipeline
    - Edit pipeline
        ![frontend_CI_01](./img/frontend_CI_01.png)
        ![frontend_CI_02](./img/frontend_CI_02.png)
        ![frontend_CI_03](./img/frontend_CI_03.png)
        ![frontend_CI_04](./img/frontend_CI_04.png)
        ![frontend_CI_05](./img/frontend_CI_05.png)
        ![frontend_CI_06](./img/frontend_CI_06.png)
  - Create Frontend CD pipeline
        ![frontend_CD_01](./img/frontend_CD_01.png)
        ![frontend_CD_02](./img/frontend_CD_02.png)
        ![frontend_CD_03](./img/frontend_CD_03.png)
        ![frontend_CD_04](./img/frontend_CD_04.png)
        ![frontend_CD_05](./img/frontend_CD_05.png)

- Expect result
    - Run CI and CD pipeline
        ![express_result_04](./img/express_result_04.png)

## Project Status
   - Project is: _in progress_

## Room for Improvement
- Use Terraform for automatic deployment
- Add private endpoint for more security

## Acknowledgements
- The reactjs, nodejs server and sql database was based on [Coding with Kevin][Kevin]
- The Azure DevOps Pipeline was inspired by [Code On Cloud][codeoncloud]
- [Badges](https://github.com/Ileriayo/markdown-badges)

## Contact
Created by [@vunguyen22271](https://github.com/vunguyen22271) - feel free to contact me!

[Kevin]: https://www.youtube.com/watch?v=Uh2JCSUjA_E
[codeoncloud]: https://www.youtube.com/watch?v=9JPga11NGUE
