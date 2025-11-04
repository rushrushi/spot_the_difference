let scoreDisplay = document.querySelector('.score')
let score  = 0
const victory = document.getElementById('victory')
const point = document.getElementById('point')
victory.volume = 0.8

fetch("data.json")
    .then(response => response.json())
    .then(puzzle => {
        const differences = puzzle.differences
        const containers = document.querySelectorAll(".images");
        const imgs = document.querySelectorAll(".images img");

        imgs[0].src = puzzle.image1;
        imgs[1].src = puzzle.image2;

        imgs.forEach(img => {
            img.addEventListener("click", (event) => {
                
                const rect = img.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                differences.forEach(diff => {
                    if (
                        x >= diff.left &&
                        x <= diff.left + diff.width &&
                        y >= diff.top &&
                        y <= diff.top + diff.height
                    ) {
                        point.currentTime = 0
                        point.play()
                        score = score + 1
                        scoreDisplay.textContent = "score :" + score
                        containers.forEach(container => {
                            const existing = container.querySelector(
                                `.spot[top='${diff.top}'][left='${diff.left}']`
                            );
                            if (existing) return;

                            const spot = document.createElement("div");
                            spot.classList.add("spot");
                            spot.style.top = `${diff.top}px`;
                            spot.style.left = `${diff.left}px`;
                            spot.style.width = `${diff.width}px`;
                            spot.style.height = `${diff.height}px`;
                            container.appendChild(spot);

                            if (score == differences.length) {
                                victory.play()
                                setTimeout(() => {
                                    alert("You've WON!!")
                                    score = 0;
                                    document.querySelector(".score").textContent = `Score: ${score}`;

                                    document.querySelectorAll(".spot").forEach(spot => spot.remove());
                                }, 500)
                            }
                        });
                    }
                });
            });
        });
    })
    .catch(err => console.error("Error loading puzzle:", err));