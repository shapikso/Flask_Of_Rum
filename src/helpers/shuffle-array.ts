export const shuffleArray = <T>(array: T[]) => {
    let currentIndex = array.length;
    let newArr = [...array];

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [newArr[currentIndex], newArr[randomIndex]] = [
            newArr[randomIndex], newArr[currentIndex]];
    }

    return newArr;
}

