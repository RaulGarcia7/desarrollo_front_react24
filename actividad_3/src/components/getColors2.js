const getColors2 = () => {
    return ['yellow', 'red', 'blue']
    }
    const removeColorFromArray = (array, color) => {
    return array.filter(element => element !== color)
    }
    const result = removeColorFromArray(getColors2(), 'blue')


export default getColors2;