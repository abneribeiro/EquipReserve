[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[MONGO_BADGE]:https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white

<h1 align="center" style="font-weight: bold;"> EquipReserve API 💻</h1>

![express][EXPRESS__BADGE]
![javascript][JAVASCRIPT__BADGE]
![mongo][MONGO_BADGE]

<p align="center">
  <b>EquipReserve is a reservation system API that allows users to manage equipment reservations efficiently. This README provides comprehensive information on setting up, running, and using the EquipReserve API.</b>
</p>


### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [Users](#users)
  - [Equipment](#equipment)
  - [Reservations](#reservations)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abneribeiro/EquipReserve.git
   cd EquipReserve
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost/equipreserve
   ```

   Modify `MONGODB_URI` based on your MongoDB configuration.

4. **Run the application:**

   ```bash
   npm start
   ```

### Usage

EquipReserve API is accessible at `http://localhost:3000` by default. You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.haxx.se/) to interact with the API.

### Routes

#### Users

- **Create a new user:**

  ```bash
  POST /api/user
  ```

- **Get all users:**

  ```bash
  GET /api/user
  ```

- **Get a user by ID:**

  ```bash
  GET /api/user/:userId
  ```

- **Update a user:**

  ```bash
  PUT /api/user/:userId
  ```

- **Delete a user:**

  ```bash
  DELETE /api/user/:userId
  ```

#### Equipment

- **Create new equipment:**

  ```bash
  POST /api/equipment
  ```

- **Get all equipment:**

  ```bash
  GET /api/equipment
  ```

- **Get equipment by ID:**

  ```bash
  GET /api/equipment/:equipmentId
  ```

- **Update equipment:**

  ```bash
  PUT /api/equipment/:equipmentId
  ```

- **Delete equipment:**

  ```bash
  DELETE /api/equipment/:equipmentId
  ```

#### Reservations

- **Create a new reservation:**

  ```bash
  POST /api/reservation
  ```

- **Get all reservations:**

  ```bash
  GET /api/reservation
  ```

- **Get a reservation by ID:**

  ```bash
  GET /api/reservation/:reservationId
  ```

- **Update a reservation:**

  ```bash
  PUT /api/reservation/:reservationId
  ```

- **Delete a reservation:**

  ```bash
  DELETE /api/reservation/:reservationId
  ```

### Testing

To run tests using [Jest](https://jestjs.io/), use the following command:

```bash
npm test
```

### Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

### License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE](LICENSE).





