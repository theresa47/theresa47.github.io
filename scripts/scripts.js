var amIHappyCat = false;

function myOnClick() {
    const imageElement = document.getElementById("cat");

    if (amIHappyCat) {
        imageElement.src = "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/Cat-Virus-Exe-Funny-Pics-123-62c2f23a1a130__700.jpg";
        amIHappyCat = false;
    } else { 
        imageElement.src = "https://i.pinimg.com/originals/4c/55/8c/4c558ca34bff6f0d3162e486d3c467d2.jpg";
        amIHappyCat = true;
    }
}