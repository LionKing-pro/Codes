const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const gun1 = document.getElementById("gun1");
const gun2 = document.getElementById("gun2");
const health1 = document.getElementById("health1");
const health2 = document.getElementById("health2");

let player1Health = 100;
let player2Health = 100;

// Weapons: pistol (default) and machine gun
const weapons = {
    pistol: { damage: 10, fireRate: 500 },
    machineGun: { damage: 5, fireRate: 200 }
};

let player1Weapon = "pistol";
let player2Weapon = "pistol";

// Direction tracking for gun orientation
let player1Direction = "right"; // Default direction
let player2Direction = "left"; // Default direction

// Weapon switching
document.addEventListener("keydown", (e) => {
    if (e.key === "q") player1Weapon = player1Weapon === "pistol" ? "machineGun" : "pistol";
    if (e.key === "/") player2Weapon = player2Weapon === "pistol" ? "machineGun" : "pistol";
});

// Player controls
document.addEventListener("keydown", (e) => {
    // Player 1
    if (e.key === "a") movePlayer(player1, gun1, -20, 0, "left");
    if (e.key === "d") movePlayer(player1, gun1, 20, 0, "right");
    if (e.key === "w") movePlayer(player1, gun1, 0, -20, "up");
    if (e.key === "s") movePlayer(player1, gun1, 0, 20, "down");
    if (e.key === " ") shoot(player1, gun1, player1Direction, player1Weapon); // Space to shoot

    // Player 2
    if (e.key === "ArrowLeft") movePlayer(player2, gun2, -20, 0, "left");
    if (e.key === "ArrowRight") movePlayer(player2, gun2, 20, 0, "right");
    if (e.key === "ArrowUp") movePlayer(player2, gun2, 0, -20, "up");
    if (e.key === "ArrowDown") movePlayer(player2, gun2, 0, 20, "down");
    if (e.key === "Enter") shoot(player2, gun2, player2Direction, player2Weapon); // Enter to shoot
});

// Move player and gun
function movePlayer(player, gun, dx, dy, direction) {
    const newLeft = player.offsetLeft + dx;
    const newTop = player.offsetTop + dy;

    // Ensure player stays within game boundaries
    if (newLeft >= 0 && newLeft <= window.innerWidth - 50) {
        player.style.left = newLeft + "px";
    }
    if (newTop >= 0 && newTop <= window.innerHeight - 50) {
        player.style.top = newTop + "px";
    }

    // Update gun orientation and position
    switch (direction) {
        case "left":
            gun.style.left = "-30px";
            gun.style.top = "20px";
            break;
        case "right":
            gun.style.left = "50px";
            gun.style.top = "20px";
            break;
        case "up":
            gun.style.left = "10px";
            gun.style.top = "-10px";
            break;
        case "down":
            gun.style.left = "10px";
            gun.style.top = "50px";
            break;
    }

    // Update player's current direction
    if (player === player1) player1Direction = direction;
    if (player === player2) player2Direction = direction;
}

// Shoot bullets
function shoot(player, gun, direction, weapon) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.width = "10px";
    bullet.style.height = "10px";
    bullet.style.backgroundColor = "yellow";
    bullet.style.position = "absolute";
    bullet.style.left = player.offsetLeft + 20 + "px"; // Center the bullet horizontally
    bullet.style.top = player.offsetTop + 20 + "px"; // Center the bullet vertically
    document.getElementById("game-container").appendChild(bullet);

    const interval = setInterval(() => {
        switch (direction) {
            case "left":
                bullet.style.left = bullet.offsetLeft - 10 + "px";
                break;
            case "right":
                bullet.style.left = bullet.offsetLeft + 10 + "px";
                break;
            case "up":
                bullet.style.top = bullet.offsetTop - 10 + "px";
                break;
            case "down":
                bullet.style.top = bullet.offsetTop + 10 + "px";
                break;
        }

        // Check collision
        if (checkCollision(bullet, player1) && player !== player1) {
            player1Health -= weapons[weapon].damage;
            health1.innerText = `Player 1: ${player1Health}`;
            resetBullet(bullet, interval);
            if (player1Health <= 0) endGame("Player 2 Wins!");
        }
        if (checkCollision(bullet, player2) && player !== player2) {
            player2Health -= weapons[weapon].damage;
            health2.innerText = `Player 2: ${player2Health}`;
            resetBullet(bullet, interval);
            if (player2Health <= 0) endGame("Player 1 Wins!");
        }

        // Remove bullet if out of bounds
        if (
            bullet.offsetLeft < 0 ||
            bullet.offsetLeft > window.innerWidth ||
            bullet.offsetTop < 0 ||
            bullet.offsetTop > window.innerHeight
        ) {
            resetBullet(bullet, interval);
        }
    }, 50);
}

// Reset bullet
function resetBullet(bullet, interval) {
    bullet.remove();
    clearInterval(interval);
}

// Check collision
function checkCollision(bullet, player) {
    const bulletRect = bullet.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    return !(
        bulletRect.right < playerRect.left ||
        bulletRect.left > playerRect.right ||
        bulletRect.bottom < playerRect.top ||
        bulletRect.top > playerRect.bottom
    );
}

// End game
function endGame(message) {
    alert(message);
    location.reload();
}