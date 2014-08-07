// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var multiples = function() {
  var results = [];
  var sum = 0;

  for(var i = 0; i < 1000; i++) {
    if((i % 3 == 0) || (i % 5 == 0)) {
      results.push(i);
    }
  }

  for(var j = 0; j < results.length; j++) {
    sum += results[j];
  }

  console.log(sum);
};

// 233168