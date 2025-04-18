# 📦 LOGIN & REGISTER API — Postman Collection

Welcome to the **LOGIN & REGISTER API** testing collection!  
This Postman collection provides a set of endpoints to test user creation, login, and retrieval functionalities for your authentication system.

---

## 📁 Collection Overview

| #   | Endpoint Name | Method | URL | Description |
|:----|:--------------|:--------|:-----|:----------------|
| 1 | **Create User** | `POST` | `http://localhost:5000/api/v1/user/create-user` | Create a new user |
| 2 | **Get All Users** | `GET` | `{{baseurl}}/api/v1/user/get-user` | Fetch all users (Requires Authorization) |
| 3 | **Get A User** | `GET` | (http://localhost:5000/api/v1/user/get-user/6801ddf6998d5e5644bcf396) | Fetch a specific user |
| 4 | **Login** | `POST` | `http://localhost:5000/api/v1/auth/login` | Log in a user |

---

## 📂 How to Use

### ✅ Import to Postman:
1. Download the `LOGIN_REGISTER_TEST.postman_collection.json` file.
2. Open **Postman**.
3. Go to **File → Import**.
4. Select the downloaded `.json` file.
5. Start sending requests and testing your API!

---

## 🔐 Authorization

- Some endpoints require **Bearer Token Authentication**.
- Example Token (for testing only):
  ```plaintext
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImltcmFuQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDQ5NzA5ODAsImV4cCI6MTc0NTE0Mzc4MH0.ogHyXxLNjDnOoGk_KO6IMuYI2m61Bz3QBtiBrVUsp8U
  ```

---

## 📝 Example Request Bodies

### 📌 Create User
```json
{
  "name": "Imran Hossain",
  "email": "imran@example.com",
  "password": "imran@456",
  "age": 26,
  "photo": "https://example.com/photos/imran.jpg",
  "role": "user",
  "userStatus": "active"
}
```

### 📌 Login
```json
{
  "email": "ayesha@example.com",
  "password": "ayeshaPass"
}
```

---

## 📌 Tech Stack

- 📡 **Postman** — API request testing
- 🟢 **Node.js / Express** — Backend API (assumed)
- 🔐 **JWT (JSON Web Tokens)** — User Authentication

---

## ✨ Author

**Samio Hasan**  
📧 samiohasan6@gmail.com 
💻 Passionate Full-Stack Developer

---

## 📜 License

This project is licensed for testing, educational, and personal learning use only.

