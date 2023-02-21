import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../redux/AppReducer/action";
import { useNavigate } from "react-router-dom";
import { USER_NUM_INC } from "../redux/UserReducer/action.Type";
import axios from "axios";

export default function Quiz() {
  const dispatch = useDispatch();
  const toast = useToast()
  const navigate = useNavigate();
  const data = useSelector((e) => e.UserReducer);
  const questions = useSelector((e) => e.AppReducer);
  const [count, setCount] = useState(0);
  const [sQusestion, setSQusestion] = useState({});
  const [pAns, setPAnd] = useState([]);
  const [c,setC] = useState(0)

  useEffect(() => {
    const { noq, category, difficulty } = data.user;
    dispatch(GetData(noq, category, difficulty));
  }, []);

  console.log(data);

  useEffect(() => {
    if (questions.data.length > 0) {
      setSQusestion(questions.data[count]);
      console.log();
      setPAnd([
        ...questions.data[count].incorrect_answers,
        questions.data[count].correct_answer,
      ]);
    }
  }, [count, questions]);

  function SelectTab(e){
     if(questions.data[count].correct_answer === e.target.value){
      toast({
        title: 'Right Answare',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      if(c === 0){
        dispatch({type: USER_NUM_INC})
        setC(1)
      }     
     }else{
      toast({
        title: 'Wrong Answare',
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
     }
  }

  function HandelSubmit(){
    const userscore = {
    name : data.user.name,
    difficulty: data.user.difficulty,
    score : Number(data.marks) * 5,
    incA : Number(data.user.noq) - Number(data.marks),
    rA : data.marks,
    percentage : (Number(data.marks)/Number(data.user.noq)) * 100,
  }

    axios.post('https://new-mock-api-2.onrender.com/blogs', userscore)
    .then(function (response) {
      toast({
        title: 'Succesfuly Submit',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
       navigate('/result')
    })
  }
  return (
    <Box>
      <Box
        margin={"auto"}
        mt={"70px"}
        w={"700px"}
        border={"1px solid black"}
        p={"20px"}
        pl={"30px"}
        boxShadow={"2xl"}
        borderRadius={"5px"}
      >
        <Flex justifyContent={"space-between"} mt={"40px"}>
          <Text>
            Q- {count + 1} {sQusestion.question}
          </Text>
          <Text>
            {data.user.noq} of {count + 1}
          </Text>
        </Flex>
        <RadioGroup mt={"30px"}>
          <Stack>{pAns && pAns.map((e) => <Radio onChange={SelectTab} value={e}>{e}</Radio>)}</Stack>
        </RadioGroup>
        <Flex
          pl={"100px"}
          pr={"100px"}
          mt={"30px"}
          mb={"40px"}
          justifyContent={"flex-end"}
        >
          {data.user.noq == count + 1 ? (
            <Button onClick={HandelSubmit}>Submit</Button>
          ) : (
            <Button onClick={() => {setCount((e) => e + 1); setC(0)}}>Next</Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

  // const userscore = {
  //   name : data.user.name,
  //   difficulty: data.user.difficulty,
  //   score : Number(data.marks) * 5,
  //   incA : Number(data.user.noq) - Number(data.marks),
  //   rA : data.marks,
  //   percentage : (Number(data.marks)/Number(data.user.noq)) * 100,
  // }