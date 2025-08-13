'''
you can find the question here
https://leetcode.com/problems/two-sum/description/
'''

def twoSum(nums, target):
  '''to solve this problem in O(n) we use a hashmap
    to save the nums as keys, with their index as the values
    searching using a key in the hashmap is O(1)
    so the overall time complexity is O(n).
    Enumerate takes an iterable, and gives a tuple of the index and the value
    To better visualize what i did,
    if target is 10
    what can sum up to 10?
    1 +9, 2+8, 3+7, 4+6, 5+5
    so if I have some numbers in my hashmap, 
    my current number subtracted from my target sum should exist in my dictionary
    We were also told that we will also have one exact solution per array
    We were asked to return the indices so it makes sense to use enumerate and save 
    each number with their index
  '''
  num_dict = {}
  for num, key in enumerate(nums):
    if target - key in num_dict:
      return [num_dict[target - key], num]
    else:
      num_dict[key] = num
  return False

print(twoSum([3,2,4], 6))