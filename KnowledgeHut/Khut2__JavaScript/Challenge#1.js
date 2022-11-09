// ------------------- Task 1: The Diagonal Sum  ---------------------- //

function diagonalSum(arr) {
    let primary = 0, secondary = 0;
    for (let row = 0; row < arr.length; row++) {
        primary += arr[row][row];
        secondary += arr[row][arr.length - row - 1];
    }
    console.log(primary + secondary);
}

diagonalSum([[2, 9, 6], [5, 2, 8], [5, 7, 9]]);

//------------------------Task 2: Pyramid of Asterisks--------------------------// 

function pyramidOfAsterisks() {

}

function pyramidOfAsterisks(n) {
    for (let i = 1; i <= n; i++) {
        let str = ' '.repeat(n - i);
        let str2 = '*'.repeat(i * 2 - 1)

        console.log(str + str2 + str);
    }
}
pyramidOfAsterisks(12);

//--------- First understand this then do it in the main assignment suggesting to rivese it again --------//


const Book = function (title, author, isbn, stock = 0, cost) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.stock = stock;
    this.cost = cost;
    this.summary = () => `${this.title} by ${this.author} (ISBN: ${this.isbn}) costs ${this.cost}`;
    this.isStockAvailable = () => stock ? 'Available at the moment' : 'not available at the moment';
    this.isAvailable = () => `${this.title} is ${this.stock}`;
};

const summary = new Book('The Design of Everyday Things', 'Don Norman', '978-0-465-05571-5', '$17.99');
console.log(summary.summary());
const isAvailable = new Book('The Design of Everyday Things', 0);



//  by Don Norman (ISBN: 978-0-465-05571-5) costs $17.99