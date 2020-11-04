export const rtrimNumber = (value: string) => {
    let text = value;
    let control = '';
    if (text[text.length - 1] === '0') {
        while (text[text.length - 1] === '0' || text[text.length - 1] === '.') {
            control = text[text.length - 1];
            text = text.substr(0, text.length - 1);
            if (control === '.') {
                return text;
            }
        }
    }
    return text;
};
