function solution(D) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let dayValues = new Array(7).fill(null);

    // Step 1: Map given dates to weekdays
    for (let dateStr in D) {
        let date = new Date(dateStr);
        if (isNaN(date.getTime())) continue;
        let dayIndex = (date.getDay() + 6) % 7; // Mon=0
        if (dayValues[dayIndex] === null) dayValues[dayIndex] = 0;
        dayValues[dayIndex] += D[dateStr];
    }

    // Step 2: Interpolate blocks of missing days
    let i = 0;
    while (i < 7) {
        if (dayValues[i] === null) {
            let start = i;
            while (i < 7 && dayValues[i] === null) {
                i++;
            }
            let end = i - 1;

            // find immediate left known value
            let leftIndex = (start - 1 + 7) % 7;
            while (dayValues[leftIndex] === null) {
                leftIndex = (leftIndex - 1 + 7) % 7;
            }

            // find immediate right known value
            let rightIndex = (end + 1) % 7;
            while (dayValues[rightIndex] === null) {
                rightIndex = (rightIndex + 1) % 7;
            }

            let leftVal = dayValues[leftIndex];
            let rightVal = dayValues[rightIndex];

            let gap = (end - start + 1);
            let step = (rightVal - leftVal) / (gap + 1);

            for (let k = 1; k <= gap; k++) {
                let idx = (leftIndex + k) % 7;
                dayValues[idx] = Math.round(leftVal + step * k);
            }
        } else {
            i++;
        }
    }

    // Step 3: Output
    let result = {};
    for (let d = 0; d < 7; d++) {
        result[days[d]] = dayValues[d];
    }
    return result;
}

module.exports = solution;
