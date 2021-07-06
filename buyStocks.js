var maxProfit = function(prices) {
    var buyingPrice=prices[0];
    var sellingPrice=prices[0];
    var res=0;
    
    for(let i=1; i<prices.length; i++){
        if(prices[i]<buyingPrice){
            buyingPrice=prices[i];  // as you you must buy before sell, so, for specific day, buying price is also selling price.
            sellingPrice=prices[i];
        }
        if(prices[i]>buyingPrice){
            sellingPrice=prices[i]; // if price increases, that would be the selling price.
        }
        
        if(sellingPrice-buyingPrice>res)
            res=sellingPrice-buyingPrice; //track the maximum profit
    }
    
    return res;
};

console.log(maxProfit([7,1,5,3,6,4]))


//2nd Solution
var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; //or prices[0] 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]))