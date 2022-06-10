// code your solution here
let funActivity
let boringWork
function saturdayFun(activity) {
    if (typeof activity === 'undefined') {
        funActivity = 'roller-skate';
    } else funActivity = activity
    return `This Saturday, I want to ${funActivity}!`
}

function mondayWork(work) {
    if (typeof work === 'undefined') {
        boringWork = 'go to the office';
    } else boringWork = work
    return `This Monday, I will ${boringWork}.`
}

function wrapAdjective(special, adjective) {
    return `You are ${special}${adjective}${special}!`
}