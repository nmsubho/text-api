# Text Analyzer


## `IMPORTANT!`
### Rename `.env.example` to `.env` and add MongoDB user and password.



# Installation Steps
```
npm install

npm run dev
```
## Or (Using Docker)
```
docker-compose up
```


# Run Tests
```
npm run test
```



## Add Text

Method: `POST`

Url: `http://localhost:8080/api/v1/texts`

Body:

```json
{
  "content": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."
}
```


## Update Text

Method: `PATCH`

Url: `http://localhost:8080/api/v1/texts/{text_id}`

Body:

```json
{
  "content": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."
}
```


## Get All Texts

Method: `GET`

Url: `http://localhost:8080/api/v1/texts`


## Get Text By ID

Method: `GET`

Url: `http://localhost:8080/api/v1/texts/{text_id}`


## Get Number of Words

Method: `GET`

Url: `http://localhost:8080/api/v1/texts/{text_id}/number-of-words`


## Get Number of Characters

Method: `GET`

Url: `http://localhost:8080/api/v1/texts/{text_id}/number-of-characters`


## Get Number of Sentences

Method: `GET`

Url: `http://localhost:8080/api/v1/texts/{text_id}/number-of-sentences`


## Get Number of Paragraphs

Method: `GET`

Url: `http://localhost:8080/api/v1/texts/{text_id}/number-of-paragraphs`


## Get Longest Words

Method: `GET`

Url: `http://localhost:8080/api/v1/texts/{text_id}/longest-words`


## Delete Text

Method: `DELETE`

Url: `http://localhost:8080/api/v1/texts/{text_id}`
