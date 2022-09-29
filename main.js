const sRating = document.getElementById('state-rating');
const sThanks = document.getElementById('state-thanks');

const btn = document.getElementById('submit');


// Hides form and shows thank you on clicking submit
btn.addEventListener('click', () => {
        sRating.classList.add('hide');
        sThanks.classList.remove('hide');
        radioValue();
});

const radioSelect = document.getElementsByName('rating-num');
const ratingSelect = document.getElementById('ratingSelect');


// Prints the selected radio button value to the thanks page
function radioValue() {
    for (i = 0; i < radioSelect.length; i++) {
        if(radioSelect[i].checked)
        ratingSelect.innerHTML = `You selected ${radioSelect[i].value} out of 5`;
    }
}