## Kickstarter - Clean Archi with features based
```
src/
├─ app/
│   ├── @core/
│   │   ├── auth/
│   │   ├── modules/
│   │   ├── services/
├─ base/
│  ├─ mapper.ts
├─ domain/
│  ├─ base/
│  |  ├─ use-case.ts
│  ├─ models/
│  │  ├─ user.model.ts
│  ├─ repositories/
│  │  ├─ user.repository.ts
│  ├─ usecases/
│  │  ├─ user-login.usecase.ts
│  │  ├─ user-register.usecase.ts
│  │  ├─ get-user-profile.usecase.ts
│  │  ├─ ...
├─ data/
│  ├─ respositories/
│  │  ├─ user/
│  │  │  ├─ entities/
│  │  │  │  ├─ user-entity.ts
│  │  │  ├─ mappers/
│  │  │  │  ├─ user-repository.mapper.ts
│  │  │  ├─ user-implementation.repository.ts
│  ├─ data.module.ts
├── presentation/
│   ├── features/
│   │   ├── home/
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.ts
│   │   ├── users/
│   │   │   ├── modules/
│   │   │   │   ├── user-module.ts
│   │   │   ├── user-list/
│   │   │   │   ├── user-list.component.html
│   │   │   │   ├── user-list.component.ts
│   │   ├── ...
│   └── ... (autres features)
└── ... (autres dossiers du projet)
```
## Dependancies
`pnpm add @angular/common @angular/core @angular/router rxjs tslib`


## Angular Clean Architecture Example
This project is an example of implementing Clean Architecture in an Angular application. Clean Architecture is a software design philosophy that emphasizes separation of concerns and maintainability by structuring applications into layers with clear dependencies.

### Overview
The project is structured into three main layers:

### Domain Layer
Contains business models, use cases, interactors, and repository abstractions. This layer focuses solely on business logic and remains independent of the framework or technology being used.

### Data Layer
Handles data processing and interactions with external sources like APIs or databases. It includes entities, mappers, and repositories responsible for data manipulation.

### Presentation Layer
Deals with the UI components and user interactions. It utilizes the logic from the data and domain layers but is not included in this example.

## Getting Started
Follow these steps to set up the project:

Install `pnpm`: If you haven't already, install pnpm globally by running `npm install -g pnpm`.

Run Your Angular Application: using `pnpm run start`. Access your application in your web browser at http://localhost:4200.

<!-- ## Contributors
https://medium.com/taager-tech-blog/clean-architecture-for-angular-applications-b7ab140f0d5a -->
