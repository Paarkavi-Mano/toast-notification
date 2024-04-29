let toastBox = document.getElementById("toastBox");


 
 
 




function successMessage(){
   let toast = document.createElement("div");
   let toastText = document.createElement("p");
   let icon = document.createElement("i");
   icon.classList.add("fa-solid", "fa-circle-check", "success-icon");
   
   toast.classList.add("toast");
   
   toastText.textContent = 'Successfully submitted';
   toast.appendChild(icon);
   toast.appendChild(toastText);
   toastBox.appendChild(toast);

   setTimeout(()=>{
      toast.remove();
   },6000);
}

function errorMessage(){
    let toast = document.createElement("div");
    let toastText = document.createElement("p");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-xmark", "error-icon");
    
    toast.classList.add("toast");
    
    toastText.textContent = 'Please fix the error!';
    toast.appendChild(icon);
    toast.appendChild(toastText);
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
     },6000);
 }

 function invalidMessage(){
    let toast = document.createElement("div");
    let toastText = document.createElement("p");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-exclamation", "invalid-icon");
    
    toast.classList.add("toast");
    
    toastText.textContent = 'Invalid input, check again';
    toast.appendChild(icon);
    toast.appendChild(toastText);
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
     },6000);
 }