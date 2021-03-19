<a name="top"></a>
# KickApp-API v1.0.0

KickApp-API

 - [Authentication](#Authentication)
   - [Create a new user](#Create-a-new-user)

___


# <a name='Authentication'></a> Authentication

## <a name='Create-a-new-user'></a> Create a new user
[Back to top](#top)

<p>Register a new user to KickApp.</p>

```
 POST  /registerMongoDB
```

### Parameters - `Body`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>User's personnal email.</p> |
| pseudo | `String` | <p>User's pseudo which can be displayed.</p> |
| username | `String` | <p>User's name which can be displayed.</p> |
| password | `String` | <p>User's password.</p> |
| snapUserId | `String` | **optional** <p>User's snapUserId.</p> |
| snapAvatarId | `String` | **optional** <p>User's snapAvatarId.</p> |
| snapAvatarUrl | `String` | **optional** <p>User's snapAvatarUrl.</p> |
| snapPseudo | `String` | **optional** <p>User's snapPseudo.</p> |

### Parameters examples
`json` - Request example:

```json
curl --location --request POST '/registerMongoDB' \
--header 'Content-Type: application/json' \
--data-raw '{
	"email": "some@email.com",
	"pseudo": "randomPseudo",
	"username": "randomUsername",
	"password": "somFancyPassword"
}'
```

### Success response example

#### Success response example - `Success:`

```json
POST /registerMongoDB HTTP/1.1 200
{ message: "user successfully created", registeredIn: true }
```

### Error response

#### Error response - `Status Code`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `json` | <p>Standard error for missing or wrong mandatory fields.</p> |
| 409 | `json` | <p>Standard error for in case of username and/or email already existing.</p> |
| 500 | `json` | <p>Standard error for in password hashing or user creation.</p> |

### Error response example

#### Error response example - `Bad request:`

```json
POST /registerMongoDB HTTP/1.1 400
{ "message": [
  {
  	"message": "\"username\" is required",
  	"path": [
  		"username"
  	],
  	"type": "any.required",
  	"context": {
  		"label": "username",
  		"key": "username"
  	}
  }
]}
```

#### Error response example - `Conflict:`

```json
POST /registerMongoDB HTTP/1.1 409
{ message: 'Email already exists', emailAlreadyExisting: true }
```

#### Error response example - `Conflict:`

```json
POST /registerMongoDB HTTP/1.1 409
{ message: 'Username already exists', usernameAlreadyExisting: true }
```

#### Error response example - `Internal Server Error:`

```json
POST /registerMongoDB HTTP/1.1 500
{ message: 'error hashing password' }
```

#### Error response example - `Internal Server Error:`

```json
POST /registerMongoDB HTTP/1.1 500
{ message: 'error creating user' }
```
