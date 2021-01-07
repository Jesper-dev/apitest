import React, {useEffect, useState} from 'react';
import axios from "axios";

function LoveApi() {

    const [fname, setFname] = useState("Jesper")
    const [sname, setSname] = useState("GirlofMyDreams")

    const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: `${fname}`, sname: `${sname}`},
        headers: {
          'x-rapidapi-key': '9e8ddf2821msh4c4f74e49206ee9p1302d4jsn143cd2ada6f1',
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
      };

      useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
      }, [])
      
      const onTextChangeSname = (e) =>{
          setSname(e.target.value);
      }
      const onTextChangeFname = (e) =>{
          setFname(e.target.value);
      }

    return (
        <div>
            <div id="love">
            <i class="fas fa-kiss-wink-heart"></i>
              <h1>Let's find the LOVE of your Gutenberg Life!</h1>
              <div className="name-inputs-con">
                <div className="my-name">
                  <input type="text" onChange={onTextChangeFname} />
                </div>

                <div>{fname + " <3 " + sname}</div>

                <div className="lover-name">
                  <input type="text" onChange={onTextChangeSname} />
                </div>
              </div>
            </div>
        </div>
    )
}

export default LoveApi
