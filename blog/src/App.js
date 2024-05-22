//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import pokemonResponseJson from './pokemonResponseJson.json'
import './App.css';

function App() {
  var RedStyle =  "red"
  let [글제목, b] = useState(['영혼','소프트웨어','차이점']);
  let number = [1,2];
  let [따봉, upup] = useState(0);

  //let a = number[0];
 //let bb = number[1];

 let [a, bb] = [0,1];

 function 따봉고(){
console.log(0);
 };

function ChangeMyText(){
   var newArrary = [...글제목];
   newArrary[0] = 'testANdTEst';
   newArrary[1] = '이게몰까';
   newArrary[2] = '이거구나';

   b(newArrary);

}

 useEffect(() => {
    //console.log('test1328u39487948798')
  //  fetch('http://localhost:8080/test') 
  //  .then(res => console.log('fetched'))
  //  .catch((err) => console.log('err'))
  //  .finally(() => console.log('finally'))
  console.log(pokemonResponseJson)
  }, [])
  

  return (
    <div className="App">
         <h1>Hello, HeeWon!</h1>

         <div className = 'Themalist' style = {{paddingLeft : '20px', width : '20%'}}>{글제목[0]}</div>
         <button onClick={ChangeMyText}>바꾼다 바꿔</button>
         <span onClick={따봉고}>★{따봉}</span>
         <div className = 'Themalist' style = {{paddingLeft : '20px', width : '20%'}}>{글제목[1]}</div>
         <div className = 'Themalist' style = {{paddingLeft : '20px', width : '20%'}}>{글제목[2]}</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
   <button type="button" class="btn btn-outline-info">Info</button>
   <button type="button" class="btn btn-outline-light">Light</button>
   <button type="button" class="btn btn-outline-dark">Dark</button>
   <button type="button" class="btn btn-outline-dark">Dark</button>

    <div className = 'Ironside 'style={{color : 'red' }}>무릇 군자는 갈의를 입은 자와 차이가 있어야..</div>

    <div className = 'Themalist' style = {{paddingLeft : '20px', width : '20%'}}>리스트다 리스트</div>
    <Modal/>
   
    </div>
  );
}

function Modal(){
  return(
    <div className="myModel">
  <h2>공손찬 왈</h2>
  <p>굿모닝</p>
  <p>그대들은 어떻게 살것인가</p>
</div>
  )
}
export default App;

