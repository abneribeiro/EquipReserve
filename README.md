[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[MONGO_BADGE]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[Jest]:https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Github]:https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white

<h1 align="center" style="font-weight: bold;"> EquipReserve API 💻</h1>

![express][EXPRESS__BADGE]
![javascript][JAVASCRIPT__BADGE]
![mongo][MONGO_BADGE]
![Jest][Jest]
![GitHub][GitHub]

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
   PORT=8080
   MONGODB_URI=mongodb://localhost/equipreserve
   SECRET_KEY=example
   ```
Modify `MONGODB_URI` and `SECRET_KEY` based on your MongoDB configuration.

4. **Run the application:**

   ```bash
   npm start
   ```

### Usage

EquipReserve API is accessible at `http://localhost:8080` by default. You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.haxx.se/) to interact with the API.

<h3 align="center" style="font-weight: bold;">Routes</h3>

1. #### Users API

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| **POST**   | `/api/user`            | Create a new user         |
| **GET**    | `/api/user`            | Get all users             |
| **GET**    | `/api/user/:userId`    | Get a user by ID          |
| **PUT**    | `/api/user/:userId`    | Update a user             |
| **DELETE** | `/api/user/:userId`    | Delete a user             |


2. #### Equipment API

| Method | Endpoint                | Description                     |
|--------|-------------------------|---------------------------------|
| **POST**   | `/api/equipment`          | Create new equipment            |
| **GET**    | `/api/equipment`          | Get all equipment                |
| **GET**    | `/api/equipment/:equipmentId` | Get equipment by ID           |
| **PUT**    | `/api/equipment/:equipmentId` | Update equipment              |
| **DELETE** | `/api/equipment/:equipmentId` | Delete equipment              |

3. #### Reservations API

| Method | Endpoint                   | Description                    |
|--------|----------------------------|--------------------------------|
| **POST**   | `/api/reservation`           | Create a new reservation       |
| **GET**    | `/api/reservation`           | Get all reservations            |
| **GET**    | `/api/reservation/:reservationId` | Get a reservation by ID      |
| **PUT**    | `/api/reservation/:reservationId` | Update a reservation         |
| **DELETE** | `/api/reservation/:reservationId` | Delete a reservation         |


## Features

- [x] Rotate
- [x] Resize
- [x] Color filter
- [x] Audio normalization
- [x] Remove background noises
- [x] Add Instagram question overlay
- [x] Position video by face
- [ ] Cut video when not talking
- [ ] Subtitles

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
