const img = document.querySelector("#barcode")
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const codeType = document.getElementById("");
const format = document.getElementById("format");

function generate(val) {

    JsBarcode(img, input.value, {
        format: "CODE128",
        // height: 10,
        // width: 20,
        displayValue: true,
        font: "monospace",
        fontSize: 16,
        textPosition: "bottom",
        textAlign: "center"
    });

}

function reveal() {
    img.className = "revealed";
}


// btn.addEventListener('click', generate, changeText);
btn.addEventListener('click', () => {
    generate();
    reveal();
});