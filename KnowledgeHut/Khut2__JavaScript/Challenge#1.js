// ------------------- Task 1: The Diagonal Sum  ---------------------- //

function spDiag(n, arr) {
    let mat = [];
    let primary = 0, secondary = 0;
    while (arr.length) mat.push(arr.splice(0, n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) primary += mat[i][j];

            if ((i + j) === (n - 1)) secondary += mat[i][j];
        }

    }
    console.log(primary + secondary)
    console.log(JSON.stringify(mat));

}

spDiag(3, [1, 2, 3,
    8, 9, 4,
    7, 6, 5])

//--------- First understand this then do it in the main assignment suggesting to rivese it again --------//

//------------------------Task 2: Pyramid of Asterisks--------------------------// 

function pyramid(n) {



    for (let i = 1; i <= n; i++) {

        let str = ' '.repeat(n - i);

        let str2 = '*'.repeat(i * 2 - 1)



        console.log(str + str2 + str);

    }

}

pyramid(5);

//--------- First understand this then do it in the main assignment suggesting to rivese it again --------//

