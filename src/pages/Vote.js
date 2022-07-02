import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Vote() {
  const [isVoted, setIsVoted] = useState(false);
  const [data, setData] = useState(null);
  const apiUrl =
    'https://raw.githubusercontent.com/theanmolmalik/API/main/demo.json';

  async function getData() {
    axios.get(apiUrl).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }
  const totalVotes = () => {
    let votes = 0;
    if (!data) {
      return 0;
    }
    for (let i = 0; i < data.data.length; i++) {
      votes += data.data[i].vote;
    }
    return votes;
  };

  const addVote = (id) => {
    setIsVoted(true);
    localStorage.setItem('votes', 'true');
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('votes'))) {
      const value = JSON.parse(localStorage.getItem('votes'));
      if (value) {
        setIsVoted(true);
      }
    }
    getData();
  }, []);

  if (!data) {
    return <h1> loading.... </h1>;
  }
  if (isVoted) {
    return (
      <div>
        <h1> {data.heading} </h1>
        <h2> Total Votes: {totalVotes()} </h2>
        {data.data.map((x) => (
          <div>
            {x.name}
            votes : {x.vote}
            <progress value={x.vote} max="10"></progress>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1> {data.heading} </h1>
      {data.data.map((x) => (
        <button onClick={() => addVote(x.id)}> {x.name}</button>
      ))}
    </div>
  );
}