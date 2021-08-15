let upper_case = document.getElementById("upper-case");
let lower_case = document.getElementById("lower-case");
let proper_case = document.getElementById("proper-case");
let sentence_case = document.getElementById("sentence-case");
let save_text_file = document.getElementById("save-text-file");
let text = document.querySelector("textarea");


upper_case.addEventListener('click',function (){
    text.value = text.value.toUpperCase();
});

lower_case.addEventListener('click',function (){
    text.value = text.value.toLowerCase();
});

proper_case.addEventListener('click',function (){

    let words = text.value.split(" ");
    upperFirst(words);
    text.value = words.join(" ");
});

sentence_case.addEventListener('click',function (){

    let words = text.value.split(/\. /);
    console.log(words);
    upperFirst(words);
    text.value = words.join(". ");
});

function upperFirst(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    }
}

save_text_file.addEventListener('click',function (){

    download("text.txt",text.value);
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
