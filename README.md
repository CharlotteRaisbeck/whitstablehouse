# California House Website

A React-based website for California House care home, featuring SharePoint document integration.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `sharepoint.env` file (or `.env` file) in the root directory
   - See `server/README.md` for detailed configuration instructions

### Running the Application

#### Development Mode

Run both frontend and backend servers together:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3001`
- React frontend on `http://localhost:3000`

#### Run Servers Separately

Backend only:
```bash
npm run server
```

Frontend only:
```bash
npm start
```

### Available Scripts

- `npm start` - Runs the React app in development mode
- `npm run server` - Runs the backend proxy server
- `npm run dev` - Runs both frontend and backend concurrently
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

## Backend Proxy Server

The backend server acts as a proxy to fetch SharePoint folders without requiring authentication on the frontend.

**Important:** Before using the Documents page, you must configure SharePoint authentication. See `server/README.md` for detailed setup instructions.

### Quick Setup

1. Create a `sharepoint.env` file in the root directory
2. Configure Azure AD credentials or SharePoint username/password
3. See `server/README.md` for complete setup instructions

## Project Structure

```
california-house/
├── public/          # Static files
├── src/            # React source code
│   ├── pages/      # Page components
│   └── App.tsx     # Main app component
├── server/         # Backend proxy server
│   ├── index.js    # Express server
│   └── README.md   # Backend setup instructions
└── package.json    # Dependencies and scripts
```

## Learn More

- [Create React App documentation](https://github.com/facebook/create-react-app)
- [React documentation](https://reactjs.org/)
- [SharePoint REST API](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)
