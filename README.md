# Dokumentasi API - InterLearn

## Endpoint Register & Login

### Register User
- `POST /api/auth/register`
  - Headers: Content-Type: application/json
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "nama": "user",
      "email": "user@test.com",
      "password": "user_password",
      "role": "user_role"
    }
    ```
        
  - Response:
    ```json
    {
      "message": "Registrasi berhasil"
    }
    ```
    
### Login User
- `POST /api/auth/login`
  - Headers: Content-Type: application/json
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "email": "user@test.com",
      "password": "user_password"
    }
    ```
        
  - Response:
    ```json
    {
      "token": "eyJhbG...........dJAf0",
      "role": "user_role"
    }
    ```
    
---

## Endpoint Materi

### Tampilkan Semua Materi
- `GET /api/materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Response:
    ```json
    {
      "judul": "Materi 1",
      ...,
      ...,
      ...,
      "quiz": [
        {
          "pertanyaan": "Apa itu .....?",
          "opsi": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
          "jawabanBenar": "Runtime"
        }
      ]
    },
    {
      "judul": "Materi 2",
      ...,
      ...,
      ...,
      "quiz": [
        {
          "pertanyaan": "Apa itu .....?",
          "opsi": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
          "jawabanBenar": "Runtime"
        }
      ]
    }
    ```
    
### Tambah Materi Baru
- `POST /api/materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "judul": "Belajar Node.js",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": []
    }
    ```

  - Response:
    ```json
    {
      "judul": "Belajar Node.js",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": [],
      "dibuatOleh": "id_user",
      "_id": "123...910"
      }
    ```

### Edit Materi 
- `PUT /api/materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "judul": "Belajar Node.js (update)",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": []
    }
    ```
        
  - Response:
    ```json
    {
      "judul": "Belajar Node.js (update)",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": [],
      "dibuatOleh": "id_user",
      "_id": "123...910"
      }
    ```

### Hapus Materi 
- `DEL /api/materi/id_materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Response:
    ```json
    {
      "message": "Materi dihapus"
    }
    ```
    
---

## Endpoint Quiz

### Buat Quiz
- `POST /api/quiz/id_materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Role : pengajar, admin
  - Form-data:
    - Body > Raw
  - JSON:
    ```json
    {
      "questions": [
        {
          "question": "Apa ibu kota Indonesia?",
          "options": ["Jakarta", "Bandung", "Surabaya", "Medan"],
          "correctAnswer": "Jakarta"
        },
        {
          "question": "2 + 2 = ?",
          "options": ["2", "3", "4", "5"],
          "correctAnswer": "4"
        }
      ]
    }
    ```

  - Response:
    ```json
    {
      "message": "Kuis berhasil dibuat",
      "quiz": {
        "_id": "665e9c51...",
        "materiId": "665e9b2c...",
        "questions": [
          {
            "question": "Apa ibu kota Indonesia?",
            "options": ["Jakarta", "Bandung", "Surabaya", "Medan"],
            "correctAnswer": "Jakarta"
          },
          {
            "question": "2 + 2 = ?",
            "options": ["2", "3", "4", "5"],
            "correctAnswer": "4"
          }
        ]
      }
    }
 
    ```

### Tampil Quiz by Materi
- `GET /api/quiz/id_materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Role : user
  - Form-data:
    - Body > Raw
  - Response:
    ```json
    {
      "message": "Kuis berhasil dibuat",
      "quiz": {
        "_id": "665e9c51...",
        "materiId": "665e9b2c...",
        "questions": [
          {
            "question": "Apa ibu kota Indonesia?",
            "options": ["Jakarta", "Bandung", "Surabaya", "Medan"],
            "correctAnswer": "Jakarta"
          },
          {
            "question": "2 + 2 = ?",
            "options": ["2", "3", "4", "5"],
            "correctAnswer": "4"
          }
        ]
      }
    }
    ```
    
### Submit Jawaban Quiz
- `POST /api/quiz/id_materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Role : user
  - Form-data:
    - Body > Raw
  - JSON:
    ```json
    {
      "answers": ["Jakarta", "4"]
    }
    ```
  - Response:
    ```json
    {
      "message": "Kuis selesai",
      "total": 2,
      "benar": 2
    }
    ```

---

## Endpoint Rapot

### Tampilkan Rapot Murid Tertentu
- `GET /api/rapot/user/:userId`
  - Headers: Content-Type: application/json
  - Response:
    ```json
    {
        "_id": "ID_RAPOT",
        "user": "ID_USER",
        "materi": {
            "_id": "ID_MATERI",
            "judul": "JUDUL_MATERI"
        },
        "skor": "SKOR",
        "tanggal": "TIMESTAMP",
        "__v": 0
    }
    ```

### Tambah Nilai Rapot Baru
- `POST /api/rapot`
  - Headers: Content-Type: application/json
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "user": "ID_USER",
      "materi": "ID_MATERI",
      "skor": "SKOR"
    }
    ```

  - Response:
    ```json
    {
      "user": "ID_USER",
      "materi": "ID_MATERI",
      "skor": "SKOR",
      "_id": "ID_RAPOT",
      "tanggal": "timestamp"
      }
    ```
### Edit Rapot
- `PUT /api/rapot/id_rapot`
  - Headers: Content-Type: application/json
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "skor": "skor"
    }
    ```
        
  - Response:
    ```json
    {
      "_id": "ID_RAPOT",
      "user": "ID_USER",
      "materi": "ID_MATERI",
      "skor": "skor",
      "tanggal": "timestamp"
      }
    ```

### Delete Rapot
- `DELETE /api/rapot/id_rapot`
  - Headers: Content-Type: application/json
  - Response:
    ```json
    {
      "message": "Rapot berhasil dihapus"
      }
    ```
