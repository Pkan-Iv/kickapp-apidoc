<a name="top"></a>
# KickApp-API v1.0.0

KickApp-API

 - [Authentication](#Authentication)
   - [Create a new user](#Create-a-new-user)
   - [Log in a new user](#Log-in-a-new-user)

___


# <a name='Authentication'></a> Authentication

## <a name='Create-a-new-user'></a> Create a new user
[Back to top](#top)

<p>Register a new user to KickApp.</p>

```
 POST  /register
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
curl --location --request POST '/register' \
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
POST /register HTTP/1.1 200
{ message: "user successfully created", registeredIn: true }
```

### Error response

#### Error response - `Status Code`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `json` | <p>Standard error for missing or wrong mandatory fields value.</p> |
| 409 | `json` | <p>Standard error for in case of username and/or email already existing.</p> |
| 500 | `json` | <p>Standard error for in password hashing or user creation.</p> |

### Error response example

#### Error response example - `Bad request:`

```json
POST /register HTTP/1.1 400
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
POST /register HTTP/1.1 409
{ reason: 'Email already exists', emailAlreadyExisting: true }
```

#### Error response example - `Conflict:`

```json
POST /register HTTP/1.1 409
{ reason: 'Username already exists', usernameAlreadyExisting: true }
```

#### Error response example - `Internal Server Error:`

```json
POST /register HTTP/1.1 500
{ reason: 'error hashing password' }
```

#### Error response example - `Internal Server Error:`

```json
POST /register HTTP/1.1 500
{ reason: 'error creating user' }
```

## <a name='Log-in-a-new-user'></a> Log in a new user
[Back to top](#top)

<p>Log in a new user to KickApp.</p>

```
 POST  /login
```

### Parameters - `Body`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>User's name which can be displayed.</p> |
| password | `String` | <p>User's password.</p> |

### Parameters examples
`json` - Request example:

```json
curl --location --request POST '/login' \
--header 'Content-Type: application/json' \
--data-raw '{
	"username": "randomUsername",
	"password": "somFancyPassword"
}'
```

### Success response example

#### Success response example - `Success:`

```json
POST /login HTTP/1.1 200
{ message: 'Login successful', $user, $token }
```

### Error response

#### Error response - `Status Code`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `json` | <p>Standard error for missing or wrong mandatory fields value.</p> |
| 404 | `json` | <p>Standard error for resource not found.</p> |
| 500 | `json` | <p>Standard message for database error.</p> |

### Error response example

#### Error response example - `Bad Request missing fields value:`

```json
POST /login HTTP/1.1 400
{ reason: 'No empty fields allowed!' }
```

#### Error response example - `Bad Request missing fields value:`

```json
POST /login HTTP/1.1 400
{ reason: 'Incorrect password!' }
```

#### Error response example - `Conflict:`

```json
POST /login HTTP/1.1 404
{ reason: 'Not found.'
```

#### Error response example - `Internal Server Error:`

```json
POST /login HTTP/1.1 500
{ message: 'An error occured!', $err }
```
