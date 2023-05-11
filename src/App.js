import "./App.css";
import Customer from "./components/Customer";
import { TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const StyledTable = styled("table")({
  minWidth: 1080,
});

const customers = [
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
];

function App() {
  return (
    <Root>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.map((item) => {
            return (
              <Customer
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                birthday={item.birthday}
                gender={item.gender}
                job={item.job}
              />
            );
          })}
        </TableBody>
      </StyledTable>
    </Root>
  );
}

export default App;
