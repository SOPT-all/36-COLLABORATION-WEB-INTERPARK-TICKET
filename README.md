# 36-COLLABORATION-WEB-INTERPARK-TICKET

> ## AT SOPT 36기 합동세미나 인터파크 티켓 🌐 🎟️

![표지](https://github.com/user-attachments/assets/808d3cc7-9304-4162-9bb0-f59051a0e5e3)


<br/>

# ⚒️ 팀원 소개 
|김예지</br>[@mnbvcxzyj](https://github.com/mnbvcxzyj)|이재림</br>[@jllee000](https://github.com/jllee000)|최서희</br>[@karnelll](https://github.com/karnelll)|박소이</br>[@soyyyyy](https://github.com/soyyyyy)|
|:---:|:---:|:---:|:---:|
|<img src = "https://avatars.githubusercontent.com/u/101444425?v=4" width ="250">|<img src = "https://avatars.githubusercontent.com/u/101315059?v=4" width ="250">|<img src = "https://avatars.githubusercontent.com/u/165611407?v=4" width ="250">|<img src = "https://avatars.githubusercontent.com/u/90364636?v=4" width ="250">|
|`좌석 선택`|`메인`</br>`날짜 선택`|`결제`|`메인`|


<br/>
<br/>

# 🎬 시연 영상 
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/bc4c3277-e2d5-4999-839c-0e05250a7be4" width="230" /></td>
    <td><img src="https://github.com/user-attachments/assets/23c84033-f15b-4b3c-ad6d-4f2279f73606" width="230" /> </td>
    <td><img src="https://github.com/user-attachments/assets/0db23648-c607-41cb-8f8c-76f7e19a1630" width="230" /></td>
    <td><img src="https://github.com/user-attachments/assets/f9efa72b-dc90-480a-9630-b41864e6b1be" width="230" /></td>
  </tr>
  <tr>
    <td align="center"><b>메인</b></td>
    <td align="center"><b>날짜 선택</b></td>
      <td align="center"><b>좌석 선택</b></td>
    <td align="center"><b>결제</b></td>
  </tr>
</table>


<br/>

# 🛠 기술 스택

| Category | Stack |
|----------|-------|
| Library | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| Styling | ![Vanilla Extract](https://img.shields.io/badge/Vanilla--Extract-DDC7A0?style=for-the-badge&labelColor=20232A&color=ddc7a0) |
| Data Fetching | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)  ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white) |
| State Management | ![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white) |
| Package Manager | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) |
| Formatting & Linting | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) |
| CI CD | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |




<br/>

# 🌱 컨벤션 
[인터파크 티켓 컨벤션 문서](https://www.notion.so/jisooooooooooo/3-GOODOC-1e94a104520880baa99ef3b5e9fa610f?pvs=4)

<br/>

# 📁 폴더 구조 
```
📁 public
│   📁 fonts
│   └── nol.webp
├── README.md
📁 src
│   ├── App.tsx
│   ├── main.tsx
│   📁 pages
│   │   📁 Main
│   │   │   📁 api
│   │   │   │   ├── api.ts
│   │   │   │   ├── hooks.ts
│   │   │   │   └── types.ts
│   │   │   📁 components
│   │   │   ├── MainPage.css.ts
│   │   │   └── MainPage.tsx
│   │   📁 Payment
│   │   │   📁 api
│   │   │   │   ├── banks.api.ts
│   │   │   │   ├── banks.hooks.ts
│   │   │   │   ├── banks.types.ts
│   │   │   │   ├── payment.api.ts
│   │   │   │   ├── payment.hooks.ts
│   │   │   │   ├── payment.types.ts
│   │   │   │   └── ticketReceive.ts
│   │   │   📁 components
│   │   │   ├── Payment.css.ts
│   │   │   ├── Step1.tsx
│   │   │   ├── Step2.tsx
│   │   │   ├── Step3.tsx
│   │   │   📁 store
│   │   │   📁 utils
│   │   📁 SeatSelect
│   │   │   📁 api
│   │   │   │   ├── api.ts
│   │   │   │   ├── hooks.ts
│   │   │   │   └── types.ts
│   │   │   📁 components
│   │   │   ├── SeatSelectPage.css.ts
│   │   │   └── SeatSelectPage.tsx
│   │   📁 SelectDate
│   │       📁 api
│   │       │   ├── api.ts
│   │       │   ├── hooks.ts
│   │       │   └── types.ts
│   │       📁 components
│   │       ├── SelectDatePage.css.ts
│   │       ├── SelectDatePage.tsx
│   │       📁 utils
📁 shared
│   📁 assets
│   📁 components
│   📁 constants
│   📁 router
│   📁 styles
│   📁 types
├── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── yarn.lock
```
