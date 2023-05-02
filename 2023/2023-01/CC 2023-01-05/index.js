//Do the fibonacci sequence but do the memoization of it

const memo = {}
function fib(n){
    if(n <= 1){
        return 1
    }
    else if(memo[n]){
        return memo[n]
    }
    else{
        let result = fib(n - 1) + fib (n - 2)
        memo[n] = result
        return result
    }
}

console.log(fib(5))

