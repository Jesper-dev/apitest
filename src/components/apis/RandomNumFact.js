import React, {useState, useEffect} from 'react';
import axios from "axios";



function RandomNumFact() {

    const [num, setNum] = useState("5")
    const [data, setData] = useState("")


    const options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${num}/trivia`,
        params: {max: '20', fragment: 'true', min: '10', json: 'true'},
        headers: {
          'x-rapidapi-key': '9e8ddf2821msh4c4f74e49206ee9p1302d4jsn143cd2ada6f1',
          'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
        }
      };
      
      

      useEffect(() => {

        axios.request(options).then(function (response) {
            setData(response.data.text)
            
        }).catch(function (error) {
            console.error(error);
        });
          
      }, [num])

      const onTextChange = (event) => {
        setNum(event.target.value)
        console.log(num)
      }

    return (
        <div className="numbergen-container">
            <div className="form-div">
            <form>
                <label htmlFor="text">Enter number </label>
                <input id="text" type="number" min="1" max="99" onChange={onTextChange}/>
            </form>
            </div>
            <p>{data}</p>
        </div>
    )
}

export default RandomNumFact
