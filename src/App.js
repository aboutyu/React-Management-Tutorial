import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "유태훈",
    birth: "790807",
    gender: "남자",
    job: "대학원생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "유태훈",
    birth: "790807",
    gender: "남자",
    job: "대학원생"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "유태훈",
    birth: "790807",
    gender: "남자",
    job: "대학원생"
  }
]
  
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  };
}

export default App;
