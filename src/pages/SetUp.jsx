import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_DATA_ADD } from "../redux/UserReducer/action.Type";
import {useNavigate} from 'react-router-dom'

export default function SetUp() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [noq, setNoq] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function onSubmit() {
    if (name && category && difficulty && noq) {
      dispatch({
        type: USER_DATA_ADD,
        payload: { name, category, difficulty, noq },
      });
      navigate('/quiz')
    } else {
      return alert("fill all inputs");
    }
  }

  return (
    <>
      <Text
        mt={"20px"}
        fontWeight={"bold"}
        fontSize={"3xl"}
        textAlign={"center"}
      >
        Setup Your Quiz
      </Text>
      <FormControl w={"420px"} margin={"auto"} mt={"40px"}>
        <FormLabel>Enter Your Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        <FormLabel mt={"20px"}>Select Category</FormLabel>
        <Select
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Select Category"
        >
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </Select>

        <FormLabel mt={"20px"}>Select Difficulty</FormLabel>
        <Select
          onChange={(e) => setDifficulty(e.target.value)}
          placeholder="Select Difficulty"
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </Select>

        <FormLabel mt={"20px"}>Number of questions</FormLabel>
        <Input
          placeholder="Number of questions"
          onChange={(e) => setNoq(e.target.value)}
          type="number"
        />
        <Button
          mt={"20px"}
          colorScheme={"blue"}
          w={"200px"}
          ml={"120px"}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
}
