# Aircraft Parts Marketplace

A B2B platform where aircraft parts suppliers can upload their inventory and buyers can search for parts across the marketplace.

## Features

- **User Authentication**: Secure login for sellers and buyers
- **Inventory Management**: Sellers can upload and manage aircraft parts inventory
- **Advanced Search**: Buyers can search and filter parts by multiple criteria
- **Subscription Plans**: Monthly subscription or pay-per-search pricing model
- **Payment Integration**: Stripe integration for billing and subscriptions
- **Dashboard**: User-specific dashboards for sellers and buyers

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Caching**: Redis
- **Payment**: Stripe API

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Context API / Redux
- **HTTP Client**: Axios

### Infrastructure
- **Containerization**: Docker
- **Hosting**: AWS / Heroku / DigitalOcean
- **CI/CD**: GitHub Actions

## Project Structure

```
aircraft-parts-marketplace/
├── backend/                 # Express.js API
│   ├── src/
│   │   ├── config/         # Database & environment config
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Auth, validation, error handling
│   │   ├── models/         # Database models & queries
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Helper functions
│   │   └── server.js       # Entry point
│   ├── migrations/         # Database migrations
│   ├── .env.example        # Environment variables template
│   ├── package.json
│   └── Dockerfile
├── frontend/                # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API calls
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # Context providers
│   │   ├── utils/          # Helper functions
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.ts
│   └── Dockerfile
├── docker-compose.yml      # Multi-container setup
├── .gitignore
└── docs/                   # Documentation
    ├── API.md             # API documentation
    ├── DATABASE.md        # Database schema
    ├── SETUP.md           # Setup instructions
    └── DEPLOYMENT.md      # Deployment guide
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- Redis
- Docker (optional)

### Installation

1. Clone the repository
```bash
git clone https://github.com/kaionyett-cyber/aircraft-parts-marketplace.git
cd aircraft-parts-marketplace
```

2. Set up backend
```bash
cd backend
cp .env.example .env
npm install
npm run migrate
npm run dev
```

3. Set up frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

4. Open browser at `http://localhost:5173`

### Docker Setup

```bash
docker-compose up
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout

### Inventory (Sellers)
- `GET /api/inventory` - Get seller's inventory
- `POST /api/inventory` - Upload new part
- `PUT /api/inventory/:id` - Update part
- `DELETE /api/inventory/:id` - Delete part
- `POST /api/inventory/bulk-upload` - Bulk upload CSV

### Search (Buyers)
- `GET /api/search` - Search parts
- `GET /api/parts/:id` - Get part details
- `GET /api/categories` - Get all categories

### Subscriptions & Billing
- `GET /api/subscriptions/plans` - Get available plans
- `POST /api/subscriptions/subscribe` - Create subscription
- `GET /api/billing/invoice` - Get invoices
- `POST /api/billing/usage` - Log search usage

## Environment Variables

See `.env.example` files in backend and frontend directories.

## Database Schema

See [DATABASE.md](docs/DATABASE.md) for detailed schema documentation.

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

MIT

## Support

For issues and questions, please open a GitHub issue.
