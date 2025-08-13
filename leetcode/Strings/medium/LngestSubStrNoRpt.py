'''
You can find the question here:
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
'''

def lengthOfLongestSubstring(s):
  '''
  You want to start a new substring, once you see a repeated char you make that
  your new starting point, look at the length and then see if that is the
  longest substring so far.

  I'd say you can use a hashmap or set, it's a sliding window problem
  '''
  subseq = {}
  max_len = 0
  start = 0 #start of current window
  for index, char in enumerate(s):
    if char in subseq and subseq[char] >= start:
      # Move start just past the last occurence
      start = subseq[char] + 1
    subseq[char] = index
    max_len = max(max_len, index - start + 1)
  return max_len

print(lengthOfLongestSubstring('pwwkew'))
