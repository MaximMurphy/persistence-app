This is in theory the standard To-Do List app except with more features, styled better than other versions, and designed specifically for me to use MYSELF to keep track of my day-to-day tasks and productivity throughout the year. Use it as you see fit.

![Screenshot 2024-12-12 at 4 38 38 PM](https://github.com/user-attachments/assets/604f7a6a-c2ca-4145-a05f-87dad0ee6d79)

Built with Next.js, Typescript
Auth - Next-auth
Database - Neon PostgreSQL
ORM - Prisma
Styled with TailwindCSS
Logos designed in Canva

Features:

- Add new Daily tasks for your standard To-Do List. Any tasks in the Daily Section will remain until completion. (For example: "Go to Grocery Store")
- Tasks can be moved to the Persistent Section by pressing the ✧ button. Persistent Tasks will repeat every day. (For example: "Spend 15 minutes playing Piano")
- At the end of each day, the total completion percentage of all of your tasks will be collected and added to the Completion Chart. This chart is inspired by GitHub's Contribution Activity Chart. So in the case for Persistence, brighter purple === higher completion percentage. Each purple square represents a day in the year which can be shown on the tooltip when hovering.
- Social Page to view the Completion Charts of other accounts.
