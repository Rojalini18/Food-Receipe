function navbar(){
    return `<nav>
            <div><a href="index.html">Foods<sub>Recipe</sub></a></div>
            <div>
                <input type="text" id="input_search" placeholder="search food...">
                <button>serach</button>
                <div id="search_result"></div>
            </div>
            <div>
                <a href="recipeOfday.html">recipe of day</a>
                <a href="latest.html">latest recipe</a> 
            </div>
        </nav>
    `
}

export default navbar;