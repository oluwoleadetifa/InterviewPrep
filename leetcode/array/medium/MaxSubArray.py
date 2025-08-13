'''
You can find the question here 
https://leetcode.com/problems/maximum-subarray/
'''

def maxSubArray(nums):
  '''
  This looks like another sliding window problem but at this point,
  I just assume lol. 
  first things first, brute force method.
  if you brute force is, you will get a time complexity of O(n^3)
  max_sum = nums[0]
  for i in range(len(nums)): 
    for j in range(i, len(nums)):
      max_sum = max(sum(nums[i:j]), max_sum)
  but we want to do better than that. I NEED IT!!!!! ooggllleeee booogggllleeeeeee
  it is a sliding window problem that means our right pointer will be moving while 
  our left pointer only moves under certain conditions. This makes our work O(n)
  we will start max sum as our first number and then we will calculate our current sum
  if our current sum is greater than max sum, we will update max sum. if our current sum
  is less than 0, we will reset our current sum to 0 why? because max sum won't get any better
  if our current sum is negative. imagine your current sum is 
  -10 and your max_sum is 5,
  it is better to make current sum 0 even if next number is 10 because 10-10 is 0 which is not better than 5
  so we will keep moving our right pointer and update max sum if necessary.
  '''
  max_sum = nums[0]
  current_sum = 0
  for num in nums:
    if current_sum < 0:
      current_sum = 0
    current_sum += num
    max_sum = max(max_sum, current_sum)
  return max_sum
    