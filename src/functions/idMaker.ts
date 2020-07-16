const idMaker = (parts: Array<string | number>): string => {
    return parts.join('').replace(/[^a-zA-Z0-9.\-]/g, '').toLowerCase();
};

export default idMaker;
