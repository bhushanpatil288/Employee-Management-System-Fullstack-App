# Employee Management System (MERN)

A full-stack MERN application for managing employees with CRUD operations. Built with Express.js, MongoDB, React + Vite, and Tailwind CSS.

## Features
✅ Create, Read, Update, Delete employees  
✅ Employee details: name, email, phone, position (manager/developer/designer/tester), salary  
✅ RESTful API with proper error handling  
✅ Modern React UI with Vite + Tailwind CSS  
✅ State management with Redux Toolkit  
✅ Form validation with React Hook Form and backend Zod validation  
✅ Toast notifications with React Hot Toast  
✅ Code quality tools: ESLint, Prettier  
✅ MongoDB integration with Mongoose  

## Tech Stack
**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- Zod (validation)
- CORS enabled

**Frontend:**
- React 19 + Vite
- Redux Toolkit (State Management)
- React Router DOM (Routing)
- Tailwind CSS (Styling)
- React Hook Form (Forms)
- React Hot Toast (Notifications)
- Axios (HTTP client)
- ESLint (Airbnb config)

## Project Structure
```text
CrudApp/
├── server/                      # Backend (Express + MongoDB)
│   ├── src/
│   │   ├── config/             # MongoDB connection & env config
│   │   ├── models/             # Mongoose schemas (employees.model.js)
│   │   ├── services/           # Business logic & routes
│   │   ├── utility/            # Error handling, helpers
│   │   └── app.js              # Express app setup
│   ├── index.js                # Server entry point
│   ├── .env                    # Environment variables
│   └── package.json
│
├── client/                      # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/                # API calls (axios)
│   │   ├── pages/              # React pages & UI components
│   │   ├── store/              # Redux slices and thunks
│   │   ├── App.jsx             # Main routing component
│   │   ├── Layout.jsx          # UI Layout wrapper
│   │   └── index.css           # Tailwind styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── .env                    # Frontend env vars
│   └── package.json
│
└── README.md
```

## Prerequisites
- **Node.js** ≥ 14 & npm/yarn
- **MongoDB** (local @ `mongodb://127.0.0.1:27017` or Atlas)
- **Git** (optional)

## Setup & Installation

### 1. Clone & Navigate
```bash
git clone <repo-url>
cd CrudApp
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env    # or edit .env directly
npm run dev             # starts on http://localhost:8080
```

**Backend .env:**
```env
PORT=8080
MONGODB_URI=mongodb://127.0.0.1:27017
DB_NAME=employee-management-system
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev             # starts on http://localhost:5173
```

**Frontend .env:**
```env
VITE_API_BASE_URL=http://localhost:8080
```

## Available Scripts

**Backend:**
- `npm start` — Start production server (`node index.js`)
- `npm run dev` — Start dev server with Nodemon
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Auto-fix linting issues
- `npm run format` — Format code with Prettier
- `npm test` — Run tests (not yet configured)

**Frontend:**
- `npm run dev` — Start Vite dev server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Auto-fix linting issues
- `npm run preview` — Preview production build

## API Endpoints

**Base URL:** `http://localhost:8080`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees/list` | List all employees |
| GET | `/employees/list/:id` | Get single employee |
| POST | `/employees/add` | Create new employee |
| PUT | `/employees/update` | Update employee (requires `_id` in body) |
| DELETE | `/employees/remove/:id` | Delete employee |

### Example Request (POST /employees/add)
```json
{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "phone": "9876543210",
  "position": "developer",
  "salary": 50000,
  "password": "securepassword123"
}
```

## Environment Configuration

Backend uses `dotenv` to load `.env` file. See `.env.example` for template.

Frontend uses Vite's `import.meta.env` to access env vars (must prefix with `VITE_`).

## Code Style

- **Prettier:** Auto-formats on save (configured in `.vscode/settings.json`)
- **ESLint:** Backend uses `eslint:recommended` + Prettier. Frontend uses Airbnb config.
- **Tailwind:** Configured in `tailwind.config.js`

## Error Handling

Backend uses custom `ApiError` class for standardized error responses:
```javascript
throw new ApiError(400, 'Invalid input', null);
```

Centralized error handler in `errorHandler` middleware.

## Database

- **Connection:** Mongoose connects to MongoDB on app start
- **Model:** `employees.model.js` defines employee schema with validations
- **Database Name:** `employee-management-system` (configurable in .env)

## Deployment Tips

- **Backend:** Deploy to Heroku, Railway, or Render. Set env vars in platform settings.
- **Frontend:** Build with `npm run build`, deploy `dist/` to Vercel, Netlify, or GitHub Pages.
- **CORS:** Currently allows all origins. Restrict in production: `cors({ origin: process.env.FRONTEND_URL })`

## Next Steps / TODOs
- [ ] Add authentication (JWT)
- [x] Add input validation with Zod
- [x] Create frontend components (Employee List, Form, etc.)
- [x] State management implementation (Redux Toolkit)
- [ ] Add error boundaries in React
- [ ] Write unit tests
- [ ] Add pagination & filtering

## License
ISC (see package.json)

## Author
Bhushan Patil
