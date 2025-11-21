const $passwordInput = document.getElementById("contraseña");
const $toggleButton = document.getElementById("mostrar");

document.addEventListener("click", (e) => {
    

    if (e.target === $toggleButton) {
        
        if ($passwordInput.type === "password") {
            
            $passwordInput.type = "text";
            $toggleButton.value = "🙈";
        } else {
            
            $passwordInput.type = "password";
            $toggleButton.value = "👁️";
        }
    }
});