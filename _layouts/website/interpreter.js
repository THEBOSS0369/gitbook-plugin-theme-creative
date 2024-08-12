document.addEventListener('DOMContentLoaded', function () {
    var runButton = document.getElementById('run');
    var outputElement = document.getElementById('output');
    var codeElement = document.getElementById('code');

    runButton.addEventListener('click', function () {
        try {
            var code = codeElement.value();
            var result = eval(code);
            outputElement.textContent = result;
        } catch (error) {
            outputElement.textContent = 'Error' + error.message;
        }

    })

})