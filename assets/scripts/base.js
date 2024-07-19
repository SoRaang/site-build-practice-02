const inputBirth = document.getElementById('dtBirth');
const btnCheck = document.getElementById('btnBirth');
const printResult = document.getElementById('birthCheck');

function checkBirth(dateValue) {
    let thisYear = new Date().getFullYear();
    let birthYear = new Date(dateValue).getFullYear();

    let yourAge = thisYear - birthYear;

    printResult.style = '';

    if (!!dateValue === false) {
        printResult.innerHTML = '날짜가 입력되지 않았습니다.';
        printResult.style.backgroundColor = '#a83034';
    } else if (yourAge < 0) {
        printResult.innerHTML = '아직 안 태어나셨네요';
        printResult.style.backgroundColor = '#322460';
        printResult.style.color = 'white';
    } else {
        printResult.innerHTML = yourAge + '살 이십니다!';
        printResult.style.backgroundColor = '#00a0de';
        printResult.style.color = 'white';
    }
}

btnCheck.addEventListener('click', () => checkBirth(inputBirth.value));

const timeLabel = document.getElementById('currentTime');

setInterval(() => {
    let now = new Date();

    timeLabel.innerHTML = now.toString();
}, 1000);