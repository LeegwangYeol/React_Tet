//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  var RedStyle =  "red"
  let [글제목, b] = useState('영혼과 소프트웨어와의 차이점');

  return (
    <div className="App">
         <h1>Hello, HeeWon!</h1>
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

    <div className = 'Ironside 'style={{color : 'red' }}>무릇 군자는 갈의를 입은 자와 차이가 있어야..</div>

    <div className = 'Themalist' style = {{paddingLeft : '20px', width : '20%'}}>리스트다 리스트</div>
    <div className = 'Themalist' style = {{paddingLeft : '20px', width : '20%'}}>{글제목}</div>

    </div>
  );
}

export default App;

