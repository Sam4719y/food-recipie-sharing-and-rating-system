// Sample user data (for demonstration purposes)
const users = [
    {
        username: "user1",
        password: "password1"
    },
    {
        username: "user2",
        password: "password2"
    }
];

// Sample popular recipes data
const popularRecipes = [
    {
        title: "Spiced Pumpkin Waffles",
        description: "The waffles are beautifully crisp on the outside and fluffy on the inside thanks to my secret, pantry-friendly ingredients (no soggy waffles here!), and brimming with pockets of melty chocolate chips.",
        rating: "4.5 ⭐",
        image: "assets/bg2.webp"
    },
    {
        title: "Tender Pot Roast",
        description: "Pot roast, when made according to a few fundamental rules, can be a totally delicious addition to your repertoire of family meal ideas.",
        rating: "4.4 ⭐",
        image: "assets/bg3.webp"
    },
    {
        title: "Easy Dutch Apple Pie",
        description: "Sweet and tart apples piled with crunchy, crumbly brown sugar cinnamon topping and baked into a flaky pie crust.",
        rating: "4.1 ⭐",
        image: "assets/bg4.webp"
    },
    {
        title: "Roasted Butternut Squash and Shallots",
        description: "It has a sweet, nutty taste similar to that of a pumpkin. It has tan-yellow skin and orange fleshy pulp with a compartment of seeds in the blossom end.",
        rating: "4.2 ⭐",
        image: "assets/bg5.webp"
    }
];

// Handle login
const handleLogin = () => {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        alert("Login successful!");
        document.getElementById("auth-container").classList.add("hidden");
        document.getElementById("main-container").classList.remove("hidden");
    } else {
        alert("Invalid username or password.");
    }
};

// Handle signup
const handleSignUp = () => {
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose a different one.");
    } else {
        users.push({ username, password });
        alert("Sign up successful! You can now log in.");
        document.getElementById("to-login").click();
    }
};

// Handle recipe search
const searchRecipe = () => {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();

    if (searchInput === "") {
        alert("Please enter a recipe name to search.");
        return;
    }

    const foundRecipe = popularRecipes.find(recipe =>
        recipe.title.toLowerCase().includes(searchInput)
    );

    if (foundRecipe) {
        alert(`Found Recipe: ${foundRecipe.title}\nDescription: ${foundRecipe.description}\nRating: ${foundRecipe.rating}`);
    } else {
        alert("No matching recipe found.");
    }
};

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Login and signup form handlers
    document.getElementById("login-form").addEventListener("submit", e => {
        e.preventDefault();
        handleLogin();
    });

    document.getElementById("signup-form").addEventListener("submit", e => {
        e.preventDefault();
        handleSignUp();
    });

    // Toggle between login and signup
    document.getElementById("to-signup").addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("signup-container").classList.remove("hidden");
    });

    document.getElementById("to-login").addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("signup-container").classList.add("hidden");
        document.getElementById("login-container").classList.remove("hidden");
    });

    // Search button functionality
    document.querySelector(".search-button").addEventListener("click", searchRecipe);
});

