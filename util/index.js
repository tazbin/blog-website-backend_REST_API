getCurretDate = () => {
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    const todayDate = `${da} ${mo} ${ye}`;
    return todayDate;
}

makeObjectSelected = (obj, props) => {
    let newObj = {};

    props.forEach(p => {
        newObj[p] = obj[p];
    });
    return newObj;
}

makeObjectExcept = (obj, props) => {
    let newObj = {};
    let hasPorp = false;
    
    for (const property in obj) {
        hasPorp = false;

        props.forEach(p => {
            if( property == p ) {
                hasPorp = true;
            }
        });

        if( !hasPorp ) {
            newObj[property] = obj[property];
        }
    }

    return newObj;
}

// exports
module.exports = {
    getCurretDate,
    makeObjectSelected,
    makeObjectExcept
}