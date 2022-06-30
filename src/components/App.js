import React, {useState, useEffect} from 'react';
import Nav from './Nav';

function App() {

const [pageInfo, setPageInfo] = useState({})
const [unit1Info, setUnit1Info] = useState({})
const [unitMoreInfo, setUnitMoreInfo] = useState({})

useEffect(() => {
  fetch("https://engrain-unify.herokuapp.com", {
    headers: {
      'API-Key': '7d64ca3869544c469c3e7a586921ba37',
    },
  })
    .then((response) => {
    console.log(response, "HELLO!")
    return response.json()
})
    .then((data) => {
      setPageInfo(data.pages);
      setUnit1Info(data.area1units);
      setUnitMoreInfo(data.areamoreunits);

      console.log({data})
    });
},[]);


  return (
    <div className="Main">
      <Nav pageInfo={pageInfo}/>
    </div>
  );
}

export default App;
