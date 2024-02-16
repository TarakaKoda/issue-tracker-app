<div align="center">
  <br />
    <a href="https://issue-tracker-app-five.vercel.app" target="_blank">
      <img src="https://github.com/adrianhajdin/social_media_app/assets/151519281/be514a19-3cbb-48b7-9acd-2cf4d2e319c4" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwind-css&color=38B2AC" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Shadcn_UI-black?style=for-the-badge&color=000000" alt="Shadcn UI" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748" alt="Prisma" />  
    <img src="https://img.shields.io/badge/-MySQL-black?style=for-the-badge&logoColor=white&logo=mysql&color=4479A1" alt="MySQL" />
    <img src="https://img.shields.io/badge/-React_Query-black?style=for-the-badge&logoColor=white&logo=react-query&color=F37626" alt="React Query" />
    <img src="https://img.shields.io/badge/-NextAuth-black?style=for-the-badge&logoColor=white&logo=next-auth&color=000000" alt="NextAuth" />
  </div>

  <h3 align="center">Issue Tracker App with Google OAuth Authentication</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📸 [Screenshots](#screenshots)

## <a name="introduction">🤖 Introduction</a>

This application is a lightweight issue tracker built using Next.js, React.js, TypeScript, Tailwind CSS, and Prisma for the backend with MySQL. It features seamless integration with React Query for data fetching and management, and NextAuth for easy authentication setup. Enjoy a smooth user experience and efficient project management with this intuitive and versatile tool.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- React Query
- Tailwind CSS
- Shadcn
- Prisma(ORM)
- MySQL Workbench(Dev) / AWS RDS-(MySQL) for Production

## <a name="features">🔋 Features</a>

👉 **Authentication System**: Utilizing NextAuth, seamlessly integrate Google OAuth for secure user authentication.

👉 **Dashboard**: Display graphical representation of issue counts alongside a summary of recent issues for enhanced visibility and analysis.

👉 **Filter Functionality**: Users can categorize issues by status (OPEN, CLOSED, IN PROGRESS) for streamlined management.

👉 **Sorting Functionality**: Users can alphabetically sort issues by title, status, and creation date for improved task organization.

👉 **Detailed Issue Page**: A detailed issue page displaying description and status of isusse and edit and delete issue for autharized users.

👉 **Create Issue Page**: Add a Markdown Editor to help users create detailed issue descriptions with ease.

👉 **Edit Issue Functionality**: Provide authorized users with the ability to edit the description and status of an issue at any time.

👉 **Light and Dark Mode**: Implement both light and dark themes to provide users with a personalized and visually comfortable experience.

👉 **React Query Integration**: Incorporate the React Query (Tanstack Query) data fetching library for, Auto caching to enhance performance, Parallel queries for efficient data retrieval.

👉 **Prisma (Object-Relational Mapper ORM)**: Utilize Prisma as an ORM tool for seamless interaction between your application and the database.

👉 **Backend (MySQL)**: Use MySQL in development for efficient data management. Integrate other preferred databases like PostgreSQL or MongoDB if needed. For production, transition to Amazon RDS MySQL for scalability and performance.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/TarakaKoda/issue-tracker-app.git
cd issue-tracker
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL=""
NEXTAUTH_URL ="http://localhost:3000"
NEXTAUTH_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

Replace the placeholder values with your actual Google OAuth credentials. You can obtain these credentials by signing up on the [Google | NextAuth.js](https://console.developers.google.com/apis/credentials).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="screenshots"> 📸 Screenshots </a>

<div align="center">
<table>
  <tr>
    <th colspan="2">DASHBOARD 📊</th>
  </tr>
    <tr>
    <td colspan="2">
      <p align="left">Desktop View 💻</p>
      <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/d8c7e359-b1c9-43a4-944b-755d6aab18bf" alt="Dashboard Desktop View"  >
    </td>
  </tr>
  <tr>
    <td>
      <p align="left">Tablet View 📱</p>
      <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/74d015eb-35bb-4918-a8c4-8d6b5096be84" alt="Dashboard Tablet View " width="100%" height="auto">
    </td>
    <td>
      <p align="left">Mobile View 📱</p>
      <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/1b1c7619-b31c-412e-9446-78aa6584a52a" alt="Dashboard Mobile View"  width="100%" height="auto">
    </td>
  </tr>
</table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">ISSUES LIST PAGE 📃</th>
    </tr>
    <tr>
       <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/5f5616e4-d0f4-4c2d-b28b-236afa0bba82" alt="List of Issues Desktop View" width="100%" height="auto"  >
      </td>
    </tr>
    <tr>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/9a03faf3-0b67-4c9d-8bd0-41a7baab1c0d" alt="List of Issue Tablet View" width="100%" height="auto"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/b0c84fc9-f4b0-42d4-b8c3-d95def4fccc3" alt="List of Issues Mobile view" width="100%" height="auto"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">FILTER FUNCTIONALITY 🔍</th>
    </tr>
    <tr align="center">
      <td colspan="2">
      <h2 colspan="2">OPEN ISSUE❓</h2>
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/30341db1-9f2d-4c2a-b824-ff6f10bf61bd" alt="Filtering Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/59a18d13-bbeb-45c4-b1f0-5d3fa0617757" alt="Filtering Issues Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/dc2ab84e-208f-4116-bf53-eaf7390d7a59" alt="Filtering Issues Mobile View"   >
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
      <h2 colspan="2">IN PROGRESS ISSUE ⌛</h2>
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/1ac63a1b-918c-4a66-b5d3-84122366f385" alt="Filtering Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/7bc5bc80-f061-41f7-b957-7c3022b5e438" alt="Filtering Issues Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/52181aa9-46d8-4a1a-9847-1a6525580a55" alt="Filtering Issues Mobile View"   >
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
      <h2 colspan="2">CLOSED ISSUE ✅</h2>
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/46dd4ae7-0a4a-4669-a09c-4141c55894e8" alt="Filtering Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/5e155795-40aa-4df6-8d1f-8519ce725c01" alt="Filtering Issues Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/d4108b32-368a-4da7-843e-8750b721e2af" alt="Filtering Issues Mobile View"   >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">Sort Functionality 🔢</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/773a3a38-e78c-48c4-aa35-b6db251a877e" alt="Sorting Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/00089383-b399-48cb-b11e-273d6d690195" alt="Sorting Issue Tablet View"   >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/c896309d-41db-41e5-a307-ab22d9dacdd8" alt="Sorting Issue Mobile View"   >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">DETAILED ISSUE 📄</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/6486578a-b21a-4633-aa8e-06b5173901b5" alt="Detailed Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/12e7dbfe-0359-424b-979b-3b2af1b40d64" alt="Detailed Issue Tablet View" >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/6d14b098-bbe9-4cc8-a6a8-937d800aa3c0" alt="Detailed Issue  Mobile View"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">CREATE NEW ISSUE 📃</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/2680866f-3969-4591-85f8-9d47516ecbe4" alt="Create a New Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/0b1761ef-2256-49c5-88f4-f8254377dbb6" alt="Create a New Issue Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/fc7907f1-c9e6-4cb9-aa61-0a163f279aad" alt="Create a New Issue Mobile View"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">📝 Edit Issue </th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/c0501edb-17d4-42db-97c9-daa625594553" alt="Edit Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/4c4e79e7-4524-43ac-8634-30af8e68535b" alt="Edit Issue Tablet View"   >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/ad04d696-b95b-4a91-b83e-c764b240e281" alt="Edit Issue Mobile View"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">
        <p>Light Mode ☀️</p>
      </th>
    </tr>
  <tr>
    <th colspan="2">DASHBOARD 📊</th>
  </tr>
    <tr>
    <td colspan="2">
      <p align="left">Desktop View 💻</p>
      <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/c0c5450f-a2ef-4138-afd1-22a987607854" alt="Dashboard Desktop View"  >
    </td>
  </tr>
  <tr>
    <td>
      <p align="left">Tablet View 📱</p>
      <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/7db4d123-b81c-4c19-b12e-db27da90a198" alt="Dashboard Tablet View" width="100%" height="auto">
    </td>
    <td>
      <p align="left">Mobile View 📱</p>
      <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/5359262f-b545-4b1f-adf7-a785125479db" alt="Dashboard Mobile View"  width="100%" height="auto">
    </td>
  </tr>
</table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">ISSUES LIST PAGE 📃</th>
    </tr>
    <tr>
       <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/73f0f8a7-48e8-49b0-8f9e-b949aebeb29e" alt="List of Issues Desktop View" width="100%" height="auto"  >
      </td>
    </tr>
    <tr>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/4db3700b-9ca6-4e9a-abfe-bf4e18e9b2a6" alt="List of Issues Tablet View" width="100%" height="auto"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/919e9fbd-6e9f-45a1-8cf0-2917a4a1d084" alt="List of Issues Mobile view" width="100%" height="auto"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">FILTER FUNCTIONALITY 🔍</th>
    </tr>
    <tr align="center">
      <td colspan="2">
      <h2 colspan="2">OPEN ISSUE❓</h2>
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/a8bd1069-e438-4b56-aa8c-23cfdc1e50c7" alt="Filtering Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/3f06260b-28f4-412e-8bce-a6ed2683328c" alt="Filtering Issues Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/cbe51be2-7478-45fa-8cc8-8c3f7f3fbc72" alt="Filtering Issues Mobile View"   >
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
      <h2 colspan="2">IN PROGRESS ISSUE ⌛</h2>
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/d9d0c748-ba68-4d52-8e34-a66f9e870f82" alt="Filtering Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/087ce51a-1ff1-4882-be69-30e43d4c6c94" alt="Filtering Issues Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/ca323275-66eb-4a1f-859d-ff05b67a6b8d" alt="Filtering Issues Mobile View"   >
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
      <h2 colspan="2">CLOSED ISSUE ✅</h2>
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/96c0f351-006c-4a6a-883d-bb42da341d02" alt="Filtering Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/aa2d9e68-a096-477c-9f4f-c7ac514d9011" alt="Filtering Issues Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/20383067-b5f2-4397-b9ef-7571557e18ba" alt="Filtering Issues Mobile View"   >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">Sort Functionality 🔢</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/2be7bdff-f202-414d-9777-86e7c24b7297" alt="Sorting Issues Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/c661f83a-d9c8-45ea-9ee3-befac140aae9" alt="Sorting Issues Tablet View"   >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/a160c2a2-45ab-47cd-9463-9f3c8e97bea0" alt="Sorting Issues Mobile View"   >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">DETAILED ISSUE 📄</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/71d0e15e-7afe-4457-9620-76341f341539" alt="Detailed Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/e9629b18-0b57-4f8f-a1ba-48e88d35cdc3" alt="Detailed Issue Tablet View" >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/16308ab5-1be0-4d5a-8bc1-a77d0c31c03a" alt="Detailed Issue Mobile View"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">CREATE NEW ISSUE 📃</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/f6d84472-1775-470f-b691-5a1304f4afdd" alt="Creating New Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/79b398b6-cf77-4a0d-83d8-2badb933d5ff" alt="Creating New Issue Tablet View"  >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/45a64c21-e537-4296-934e-036dd04b352c" alt="Creating New Issue Mobile View"  >
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">📝 Edit Issue </th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/7d154b92-dad6-4536-b425-e5837c512922" alt="Edit Issue Desktop View"   >
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/dc820755-b496-4896-8a66-66d245c7bb4e" alt="Edit Issue Tablet View"   >
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/issue-tracker-app/assets/122253973/835ffd9f-f58b-4fc4-9e31-dd91e4549b87" alt="Edit Issue Mobile View"  >
      </td>
    </tr>
  </table>
  <br />
</div>
