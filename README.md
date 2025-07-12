# Store-Rating-Platform
Developed a user-friendly store rating platform where people can sign up, explore stores, and leave ratings. Built with React, NestJS, and PostgreSQL, the system includes secure login, role-based dashboards, and smooth experiences for users, store owners, and admins alike.
📌 Project Title: Store Rating Platform
🛠 Tech Stack:
Frontend: React.js

Backend: NestJS (Node.js + TypeScript)

Database: PostgreSQL

ORM: TypeORM

Authentication: JWT + Role-based Guards

API Testing: Postman

📄 Project Description:
The Store Rating Platform is a full-stack web application that enables users to register, log in, and submit store ratings. The system supports three distinct user roles:

System Administrator

Normal User

Store Owner

Each role unlocks specific functionalities:

🔐 User Role Features:
👨‍💼 System Administrator:
Can add new stores, normal users, and other admins

Views dashboards showing:

Total users

Total stores

Total submitted ratings

Filters and views user/store data by name, email, address, or role

Views detailed information of all users, including store ratings for store owners

🙋 Normal User:
Can sign up, log in, and update their password

Views list of registered stores with:

Store name

Address

Average rating

Their own submitted rating

Can search stores by name/address

Submits or updates ratings (scale of 1 to 5)

🏪 Store Owner:
Can log in and change password

Views a dashboard showing:

List of users who rated their store

Average store rating

🧪 Validations:
Name: 20–60 characters

Address: Max 400 characters

Email: Must be valid format

Password: 8–16 characters, at least 1 uppercase + 1 special character

📊 Additional Features:
All tables support sorting

Reusable role-based authentication using NestJS guards

Follows best practices in both backend and frontend layers

Clean, modular architecture with scalable database schema
