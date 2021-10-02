import getUniqueId from "../utils/getUniqueId";
import render from "../utils/render";

const componentId = getUniqueId();

const onLoad = (props = {}) => {
}

const styles = () => `
  .${componentId} {
    
  }
`;

const AddTradeForm = (props = {}) => {
  return `
    <form>
      <div class="mb-3">
        <label for="ticker" class="form-label">Ticker</label>
        <input type="text" class="form-control" id="ticker" name="ticker" aria-describedby="tickerHelp" placeholder="AAPL" required />
        <div id="tickerHelp" class="form-text">i.e., "AAPL" or "TSLA"</div>
      </div>
      <div class="mb-3">
        <label for="organization" class="form-label">Organization</label>
        <input type="text" class="form-control" id="organization" name="organization" aria-describedby="organizationHelp" placeholder="Apple Inc." required />
        <div id="organizationHelp" class="form-text">i.e., "Apple Inc."</div>
      </div>

      <div class="mb-3">
        <label for="tickerSelect" class="form-label">Ticker</label>
        <select class="form-select" id="tickerSelect" name="tickerSelect" aria-label="Select Ticker" required>
          <option selected>Choose Ticker</option>
          <option value="AAPL">
            <strong>AAPL:</strong> 
            <i>Apple Inc.</i>
          </option>
          <option value="TSLA">
            <strong>TSLA:</strong>  
            <i>Tesla Inc.</i>
          </option>
          <option value="GOOGL">
            <strong>GOOGL:</strong>  
            <i>Alphabet Inc Class A</i>
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="numberOfShares" class="form-label">Number of Shares</label>
        <input type="range" class="form-range" name="numberOfShares" step="1" min="1" max="10" id="numberOfShares" required />
        <div class="range-label">
          <span class="label">1</span>
        </div>
      </div>

      <div class="mb-3">
        <label for="openingPrice" class="form-label">Opening Price</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">$</span>
          <input type="number" class="form-control" id="openingPrice" placeholder="10.50" aria-label="Opening Price" aria-describedby="opening-price" required />
        </div>
      </div>

      <div class="mb-3">
        <label for="closingPrice" class="form-label">Closing Price</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">$</span>
          <input type="number" name="openingPrice" class="form-control" id="closingPrice" placeholder="10.50" aria-label="Closing Price" aria-describedby="closing-price" required />
        </div>
      </div>

      <div class="mb-3">
        <label for="stopLoss" class="form-label">Stop Loss</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">$</span>
          <input type="number" name="closingPrice" class="form-control" id="stopLoss" placeholder="10.50" aria-label="Stop Loss" aria-describedby="stop-loss" required />
        </div>
      </div>

      <div class="mb-3">
        <label for="takeProfit" class="form-label">Take Profit</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">$</span>
          <input type="number" name="takeProfit" class="form-control" id="takeProfit" placeholder="10.50" aria-label="Take Profit" aria-describedby="take-profit" required />
        </div>
      </div>

      <div class="mb-3">
        <label for="notes" name="notes" class="form-label">Notes</label>
        <textarea class="form-control" id="notes" rows="3"></textarea>
      </div>
    </form>
  `
};

export default (props) => render(
  props, 
  componentId, 
  AddTradeForm, 
  styles, 
  onLoad,
  null,
);
