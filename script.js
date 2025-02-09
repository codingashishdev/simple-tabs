const tabs = document.querySelector('.tabs')
const nav_bar = document.querySelector('.nav-bar')
const first_tab = document.querySelector('#first-tab')
const second_tab = document.querySelector('#second-tab')
const third_tab = document.querySelector('#third-tab')
const fourth_tab = document.querySelector('#fourth-tab')

function defaultStage() {
    first_tab.style = "display:none;"
    second_tab.style = "display: none;"
    third_tab.style = "display:none;"
    fourth_tab.style = "display: none;"
}
defaultStage();

nav_bar.addEventListener('click', (e) => {
    e.preventDefault()
    const tab = e.target.classList.value;

    switch (tab) {
        case first_tab.id:
            first_tab.style = "display:block;"
            second_tab.style = "display: none;"
            third_tab.style = "display:none;"
            fourth_tab.style = "display: none;"
            break;

        case second_tab.id:
            first_tab.style = "display:none;"
            second_tab.style = "display:block;"
            third_tab.style = "display:none;"
            fourth_tab.style = "display: none;"
            break;

        case third_tab.id:
            first_tab.style = "display:none;"
            second_tab.style = "display: none;"
            third_tab.style = "display:block;"
            fourth_tab.style = "display: none;"
            break;

        case fourth_tab.id:
            first_tab.style = "display:none;"
            second_tab.style = "display: none;"
            third_tab.style = "display:none;"
            fourth_tab.style = "display:block;"
            break;

        default:
            break;
    }
})