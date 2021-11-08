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

            if (password.value.length < 6) {

                password.style.border = '2px solid crimson'
                passwordLabel.style.color = 'crimson'

            } else {

                password.style.border = '2px solid #2FDD92'
                passwordLabel.style.color = '#fff'

            }
        })
    },

    repeatPassword() {

        const rptPassword = input[2]
        const rptPasswordLabel = label[2]

        rptPassword.addEventListener('keyup', () => {

            if (rptPassword.value.length < 6) {

                rptPassword.style.border = '2px solid crimson'
                rptPasswordLabel.style.color = 'crimson'

            } else {

                rptPassword.style.border = '2px solid #2FDD92'
                rptPasswordLabel.style.color = '#fff'

            }
        })
    }
}


// Local Storage Functions =============================================
const storage = {
    get() {
        return JSON.parse(localStorage.getItem('db_user')) || []
    },

    set(db_user) {
        return localStorage.setItem('db_user', JSON.stringify(db_user))
    }
}

console.log(storage.get())

const user = {
    savedUsers: storage.get(),

    saveUser() {
        
        const btnSign = document.querySelector('#btn-sign')
        btnSign.addEventListener('click', this.verifyPassword)
        
    },
    
    verifyPassword() {
        
        const inputName = document.querySelector('#name').value
        const inputPassword = document.querySelector('#password').value
        const inputRepeatPassword = document.querySelector('#repeat-password').value

        if ( inputPassword == inputRepeatPassword ) {

            this.savedUsers.push({name: inputName, password: inputPassword, rptPassword: inputRepeatPassword})
            console.log(this.savedUsers)
            storage.set(this.savedUsers)

        } else {

            window.alert('As senhas devem ser iguais!')

        }

    }
}


console.log(user.savedUsers)

function app() { 

    // events call
    viewEvents.moveLabel()
    viewEvents.nameLabelColor()
    viewEvents.passwordLabelColor()
    viewEvents.repeatPassword()


    // getting and setting user at localstorage
    user.saveUser()
    storage.get()
}

app()

