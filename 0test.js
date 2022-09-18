var checkDistances = function(s, distance) {
    let left = 0, right = 1;
    while (left < s.length) {
        while(s[left] !== s[right]) {
            right++;
            if (right === s.length) {
                left++;
                right = left + 1;
            }
        }
        if (distance[s.charAt(left).charCodeAt(0) - 97] !== right - left - 1) {
            return false;
        } else {
            left++;
            right = left + 1;
        }
    }
    return true;
};

console.log(checkDistances('abaccb', [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))