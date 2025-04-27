# TaskManager

A full-stack to-do list application built using modern web technologies. This application allows users to manage their tasks efficiently with a clean and responsive user interface.

## 🚀 Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Persistent storage using PostgreSQL
- Responsive design
- Real-time updates

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Template Engine**: EJS
- **Additional Tools**: 
  - body-parser for handling form data
  - dotenv for environment variable management
  - pg for PostgreSQL database connection

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- PostgreSQL
- npm (Node Package Manager)

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd TaskManager
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
DB_USER=your_db_user
DB_HOST=your_db_host
DB_DATABASE=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=your_db_port
```

4. Set up the PostgreSQL database:
```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);
```

## 🚀 Running the Application

1. Start the server:
```bash
npm start
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

## 📝 Usage

- **Adding a Task**: Enter the task in the input field and press Enter or click the "+" button
- **Editing a Task**: Click the edit button next to the task, modify the text, and save
- **Deleting a Task**: Click the delete button next to the task you want to remove

## 👥 Author

Vishal

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- PostgreSQL team for the robust database system
- All contributors and users of this project
