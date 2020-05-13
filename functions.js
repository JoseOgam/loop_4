function session_3() {
    //Array is a colection of objects
    //A collection of objects in an array is reffered to us elements
    let arr = [1, 2, true, { a: 1, b: 3 }, "string"];

    const loop_4 = [
        "Joseph Otieno",
        "Chris Otta",
        "Mary Akinyi"

    ];

    const loop_4a = [{
        codename: "Loop 4.0",
        intake: "April/May",
        year: "2020",
        student: "loop_4"
    }]

    let l1 = arr.length; //binding length of an array to l1
    console.log(l1); //log out l1

    let element = arr[3]; // access array elements
    console.log("The third element in an array is" + element);

    console.log(arr);

    arr.push({
        company: "Lakehub",
        Address: "Okore Rd, Milimani Kisumu"
    });
    l1 = arr.length;
    console.log("The length of the new array" + l1);
    console.log("The elements of new array" + arr);
}

session_3(); //calling a function