import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

export default function Dashbord() {
  const [user,setUser] = useState([])
  useEffect(() => {
    axios.get('https://new-mock-api-2.onrender.com/blogs')
    .then((e) => setUser(e.data))
  })
  return (
    <Box>
      <Text textAlign={"center"} mt={"50px"} mb={"50px"} fontSize={"25px"}>
        All Student Exam Score
      </Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
             <Th>Name</Th>
             <Th>Difficult Lable</Th>
              <Th>Correct answers count</Th>
              <Th>Incorrect answers count</Th>
              <Th>Total score</Th>
              <Th>Percentage</Th>
            </Tr>
          </Thead>
          <Tbody>
              {
                user.map((e) => (
                  <Tr>
                    <Td>{e.name}</Td>
                    <Td>{e.difficulty}</Td>
                    <Td>{e.score}</Td>
                    <Td>{e.incA}</Td>
                    <Td>{e.score}</Td>
                    <Td>{e.percentage}%</Td>
                  </Tr>
                ))
              }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
