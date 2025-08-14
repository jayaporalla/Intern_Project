const solution = require('./solution');

function assertEqualObjects(obj1, obj2, testName) {
    let keys1 = Object.keys(obj1).sort();
    let keys2 = Object.keys(obj2).sort();
    if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
        console.error(`❌ ${testName} - Keys mismatch`);
        process.exit(1);
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            console.error(`❌ ${testName} - ${key}: got ${obj1[key]}, expected ${obj2[key]}`);
            process.exit(1);
        }
    }
    console.log(`✅ ${testName} passed`);
}

// Test 1
assertEqualObjects(
    solution({
        '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8,
        '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2
    }),
    { 'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 },
    "Test 1"
);

// Test 2
assertEqualObjects(
    solution({
        '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14,
        '2020-01-06': 2, '2020-01-07': 4
    }),
    { 'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri': 10, 'Sat': 12, 'Sun': 14 },
    "Test 2"
);