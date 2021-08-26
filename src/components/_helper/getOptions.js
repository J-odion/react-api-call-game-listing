// THIS FUNCTION RETURNS A NEW ARRAY WITHOUT A DUPLICATE OPTION

/* 

    USING ONE SINGLE FUNCTION AS HELPER FUNCTION ISN'T WORKING AS INTENDED

*/ 

// THIS FUNCTION RETURN GROUPS WITHOUT DUPLICATION

export const getGroupOption = (arrayOfObjects) =>{
    let getOption = arrayOfObjects?.map((object) => object.Group);
    let removeDuplicateOptions = arrayOfObjects?.filter(({Group}, index) => !getOption.includes(Group, index + 1));

    return removeDuplicateOptions;
}


// THIS FUNCTION RETURN LEVELS WITHOUT DUPLICATION
export const getLevelOption = (arrayOfObjects) =>{
    let getOption = arrayOfObjects?.map((object) => object.Level);
    let removeDuplicateOptions = arrayOfObjects?.filter(({Level}, index) => !getOption.includes(Level, index + 1));

    return removeDuplicateOptions;
}