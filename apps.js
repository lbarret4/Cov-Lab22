$(document).ready(function () {
    $div1 = $('.results');
    $div2 = $('.results2');
    let num1 = [6, 2, 2, 4, 3, 98, 2, 50, 40, 32]
    let [a, b, ...num2] = num1;
    num2 = [1, 1, ...num2];

    mathOps($div1, num1);
    mathOps($div2, num2);

    function mathOps($d, num) {
        slowMath.add(num[0], num[1])
            .then(result => {
                console.log(result);
                $d.append(`<p>$Add (${num[0]} + ${num[1]}): ${result}</p>`);
                return slowMath.multiply(result, num[2]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Multiply by ${num[2]}:  ${result}</p>`);
                return slowMath.divide(result, num[3]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Divide by ${num[3]}: ${result}</p>`);
                return slowMath.subtract(result, num[4]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Subtract by ${num[4]}: ${result}</p>`);
                return slowMath.add(result, num[5]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Add by ${num[5]}: ${result}</p>`);
                return slowMath.remainder(result, num[6]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Remainder by ${num[6]}: ${result}</p>`);
                return slowMath.multiply(result, num[7]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Multiply by ${num[7]}: ${result}</p>`);
                return slowMath.remainder(result, num[8]);
            }).then(result => {
                console.log(result);
                $d.append(`<p>Remainder by ${num[8]}: ${result}</p>`);
                return slowMath.add(result, num[9]);
            }).then(result => {
                $d.append(`<p>Add by ${num[9]}: ${result}</p>`);
                console.log(`The final result is ${result}.`);
                $d.append(`<p>The final result is ${result}.</p>`);
            })
            .catch(er => {

                $(`<p>${er}.</p>`).appendTo($d).css('color', 'red');
                console.log(er);
            });


    }

});