const my_array = [3, 7, 5];

function add_array_elements() {
    let a = my_array[0];
    let b = my_array[1];
    let c = my_array[2];

    let array_sum = a + b + c;
    return array_sum;


}

const call_to_function = add_array_elements();

console.log(call_to_function);