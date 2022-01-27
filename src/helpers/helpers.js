export const getDateFormat = (item) => {
    let formatDate = item.replace(/[A-Z][a-z]+/g, '$& ').trim(); //separate words
    formatDate = new Date(formatDate).toLocaleDateString(undefined, { dateStyle: 'long' });
    return formatDate 
}