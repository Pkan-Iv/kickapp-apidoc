define({ "api": [
  {
    "type": " get ",
    "url": "/verify/:emailToken",
    "title": "verify a new user",
    "group": "Authentication",
    "name": "get_verify_user",
    "version": "1.0.0",
    "description": "<p>Verify a new user to KickApp.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "emailToken",
            "description": "<p>User's personal token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "curl --location --request GET '/verify/15AdY9' \\\n--header 'Content-Type: application/json'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Status Code": [
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "404",
            "description": "<p>Standard error for resource not found.</p>"
          },
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "500",
            "description": "<p>Standard message for database error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Conflict:",
          "content": "POST /verify/15AdY9 HTTP/1.1 404\n{ reason: 'Not found.'",
          "type": "json"
        },
        {
          "title": "Internal Server Error:",
          "content": "POST /verify/15AdY9 HTTP/1.1 500\n{ message: 'An error occured!', $err }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "POST /login HTTP/1.1 200\n{ message: '$username, your account is verified. You can now log in.'}",
          "type": "json"
        }
      ]
    },
    "filename": "../kickapp-api/src/controllers/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": " post ",
    "url": "/register",
    "title": "Create a new user",
    "group": "Authentication",
    "name": "post_create_user",
    "version": "1.0.0",
    "description": "<p>Register a new user to KickApp.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's personnal email.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>User's pseudo which can be displayed.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's name which can be displayed.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "snapUserId",
            "description": "<p>User's snapUserId.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "snapAvatarId",
            "description": "<p>User's snapAvatarId.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "snapAvatarUrl",
            "description": "<p>User's snapAvatarUrl.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "snapPseudo",
            "description": "<p>User's snapPseudo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "curl --location --request POST '/register' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\"email\": \"some@email.com\",\n\t\"pseudo\": \"randomPseudo\",\n\t\"username\": \"randomUsername\",\n\t\"password\": \"somFancyPassword\"\n}'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Status Code": [
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "400",
            "description": "<p>Standard error for missing or wrong mandatory fields value.</p>"
          },
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "409",
            "description": "<p>Standard error for in case of username and/or email already existing.</p>"
          },
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "500",
            "description": "<p>Standard error for in password hashing or user creation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad request:",
          "content": "POST /register HTTP/1.1 400\n{ \"message\": [\n  {\n  \t\"message\": \"\\\"username\\\" is required\",\n  \t\"path\": [\n  \t\t\"username\"\n  \t],\n  \t\"type\": \"any.required\",\n  \t\"context\": {\n  \t\t\"label\": \"username\",\n  \t\t\"key\": \"username\"\n  \t}\n  }\n]}",
          "type": "json"
        },
        {
          "title": "Conflict:",
          "content": "POST /register HTTP/1.1 409\n{ reason: 'Email already exists', emailAlreadyExisting: true }",
          "type": "json"
        },
        {
          "title": "Conflict:",
          "content": "POST /register HTTP/1.1 409\n{ reason: 'Username already exists', usernameAlreadyExisting: true }",
          "type": "json"
        },
        {
          "title": "Internal Server Error:",
          "content": "POST /register HTTP/1.1 500\n{ reason: 'error hashing password' }",
          "type": "json"
        },
        {
          "title": "Internal Server Error:",
          "content": "POST /register HTTP/1.1 500\n{ reason: 'error creating user' }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "POST /register HTTP/1.1 200\n{ message: \"user successfully created\", registeredIn: true }",
          "type": "json"
        }
      ]
    },
    "filename": "../kickapp-api/src/controllers/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": " post ",
    "url": "/login",
    "title": "Log in a new user",
    "group": "Authentication",
    "name": "post_login_user",
    "version": "1.0.0",
    "description": "<p>Log in a new user to KickApp.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's name which can be displayed.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "curl --location --request POST '/login' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\"username\": \"randomUsername\",\n\t\"password\": \"somFancyPassword\"\n}'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Status Code": [
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "400",
            "description": "<p>Standard error for missing or wrong mandatory fields value.</p>"
          },
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "404",
            "description": "<p>Standard error for resource not found.</p>"
          },
          {
            "group": "Status Code",
            "type": "json",
            "optional": false,
            "field": "500",
            "description": "<p>Standard message for database error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad Request missing fields value:",
          "content": "POST /login HTTP/1.1 400\n{ reason: 'No empty fields allowed!' }",
          "type": "json"
        },
        {
          "title": "Bad Request missing fields value:",
          "content": "POST /login HTTP/1.1 400\n{ reason: 'Incorrect password!' }",
          "type": "json"
        },
        {
          "title": "Conflict:",
          "content": "POST /login HTTP/1.1 404\n{ reason: 'Not found.'",
          "type": "json"
        },
        {
          "title": "Internal Server Error:",
          "content": "POST /login HTTP/1.1 500\n{ message: 'An error occured!', $err }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "POST /login HTTP/1.1 200\n{ message: 'Login successful', $user, $token }",
          "type": "json"
        }
      ]
    },
    "filename": "../kickapp-api/src/controllers/auth.js",
    "groupTitle": "Authentication"
  }
] });
