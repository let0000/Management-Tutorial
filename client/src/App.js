import { useEffect, useState } from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const StyledTable = styled("table")({
  minWidth: 1080,
});

function App() {
  const [customers, setCustomers] = useState("");
  const [completed, setCompledted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let complete = 0;
    let timer = setInterval(() => {
      if (completed >= 100) {
        complete = 0;
      } else {
        complete += 1;
      }
      setCompledted(complete);
      if (isLoading) {
        clearInterval(timer);
      }
    }, 20);
    callApi()
      .then((res) => {
        setCustomers(res);
      })
      .catch((err) => console.log(err));
  }, [isLoading]);

  const callApi = async () => {
    const response = await fetch("/api/customers");
    const data = await response.json();
    setIsLoading(true);
    return data;
  };

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
          {customers ? (
            customers.map((item) => {
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
            })
          ) : (
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress value={completed} variant="indeterminate" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </StyledTable>
    </Root>
  );
}

export default App;
