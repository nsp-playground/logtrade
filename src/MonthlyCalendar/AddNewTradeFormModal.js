import React, { Component } from 'react';
import { getUniqueId } from '../utils';

class AddNewTradeFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: '',
      numberOfShares: 1,
      openingPrice: '0.00',
      closingPrice: '0.00',
      stopLoss: '0.00',
      takeProfit: '0.00',
      notes: '',
      tradeType: 'long',
      vwap: 'under',
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    e.preventDefault();
    const { name, value } = e?.target || {};

    if (name === 'ticker') {
      this.setState({ [name]: value.trim().toUpperCase() })
    } else if (name === 'tradeType') {
      this.setState({ [name]: value.trim().toLowerCase() })
    } else if (name === 'numberOfShares') {
      this.setState({ [name]: parseInt(value) })
    } else {
      this.setState({ [name]: value });
    }
  }
 
  onFormSubmit(e) {
    e.preventDefault();
    const newTradeLog = {
      ticker: this.state.ticker,
      numberOfShares: this.state.numberOfShares,
      openingPrice: this.state.openingPrice,
      closingPrice: this.state.closingPrice,
      stopLoss: this.state.stopLoss,
      takeProfit: this.state.takeProfit,
      notes: this.state.notes,
      tradeType: this.state.tradeType,
      vwap: this.state.vwap,

      date: this.props.activeDateDate,
      month: this.props.activeMonth, 
      year: this.props.activeYear, 

      tradeId: getUniqueId(),
    }

    console.log({ newTradeLog });
    this.props.onCreateNewTradeLog(newTradeLog);
  }

  render() {
    const { activeDateDate, activeMonth, activeYear, onClose, newTradeLogError } = this.props;

    return (
      <div className="AddNewTradeFormModal fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          --> */}
          <div 
          className={`fixed inset-0 bg-gray-500 bg-opacity-75`} aria-hidden="true"></div>

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          {/* <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          --> */}
          <form onSubmit={this.onFormSubmit} className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}>
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="w-full">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  {/* <div className="flex flex-wrap justify-between"> */}
                  <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-2" id="modal-title">
                    Add Trade
                  </h3>
                  <p className="text-sm text-gray-400">{activeMonth} {activeDateDate}, {activeYear}</p>
                  
                  <div className="mt-2">
                    <div className="w-full my-5">

                        {newTradeLogError !== null && (
                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Oops! </strong>
                            <span className="block sm:inline">{newTradeLogError}</span>
                          </div>
                        )}

                  

                        {/* <div className="flex flex-col my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="ticker">
                            Ticker
                          </label>
                          <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                              <option defaultChecked>Choose a ticker</option>
                              <option>AAPL: Apple Inc.</option>
                              <option>GOOGL: Google Inc.</option>
                              <option>TSLA: Tesla Inc.</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                        </div> */}

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="Ticker">
                            Ticker
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            {/* <span className="inline-flex items-center px-3 rounded-l-md bg-gray-100 text-gray-500 text-sm">
                              $
                            </span> */}
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={this.state.ticker} onChange={this.onInputChange} name="ticker" id="ticker" type="text" placeholder="AAPL" required />
                          </div>
                        </div>


                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="number-of-shares">
                            Number of Shares
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            {/* <span className="inline-flex items-center px-3 rounded-l-md bg-gray-100 text-gray-500 text-sm">
                              $
                            </span> */}
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={this.state.numberOfShares} onChange={this.onInputChange} name="numberOfShares" id="number-of-shares" type="number" min="1" step="1" placeholder="2" required />
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="closing-price">
                            Trade Type
                          </label>
                          <div className="mt-1 flex rounded-md">

                            <div className="px-2">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  value="long" 
                                  onChange={this.onInputChange}  
                                  className="form-radio" 
                                  name="tradeType" 
                                  checked={this.state.tradeType === 'long'}
                                />
                                <span className="ml-2">Long</span>
                              </label>
                            </div>
                            <div className="px-2">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  value="short" 
                                  onChange={this.onInputChange}  
                                  className="form-radio" 
                                  name="tradeType" 
                                  checked={this.state.tradeType === 'short'}
                                />
                                <span className="ml-2">Short</span>
                              </label>
                            </div>

                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="opening-price">
                            Opening Price
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md bg-gray-100 text-gray-500 text-sm">
                              $
                            </span>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={this.state.openingPrice} onChange={this.onInputChange} name="openingPrice" id="opening-price" type="number" placeholder="10.95" min="0.01" step="0.01" required />
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="closing-price">
                            Closing Price
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md bg-gray-100 text-gray-500 text-sm">
                              $
                            </span>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={this.state.closingPrice} onChange={this.onInputChange} name="closingPrice" id="closing-price" type="number" placeholder="10.95" min="0.01" step="0.01" required />
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="stop-loss">
                            Stop Loss
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md bg-gray-100 text-gray-500 text-sm">
                              $
                            </span>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={this.state.stopLoss} onChange={this.onInputChange} name="stopLoss" id="stop-loss" type="number" placeholder="9.95" min="0.01" step="0.01" required />
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="take-profit">
                            Take Profit
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md bg-gray-100 text-gray-500 text-sm">
                              $
                            </span>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={this.state.takeProfit} onChange={this.onInputChange} name="takeProfit" id="take-profit" type="number" placeholder="15.95" min="0.01" step="0.01" required />
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center my-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" for="closing-price">
                            VWAP
                          </label>
                          <div className="mt-1 flex rounded-md">
                            <div className="px-2">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  value="under" 
                                  onChange={this.onInputChange}  
                                  className="form-radio" 
                                  name="vwap" 
                                  checked={this.state.vwap === 'under'}
                                />
                                <span className="ml-2">Under</span>
                              </label>
                            </div>
                            <div className="px-2">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  value="over" 
                                  onChange={this.onInputChange}  
                                  className="form-radio" 
                                  name="vwap" 
                                  checked={this.state.vwap === 'over'}
                                />
                                <span className="ml-2">Over</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col mt-5 mb-3">
                          <label for="notes" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2">Notes</label>
                          <textarea id="notes" value={this.state.notes} onChange={this.onInputChange} name="notes" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="4"></textarea>
                        </div>

                        
                  
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                Create Trade
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default AddNewTradeFormModal;