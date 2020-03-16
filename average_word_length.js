function avgWordLengthCalc(txt) {
    let spaces_counter = 0;
    let letters_counter = 0;
    let current_char;
    const letters = /^[A-Za-z]+$/;
    for (let i = 0; i < txt.length; i++) {
        current_char = txt.charAt(i);
        if (current_char === ' ') {
            spaces_counter++;
        }
        if (current_char.match(letters)){
            letters_counter++;
        }
    }
    return letters_counter / (spaces_counter + 1)
}
