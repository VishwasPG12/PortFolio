document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("skills_button").onclick = () => {
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    };
    document.getElementById("socials_button").onclick = () => {
        document.getElementById("socials").scrollIntoView({ behavior: "smooth" });
    };
    document.getElementById("contact_button").onclick = () => {
        document.getElementById("row").scrollIntoView({ behavior: "smooth" });
    };

    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove("active");
            if (i === index) item.classList.add("active");
        });
    }

    document.getElementById("prev").onclick = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    };

    document.getElementById("next").onclick = () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    };

    showItem(currentIndex);
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }, 3000);
    
});
