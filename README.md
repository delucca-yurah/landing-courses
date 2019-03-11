# Yurah Landing Courses

This project is a simple Gatsby static website that uses a JSON file to create courses landing pages for Yurah.

## 🤖 Installation Instructions

This service is based on Node. To run it you just need to install any version above Node 11.2. We use Docker to build and deploy our services, so you just need to keep the Docker's and CI files, this will trigger the CI automatically.

To install the package, just run:

```
npm i
```

And then, to start the server:

```
npm start
```

Or, you can start the server as development mode:

```
npm run dev
```

After that the server will be up and running, waiting for any API calls.

## 🧐 Usage

To create a new course simply add a JSON file at `src/data/courses` with the course name slugified as the file name, containing the following:

```
{
  "courseId": "<COURSE ID>",
  "title": "<COURSE TITLE>",
  "slug": "<COURSE SLUG>",
  "description": "<COURSE DESCRIPTION>",
  "market": "<COURSE MARKET SECTION>",
  "salary": "<COURSE SALARY SECTION>",
  "price": {
    "original": "<COURSE ORIGINAL PRICE>",
    "promotional": "<COURSE PROMOTIONAL PRICE>",
    "currency": "<COURSE CURRENCY>"
  },
  "author": {
    "name": "<COURSE AUTHOR NAME>",
    "bio": "<COURSE AUTHOR BIO>"
  },
  "topics": [<COURSE TOPIC, COMMA SEPARATED>],
  "video": {
    "id": "<COURSE VIDEO YOUTUBE ID>"
  },
  "metadata": {
    "title": "<COURSE META TITLE>",
    "description": "<COURSE META DESCRIPTION>",
    "keywords": [<COURSE META KEYWORDS, COMMA SEPARATED>],
    "url": "<COURSE URL>"
  }
}
```

After that, start the server and simply go to `http://localhost:8080/cursos/whatsapp/<COURSE SLUG>`

## 💀 Testing

We use Jest to test our file. Every test file should follow this pattern:

```
<nome>.test.js
```

To test it, just run:
```
npm test
```

## 💅 Versioning

We use [SemVer](https://semver.org/) for versioning.
