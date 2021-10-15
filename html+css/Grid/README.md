# 学习笔记：
https://www.yuque.com/docs/share/1ae5ae47-2f80-4dff-a0f8-a5ea5b149077?# 《Grid 布局学习》


const nu = [0,4,5,0,3,6]
var containsDuplicate = function(nums) {
    let once = [];
    let v = nums.findIndex(item=>{
      console.log(once.includes(item))
        if(once.includes(item)){
          return true;
        }
        once.push(item)
        return false
    })
    return v > -1
};
containsDuplicate(nu)