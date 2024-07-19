const inputBirth = document.getElementById('dtBirth');
const btnCheck = document.getElementById('btnBirth');

function checkBirth(dateValue) {
    let thisYear = new Date().getFullYear();
    let birthYear = new Date(dateValue).getFullYear();

    let yourAge = thisYear - birthYear;

    if (!!dateValue === false) {
        alert('날짜가 입력되지 않았습니다.');
    } else if (yourAge < 0) {
        alert('아직 안 태어나셨네요');
    } else {
        alert(yourAge + '살 이십니다!');
    }
}

btnCheck.addEventListener('click', () => checkBirth(inputBirth.value));