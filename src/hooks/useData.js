import { useState, useEffect } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import quizsData from "../data/quizs.json";

const useData = () => {
  const [data, setData] = useState({});

  const reloadData = () => {
    const newData = quizsData.map((quiz) => {
      return {
        options: shuffleArray(quiz.answers.options),
        ...quiz,
      };
    });
    setData(newData);
  };

  useEffect(() => {
    reloadData();
  }, []);

  return { data, reloadData };
};

export default useData;
