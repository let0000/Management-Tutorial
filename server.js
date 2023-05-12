const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://i.ytimg.com/vi/ep2IgZdz0o0/maxresdefault.jpg",
      name: "팜하니",
      birthday: "041006",
      gender: "여자",
      job: "가수",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "980612",
      gender: "남자",
      job: "의적",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/2",
      name: "김강식",
      birthday: "020304",
      gender: "남자",
      job: "보디빌더",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
