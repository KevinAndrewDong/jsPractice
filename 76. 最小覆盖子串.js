/*
76. 最小覆盖子串
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

 */

var minWindow = function(s, t) {
    let lent=t.length;
    let map=new Map();
    for(var i=0;i<lent;i++){
        map.set(t[i],map.has(t[i]) ? map.get(t[i])+1 : 1);
    }
    let l=0,r=0;
    let lens=s.length;
    let type=map.size;
    var ans='';
    while(r<lens){
        if(map.has(s[r])){
            map.set(s[r],map.get(s[r])-1);
            if(map.get(s[r])===0){
                type--;
            }
        }
        while(type===0){
            var temp=s.slice(l,r+1);
            if(ans == '' || ans.length > temp.length){
                ans = temp;
            }
            if(map.has(s[l])){
                map.set(s[l],map.get(s[l])+1);
                if(map.get(s[l])===1){
                    type++;
                }
            }
            l++;
        }
        r++;
    }
    return ans;
};