<img src="./src/images/raise-hand.svg" alt="alt text" width="50" >
<br/>

# Quest me [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## [DEMO](https://quest-me.vercel.app/)

Deployed with Vercel <img src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png" alt="alt text" width="25" >
<br/>
<br/>
Quest me is an application where a user is being asked a question with two possible answers to choose from. His answer is recorded is such a way where his choices will be reflected in a global ranking table.

### Instalation 
* Run ```npm install ``` or ```yarn install``` to install the dependencies.
* Run ```npm start``` or ```yarn start``` to start the development server.

### Tech-stack used

- ReactJS
- Typescript
- Redux
- React Router
- Material UI

### Architecture
```
📦src
 ┣ 📂actions
 ┃ ┣ 📂authedUser
 ┃ ┃ ┣ 📜actionCreators.ts
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂questions
 ┃ ┃ ┣ 📜actionCreators.ts
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📜actionCreators.ts
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂Avatar
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Char
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂DashboardItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Logo
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂NavigationBar
 ┃ ┃ ┣ 📂NavLink
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂NewQuestion
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂QuestionDetail
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂QuestionItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Questions
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂SummaryQuestionDetailedItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂User
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📂VoteQuestionDetailedItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂images
 ┃ ┣ 📜logo.png
 ┃ ┗ 📜logo.svg
 ┣ 📂middleware
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜logger.ts
 ┃ ┗ 📜thunk.ts
 ┣ 📂reducers
 ┃ ┣ 📂authedUser
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂questions
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂users
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜index.ts
 ┣ 📂services
 ┃ ┣ 📜declarations.d.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜questions.ts
 ┃ ┗ 📜users.ts
 ┣ 📂Themes
 ┃ ┗ 📜index.tsx
 ┣ 📂utils
 ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┣ 📜debug.log
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reducersArchitecture.drawio
 ┗ 📜store.ts
 ```
 
## Licence MIT
