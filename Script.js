const pcard1 = document.getElementById("pcard1");
const pcard2 = document.getElementById("pcard2");
const pcard3 = document.getElementById("pcard3");
const projectimg = document.getElementById("projectimg");

const mdl = document.getElementById("model");

const model = () =>{
    mdl.classList.toggle("show");
}

const modal = document.getElementById("model");

function closeModal() {
    model()
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


pcard2.classList.toggle("red-card");


const setProduct = (card) => {
    if (card === 1) {
        pcard1.classList.add("red-card");
        pcard2.classList.remove("red-card");
        pcard3.classList.remove("red-card");

        projectimg.src='./Images/project2.jpg'
    }else if(card===2){
        pcard1.classList.remove("red-card");
        pcard2.classList.add("red-card");
        pcard3.classList.remove("red-card");
        projectimg.src='./Images/product.png'

    }else{
        pcard1.classList.remove("red-card");
        pcard2.classList.remove("red-card");
        pcard3.classList.add("red-card");
        projectimg.src='./Images/project3.jpg'

    }
}

const radios = document.querySelectorAll('input[name="position"]');


function handleRadioChange(event) {
    // Get the value of the selected radio button
    const positionValue = event.target.value;

    // Get the target element
    const targetElement = document.getElementById('slider__inner');

    // Set the left position in percentage based on the selected radio button
    targetElement.style.left = `${positionValue}%`;
}

// Attach the change event listener to each radio button
radios.forEach(radio => {
    radio.addEventListener('change', handleRadioChange);
});