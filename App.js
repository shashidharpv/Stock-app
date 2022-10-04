const buyingPrice = document.querySelector("#buy-price");
const numOfStocks = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");

const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener('click',submitHandler);

function submitHandler(){
    var bp = Number(buyingPrice.value);
    var nos = Number(numOfStocks.value);
    var curr = Number(currentPrice.value);

    calcProfitAndLoss(bp,nos,curr);
}

function calcProfitAndLoss(buyingPrice, numOfStocks, currentPrice) {
  
  if (buyingPrice > currentPrice) {
    var loss = (buyingPrice - currentPrice) * numOfStocks;
    var lossPercent = ((loss/(buyingPrice*numOfStocks))*100).toFixed(2);

    message(`Oops, you lost ${loss} and the Loss percentage is ${lossPercent}%`);
 
  } else if (buyingPrice < currentPrice) {
    
    var profit = (currentPrice - buyingPrice) * numOfStocks; 
    var profiPercent = ((profit/(buyingPrice*numOfStocks))*100).toFixed(2);

    message(`Yay, you made a profit of ${profit} and that is ${profiPercent}% profit`);

  } else {
  
    message("Oops there is neitther profit nor loss!");
  }
}

function message(msg){
    outputBox.innerHTML = msg;
}
