define({ "api": [
  {
    "type": " post ",
    "url": "/registerMongoDB",
    "title": "Create a new user",
    "group": "Authentication",
    "name": "post_create_user",
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
          "content": "curl --location --request POST '/registerMongoDB' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\"email\": \"some@email.com\",\n\t\"pseudo\": \"randomPseudo\",\n\t\"username\": \"randomUsername\",\n\t\"password\": \"somFancyPassword\"\n}'",
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
            "description": "<p>Standard error for missing or wrong mandatory fields.</p>"
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
          "content": "POST /registerMongoDB HTTP/1.1 400\n{ \"message\": [\n  {\n  \t\"message\": \"\\\"username\\\" is required\",\n  \t\"path\": [\n  \t\t\"username\"\n  \t],\n  \t\"type\": \"any.required\",\n  \t\"context\": {\n  \t\t\"label\": \"username\",\n  \t\t\"key\": \"username\"\n  \t}\n  }\n]}",
          "type": "json"
        },
        {
          "title": "Conflict:",
          "content": "POST /registerMongoDB HTTP/1.1 409\n{ message: 'Email already exists', emailAlreadyExisting: true }",
          "type": "json"
        },
        {
          "title": "Conflict:",
          "content": "POST /registerMongoDB HTTP/1.1 409\n{ message: 'Username already exists', usernameAlreadyExisting: true }",
          "type": "json"
        },
        {
          "title": "Internal Server Error:",
          "content": "POST /registerMongoDB HTTP/1.1 500\n{ message: 'error hashing password' }",
          "type": "json"
        },
        {
          "title": "Internal Server Error:",
          "content": "POST /registerMongoDB HTTP/1.1 500\n{ message: 'error creating user' }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "POST /registerMongoDB HTTP/1.1 200\n{ message: \"user successfully created\", registeredIn: true }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../kickApp/server/controllers/auth.js",
    "groupTitle": "Authentication"
  }
] });
