const img = document.querySelector("#barcode")
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const printBtn = document.getElementById("PrintBtn");
const format = document.getElementById("format");

// const format = document.getElementById("format");

function generate(val) {

    JsBarcode(img, input.value.toUpperCase(), {
        format: "CODE128",
        // height: 10,
        // width: 20,
        displayValue: true,
        font: "monospace",
        fontSize: 16,
        textPosition: "bottom",
        textAlign: "center",
        fontOptions: "bold"
    });
};

function reveal() {
    img.className = "revealed";
    printBtn.classList.add("revealed");
};


function imagetoPrint(source) {
    return "<html><head><script>function step1(){\n" +
        "setTimeout('step2()', 10);}\n" +
        "</scri" + "pt></head><body onload='step1()'>\n" +
        "<img src='" + source + "' /></body></html>";
}

function printBarCode(source) {
    const src = document.getElementById("barcode").src;
    const url = "about:blank";
    const newWindow = window.open(url, "_new");
    newWindow.document.open();
    newWindow.document.write(imagetoPrint(src));
    newWindow.print();
};

btn.addEventListener('click', () => {
    generate();
    reveal();
});

printBtn.addEventListener('click', () => {
    imagetoPrint();
    printBarCode();
});
