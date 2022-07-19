/*
207. 课程表
你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。



示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 */
var canFinish = function(numCourses, prerequisites) {
    if (numCourses < 0) return false;
    if (prerequisites.length === 0) return true;

    //统计入度
    let degreeArr = new Array(numCourses).fill(0);
    for (let item of prerequisites) {
        degreeArr[item[0]]++;
    }

    let queue = [];
    //起点：入度为0
    for (let i = 0; i < numCourses; i++) {
        if (degreeArr[i] === 0) queue.push(i);
    }

    let ret = [];
    while (queue.length > 0) {
        let num = queue.shift();//起点放进ret
        ret.push(num);

        for (let item of prerequisites) {
            if (item[1] === num) {
                degreeArr[item[0]]--;
                //入度为0，变成起点
                if (degreeArr[item[0]] === 0) {
                    queue.push(item[0]);
                }
            }


        }
    }

    return ret.length === numCourses;

};

/*
210. 课程表 II
现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
 */

var findOrder = function(numCourses, prerequisites) {
    if (numCourses < 0) return [];
    if (prerequisites.length === 0) {
        let ans = [];
        for (let i = 0; i < numCourses; i++) {
            ans.push(i);
        }
        return ans;
    }

    //统计入度
    let degreeArr = new Array(numCourses).fill(0);
    for (let item of prerequisites) {
        degreeArr[item[0]]++;
    }

    let queue = [];
    //把起点(入度为0)放入队列
    for (let i = 0; i < numCourses; i++) {
        if (degreeArr[i] === 0) queue.push(i);
    }

    let ret = [];
    while (queue.length > 0) {
        let num = queue.shift();
        ret.push(num);//起点放进ret

        for (let item of prerequisites) {
            if (item[1] === num) {
                degreeArr[item[0]]--;
                //入度为0，变成起点
                if (degreeArr[item[0]] === 0) {
                    queue.push(item[0]);
                }
            }


        }
    }

    return ret.length === numCourses ? ret : [];
};