

let menuList = document.getElementsByClassName("menuList")[0];
let menuicon = document.querySelector(".menuicon");
menuList.style.top = "-270px";

function menuIcon() {
    if (menuList.style.top == "-270px") {
        menuList.style.top = "50px";
        menuicon.style.color = "#c778dd";



    } else {
        menuList.style.top = "-270px";
        menuicon.style.color = "#fff";

    }
}



var typed = new Typed('#typed', {
    strings: ["Programmer", "Developer", "Engineer", "Designer", "Application Developer", "Architect"],
    typespeed: 150,
    backspeed: 150,
    loop: true,
});






let spark = (event) => {
    let i = document.createElement('i');
    i.style.left = event.pageX + 'px';
    i.style.top = event.pageY + 'px';

    i.style.scale = `${Math.random() * 1 + 1}`

    i.style.setProperty('--x', getTrangzationValue());
    i.style.setProperty('--y', getTrangzationValue());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 1000);

}

let getTrangzationValue = () => {
    return `${Math.random() * 400 - 200}px`;
}

document.addEventListener("mousemove", spark);




// --------------------form sumition-------------------

function submitDeta(){
    let formInfo = {
        name: document.querySelector("#form-name").value,
        email: document.querySelector("#form-email").value,
        number: document.querySelector("#form-number").value,
        subject: document.querySelector("#form-subject").value,
        message: document.querySelector("#form-message").value,
    }

    for (let i = 0; i < 1; i++) {
        if (i < formInfo.name.length) {
            emailjs.send("service_h55snre", "template_ho17jeq", formInfo).then(
                alert("✅ Thank you! Your message has been sent successfully. I’ll get back to you soon.")
            );
        }
    }

}




