var arr = ['1.1.1.1.1', '6', '2.3.1', '2.1.1', '6.4.3.2'];

arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    while (true) {
        const s1 = arr1[i];
        const s2 = arr2[i++];

        if (s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length;
        }

        if (s1 === s2) continue;

        return s2 > s1 ? -1 : 1;
    }
});

console.log(arr)
