const label = document.querySelectorAll('label')
const input = document.querySelectorAll('input')
const divInputs = document.querySelectorAll('.inputs')

const viewEvents = {
    moveLabel() {

        divInputs.forEach((divInput) => {
            divInput.addEventListener('click', () =>{
        
                divInput.children[0].classList.add('active')
                        
            })

            divInput.addEventListener('input', () => {

                divInput.children[0].classList.add('active')
                
            })
        })
    },

    // mudar cor da label para vermelho caso seja menor doq 3 chars
    // e mudar para verde caso seja maior
    nameLabelColor() {

        const name = input[0]
        const nameLabel = label[0]

        name.addEventListener('keyup', () => {

            if (name.value.length < 3) {

                name.style.border = '2px solid crimson'
                nameLabel.style.color = 'crimson'

            } else {

                name.style.border = '2px solid #2FDD92'
                nameLabel.style.color = '#fff'

            }
        })
    },

    passwordLabelColor() {

        const password = input[1]
        const passwordLabel = label[1]

        password.addEventListener('keyup', () => {

            if (password.value.length <= 6) {

                password.style.border = '2px solid crimson'
                passwordLabel.style.color = 'crimson'

            } else {

                password.style.border = '2px solid #2FDD92'
                passwordLabel.style.color = '#fff'

            }
        })

    }
}


// Local Storage Functions =============================================
const storage = {
    get() {
        console.log(JSON.parse(localStorage.getItem('db_user')))
    },

    set(db_user) {
        return localStorage.setItem('db_user', JSON.stringify(db_user))
    }
}

const savedUsers = []

const user = {
    getUser() {

        const btnSign = document.querySelector('#btn-sign')

        btnSign.addEventListener('click', () => {
            
            const inputName = document.querySelector('#name').value
            const inputPassword = document.querySelector('#password').value
            
            savedUsers.push({name: inputName, password: inputPassword})
            storage.set(savedUsers)
            
        })
    }
}

user.getUser()

function app() { 

    // events call
    viewEvents.moveLabel()
    viewEvents.nameLabelColor()
    viewEvents.passwordLabelColor()

}

app()

