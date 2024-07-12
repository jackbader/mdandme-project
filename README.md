# MDandMe API

This is the backend API & frontend Expo app for the MDandMe social networking platform, focusing on sharing patient experiences.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Python](https://www.python.org/downloads/) (3.7+)

## Setting Up the API

To set up the API, follow these steps:

1. Create a virtual environment:

- ```
  cd backend
  ```
- ```
  python3 -m venv venv
  ```

2. Activate the virtual environment:

- On Windows:
  ```
  venv\Scripts\activate
  ```
- On macOS and Linux:
  ```
  source venv/bin/activate
  ```

3. Install the required packages from requirements.txt:

   ```
   pip install -r requirements.txt
   ```

## Running the API

To run the API, follow these steps:

1. CD into the backend folder

2. Activate your environment if you haven't already:

   ```
   source venv/bin/activate
   ```

3. Run the following command:

   ```
   uvicorn main:app --reload
   ```

4. The API will start running at `http://localhost:8000`.

5. You can access the API documentation at `http://localhost:8000/docs`.

## Running the Frontend Expo App

To run the frontend expo app:

1. CD into the frontend folder

2. Install depdencies:

   ```
   npm install
   ```

3. Run the app
   ```
   npm start
   ```
