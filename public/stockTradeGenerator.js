function submitInfo(){
  // alert("Hello. Welcome to Stock Trade Generator! Click OK or CLOSE button to proceed.");
  const name = document.getElementById("name").value;
  //           prompt("What is your First Name?");
  
  const capital = document.getElementById("capital").value;
  //              prompt("Thank you " + name + ". What is your total initial capital?");
  const stockCompany1 = document.getElementById("stockCompany1").value;
  //                    prompt("What is the name or symbol of stock company 1?");
  const stock1Price = document.getElementById("stock1Price").value;
  //                  prompt("What is the current price of " + stockCompany1 + "?");
  const stockCompany2 = document.getElementById("stockCompany2").value;
  //                    prompt("What is the name or symbol of stock company 2?");
  const stock2Price = document.getElementById("stock2Price").value;
  //                  prompt("What is the current price of " + stockCompany2 + "?");
  const stockCompany3 = document.getElementById("stockCompany3").value;
  //                    prompt("What is the name or symbol of stock company 3?");
  const stock3Price = document.getElementById("stock3Price").value;
  //                  prompt("What is the current price of " + stockCompany3 + "?");
  const stockCompany4 = document.getElementById("stockCompany4").value;
  //                    prompt("What is the name or symbol of stock company 4?");
  const stock4Price = document.getElementById("stock4Price").value;
  //                  prompt("What is the current price of " + stockCompany4 + "?");
  const stockCompany5 = document.getElementById("stockCompany5").value;
  //                    prompt("What is the name or symbol of stock company 5?");
  const stock5Price = document.getElementById("stock5Price").value;
  //                  prompt("What is the current price of " + stockCompany5 + "?");
  
  document.write(`<h1 style="color:; font-size:38px; font-family:'Courier New'" align='center'>💵 $tock Trade Generator</h1>`);
  document.write(`<h2 style="color:; font-size:px; font-family:'Courier New'" align='center'>For Top 5 Best Performing Stocks Right Now</h2>`);
  
  document.write(`<p align='center'>░▒▓█ ░▒▓█▓▒░▒▓█▓▒░▒▓</p>`);
  document.write(`<p align="center"><img src="stock.jpg" width="605" height="454"></p>`);
  document.write(`<p align='center'>░▒▓█ ░▒▓█▓▒░▒▓█▓▒░▒▓</p>`);
  
  console.log(`You're total initial capital is ${capital}.`);
  document.write(`<h3 style="color:; font-size:20px; font-family:'Courier New'"><center>You're total initial capital is ${capital}.</center></h3>`);
  // document.querySelector('main').innerHTML = `<h3><center>You're total initial capital is ${capital}.</center></h3>`;
  
  console.log(`Current price for ${stockCompany1} is ${stock1Price}.`);
  document.write(`<p><center>Current price for ${stockCompany1} is ${stock1Price}.</center></p>`);
  console.log(`Current price for ${stockCompany2} is ${stock2Price}.`);
  document.write(`<p><center>Current price for ${stockCompany2} is ${stock2Price}.</center></p>`);
  console.log(`Current price for ${stockCompany3} is ${stock3Price}.`);
  document.write(`<p><center>Current price for ${stockCompany3} is ${stock3Price}.</center></p>`);
  console.log(`Current price for ${stockCompany4} is ${stock4Price}.`);
  document.write(`<p><center>Current price for ${stockCompany4} is ${stock4Price}.</center></p>`);
  console.log(`Current price for ${stockCompany5} is ${stock5Price}.`);
  document.write(`<p><center>Current price for ${stockCompany5} is ${stock5Price}.</center></p>`);
  
  const totalStockPrice = parseFloat(stock1Price) + parseFloat(stock2Price) + parseFloat(stock3Price) + parseFloat(stock4Price) + parseFloat(stock5Price);
  
  const stock1InvestAmount = (stock1Price / totalStockPrice) * capital;
  const stock2InvestAmount = (stock2Price / totalStockPrice) * capital;
  const stock3InvestAmount = (stock3Price / totalStockPrice) * capital;
  const stock4InvestAmount = (stock4Price / totalStockPrice) * capital;
  const stock5InvestAmount = (stock5Price / totalStockPrice) * capital;
  
  console.log("💻");
  document.write(`<center>💻</center>`);
  
  console.log("Amounts for Robinhood");
  document.write(`<h3 style="color:; font-size:20px; font-family:'Courier New'"><center>Amounts for Robinhood</center></h3>`);
  
  console.log(`Amount to 'BUY' for ${stockCompany1} is ${stock1InvestAmount}.`);
  document.write(`<p><i><center>Amount to 'BUY' for <b>${stockCompany1}</b> is <mark><b><u>${stock1InvestAmount}</u></b></mark>.</center></i></p>`);
  console.log(`Amount to 'BUY' for ${stockCompany2} is ${stock2InvestAmount}.`);
  document.write(`<p><i><center>Amount to 'BUY' for <b>${stockCompany2}</b> is <mark><b><u>${stock2InvestAmount}</u></b></mark>.</center></i></p>`);
  console.log(`Amount to 'BUY' for ${stockCompany3} is ${stock3InvestAmount}.`);
  document.write(`<p><i><center>Amount to 'BUY' for <b>${stockCompany3}</b> is <mark><b><u>${stock3InvestAmount}</u></b></mark>.</center></i></p>`);
  console.log(`Amount to 'BUY' for ${stockCompany4} is ${stock4InvestAmount}.`);
  document.write(`<p><i><center>Amount to 'BUY' for <b>${stockCompany4}</b> is <mark><b><u>${stock4InvestAmount}</u></b></mark>.</center></i></p>`);
  console.log(`Amount to 'BUY' for ${stockCompany5} is ${stock5InvestAmount}.`);
  document.write(`<p><i><center>Amount to 'BUY' for <b>${stockCompany5}</b> is <mark><b><u>${stock5InvestAmount}</u></b></mark>.</center></i></p>`);
  
  const shareBuy1 = Math.round(stock1InvestAmount / stock1Price);
  const shareBuy2 = Math.round(stock2InvestAmount / stock2Price);
  const shareBuy3 = Math.round(stock3InvestAmount / stock3Price);
  const shareBuy4 = Math.round(stock4InvestAmount / stock4Price);
  const shareBuy5 = Math.round(stock5InvestAmount / stock5Price);
  
  const shareBuyAverage = (shareBuy1 + shareBuy2 + shareBuy3 + shareBuy4 + shareBuy5) / 5;
  
  console.log("📲");
  document.write(`<center>📲</center>`);
  
  console.log("Shares for E*TRADE");
  document.write(`<h3 style="color:; font-size:20px; font-family:'Courier New'"><center>Shares for E*TRADE</h3></center>`);
  
  console.log(`Number of equal shares to 'BUY' for ${stockCompany1}, ${stockCompany2}, ${stockCompany3}, ${stockCompany4} and ${stockCompany5} is ${shareBuyAverage} 'each'.`);
  document.write(`<p><i><center>Number of equal shares to 'BUY' for <b>${stockCompany1}</b>, <b>${stockCompany2}</b>, <b>${stockCompany3}</b>, <b>${stockCompany4}</b> and <b>${stockCompany5}</b> is <mark><b><u>${shareBuyAverage}</u></b></mark> 'each'.</center></i></p>`);
  
  console.log(`Note that if you get a 0, that means INCALCULABLE.`);
  document.write(`<h4 style="color:; font-size:px; font-family:'Courier New'"><b><center>☞ Note that if you get a <i>0</i>, that means <i><u>INCALCULABLE</u></i>. ☜</center></b></h4>`);
  
  const totalInvestmentAmount = stock1InvestAmount + stock2InvestAmount + stock3InvestAmount + stock4InvestAmount + stock5InvestAmount;
  const totalShares = shareBuy1 + shareBuy2 + shareBuy3 + shareBuy4 + shareBuy5;
  
  const amountShares = (shareBuy1 * stock1Price) + (shareBuy2 * stock2Price) + (shareBuy3 * stock3Price) + (shareBuy4 * stock4Price) + (shareBuy5 * stock5Price);
  
  console.log("Ⰶ║ ⵈ ⵈ ⵈ ⵈ ⵈ ⵈ║Ⰶ");
  document.write(`<h3><center>Ⰶ║ ⵈ ⵈ ⵈ ⵈ ⵈ ⵈ║Ⰶ</center></h3>`);
  
  document.write(`<p align="center"><img src="horn.jpg" width="648" height="432"></p>`);
  
  console.log(`Just for checking purposes, you're total invested amount for all 5 stocks in 'Robinhood' is ${totalInvestmentAmount}.`);
  console.log(`Or, if using 'E*TRADE', then you're total invested amount for all 5 stocks is ${amountShares}.`);
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'" align="center">☝ Just for checking purposes, you're total invested amount for all 5 stocks in 'Robinhood' is ${totalInvestmentAmount} USD. Or, if using 'E*TRADE', then you're total invested amount for all 5 stocks is ${amountShares} USD.</h3>`);
  
  const stock1Percent = Math.round((stock1InvestAmount / totalInvestmentAmount) * 100);
  const stock2Percent = Math.round((stock2InvestAmount / totalInvestmentAmount) * 100);
  const stock3Percent = Math.round((stock3InvestAmount / totalInvestmentAmount) * 100);
  const stock4Percent = Math.round((stock4InvestAmount / totalInvestmentAmount) * 100);
  const stock5Percent = Math.round((stock5InvestAmount / totalInvestmentAmount) * 100);
  
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'"><center>🥧 You're slice of the pie from your 'Total Investment Capital' down below:</center></h3>`);
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'" align="center">✱ ${stockCompany1} comprises ${stock1Percent} %</h4>`);
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'" align="center">✱ ${stockCompany2} comprises ${stock2Percent} %</h4>`);
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'" align="center">✱ ${stockCompany3} comprises ${stock3Percent} %</h4>`);
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'" align="center">✱ ${stockCompany4} comprises ${stock4Percent} %</h4>`);
  document.write(`<h3 style="color:; font-size:18px; font-family:'Courier New'" align="center">✱ ${stockCompany5} comprises ${stock5Percent} %</h4>`);
  
  console.log("Good Luck! " + name + ".");
  document.write(`<h2 style="color:; font-size:px; font-family:'Courier New'"><center>Good Luck! ${name} <div class="chum">(▰˘◡˘▰)</div></center></h2>`);
  document.write(`<p align='center'><button onclick="document.location='index.html'">👋 Start Over</button></p>`);
}