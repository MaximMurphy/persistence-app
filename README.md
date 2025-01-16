This is in theory the standard To-Do List app except with more features, styled better than other versions, and designed specifically for me to use MYSELF to keep track of my day-to-day tasks and productivity throughout the year. Use it as you see fit.

![Screenshot 2025-01-16 at 1 44 51 PM](https://github.com/user-attachments/assets/8fbe0a0d-f56b-45de-8915-3cea3a5642c4)
![Screenshot 2025-01-16 at 1 43 48 PM](https://github.com/user-attachments/assets/3ec40cbb-6b35-477d-a0fb-104274ab4151)


Built with Next.js, Typescript

Auth - Next-auth

Database - Neon PostgreSQL

ORM - Prisma

Styled with TailwindCSS

Logos designed in Canva

Features:
- Add new Daily tasks for your standard To-Do List. Any tasks in the Daily Section will remain until completion. (For example: "Go to grocery store")
- Tasks can be moved to the Persistent Section by pressing the ✧ button. Persistent Tasks will repeat every day. (For example: "Spend 15 minutes playing Piano")
- At the end of each day, the total completion percentage of all of your tasks will be collected and added to the Completion Chart. This chart is inspired by GitHub's Contribution Activity Chart. So in the case for Persistence, brighter purple === higher completion percentage. Each purple square represents a day in the year which can be shown on the tooltip when hovering.
