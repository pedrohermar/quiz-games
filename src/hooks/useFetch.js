import { useState, useEffect } from "react";
import { shuffleArray } from "../utils/shuffleArray";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const jsonData = await response.json();
        // Ordenar de forma aleatoria las respuestas de cada quiz
        jsonData.forEach((quiz) => {
          quiz.answers.options = shuffleArray(quiz.answers.options);
        });
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
