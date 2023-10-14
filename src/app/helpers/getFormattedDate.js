export const formattedDate = (options) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate
}