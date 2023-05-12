import { useEffect, useState } from "react";
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

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch("/api/customers");
      const data = await response.json();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

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
          {customers
            ? customers.map((item) => {
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
            : ""}
        </TableBody>
      </StyledTable>
    </Root>
  );
}

export default App;
