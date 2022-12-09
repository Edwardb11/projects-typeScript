### RUN DEV

Go to directory
```bash
  cd   express-typescript
```

Install dependences
```bash
  npm i
```
Run localy

```bash
   npm run dev
```


### API

Get

ALL
```bash
   http://localhost:3000/api/diaries
```

ID
```bash
   http://localhost:3000/api/diaries/1 <=ID
```

POST
```bash
   http://localhost:3000/api/diaries

BODY
    {
        "date": "2022-01-10",
        "weather": "sunny",
        "visibility": "good",
        "comment": "Everything went better that expected, I'm learning much"
    }
```