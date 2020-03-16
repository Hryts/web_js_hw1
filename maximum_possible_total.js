function maxTotal(numbers) {
    numbers.sort();
    numbers = numbers.reverse();
    let res = 0;
    for (let i = 0; i < 5; i++){
        res += numbers[i];
    }
    return res;
}