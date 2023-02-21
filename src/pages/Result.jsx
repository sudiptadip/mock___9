import { Box, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Result() {
  const data = useSelector((e) => e.UserReducer)
  // const userscore = {
  //   name : data.user.name,
  //   difficulty: data.user.difficulty,
  //   score : Number(data.marks) * 5,
  //   incA : Number(data.user.noq) - Number(data.marks),
  //   rA : data.marks,
  //   percentage : (Number(data.marks)/Number(data.user.noq)) * 100,
  // }
  return (
    <Box>
      <Text textAlign={'center'} mt={'50px'} mb={'50px'} fontSize={'25px'} >Exam Score</Text>
      <Text textAlign={'center'} mt={'50px'} mb={'50px'} fontSize={'25px'} >Name : - {data.user.name}</Text>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>    
    <Thead>
      <Tr>
        <Th>Correct answers count</Th>
        <Th>Incorrect answers count</Th>
        <Th>Total score</Th>
        <Th>Percentage</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{data.marks}</Td>
        <Td>{Number(data.user.noq) - Number(data.marks)}</Td>
        <Td >{Number(data.marks) * 5}</Td>
        <Td>{(Number(data.marks)/Number(data.user.noq)) * 100}%</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}
