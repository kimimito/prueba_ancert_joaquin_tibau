import "./styles.css";
import { dubbed } from "./challenge";

var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <h1>Unique Element Challenge</h1>
  <div class="content">
    <div class="content-left">
      <h2>Target</h2>
      <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

      <h2>Considerations</h2>
      <ul>
        <li>Values are duplicated only twice.</li>
        <li>There is only one non duplicate value.</li>
        <li>The non duplicate value can be placed anywhere on the array.</li>
        <li>The result must be an integer.</li>
      </ul>
    </div>
    
    <div class="content-rigth">
      <div class="data">
        <h2>Test Data</h2>
        <div>${arrayTest}</div>
      </div>
      <div class="content-results">  
        <div class="results"> 
          <h2>Expected result</h2>
          <div>4</div>
        </div>
        <div class="your-results">
          <h2>Your Result</h2>
          <div>${dubbed(arrayTest)}</div>
        </div>
      </div>
    </div>
  </div>
`;
