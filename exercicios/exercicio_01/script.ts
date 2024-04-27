interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
    UserData: any;
};


window.UserData = {}

function isUserData(obj: unknown): boolean {
    if (obj && typeof obj === "object" && 
    ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true
    } else {
        return false
    }
}

console.log(isUserData({}))

function validJSON ( str: string) {
    try{
        JSON.parse(str)
    } catch (error) {
        return false;
    }
    
    return true;
}

function loadLocalStorage () {
    const localUserData = localStorage.getItem("UserData")
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData)
        if (isUserData(UserData)) {
            console.log(UserData)
            
            Object.entries(UserData).forEach(([key, value]) => {
                
                const input = document.getElementById(key)
                if (input instanceof HTMLInputElement) {
                    if (typeof value === "string") {
                        input.value = value;
                    }
                    console.log(value)
                    window.UserData[key] = value
                }
            });
        }
    }
}

loadLocalStorage()


function handleInput({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value
        localStorage.setItem("UserData", JSON.stringify(window.UserData))
    }
}

const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener("keyup", handleInput)