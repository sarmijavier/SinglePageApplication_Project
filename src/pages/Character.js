const Character = () => {
    const view = `
        <div class="Character-inner">
            <article class="Chracter-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="Character-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Species:</h3>
                <h3>Origin:</h3>
                <h3>Last location:</h3>
            </article>
        </div>
    `

    return view
}

export default Character