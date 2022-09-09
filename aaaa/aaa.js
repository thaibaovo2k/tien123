var words = ["the","day","is","sunny","the","the","the","sunny","is","is"]
var k = 4
var topKFrequent = function(words, k) {
    let a = new Map()
  
    for (let i = 0; i < words.length; i++) {
      a.set(words[i], (a.get(words[i]) || 0) + 1)
    } //=> trả về 1 object với value và index
    
    let b = [...new Map(a)]
    console.log(a)
    console.log(b)
  
    b.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] > b[0] ? 1 : -1
      }//nếu cùng số lần xuất hiện thì so sánh theo bảng chữ cái
  
      return a[1] < b[1] ? 1 : -1 //số lần xuất hiện lớn hơn thì đứng trước
    })
  
    return b.slice(0, k).map((x) => x[0]) // thay giá trị từng mảng trong object thành chữ và nối lại thành 1 mảng
  };
topKFrequent(words,k);
console.log(topKFrequent(words,k))
//

var nums2 = [-1,3,5,1,4,2,-9]
var target = 6
var maxNonOverlapping = function(nums, target) {
    let result = 0
    const len = nums.length
    const total = new Array(len)
    //total là tổng từ ptu đầu đến ptu thứ i
    total[-1] = 0 
    for (const [i, val] of nums.entries()) {
        total[i] = val + total[-1 + i]
    }
    
    const set = new Set()
    set.add(0)
    for (const sum of total.values()) {
                                //total là tổng từ ptu đầu đến ptu thứ i
        const k = sum - target // xem target như 1 sum .... 
                            //sum đó là 2 số cần tìm...phần tử thứ i và i+
                            //còn k là tổng đến i-1
        if (set.has(k)) {
            result++
            set.clear() 
        }
        console.log('result',result,'k=',k,'sum=',sum,'set=',set)
        set.add(sum)
    }
    return result
};
maxNonOverlapping(nums2,target)