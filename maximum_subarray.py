class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return nums[0]
        max_sum = -10**9
        curr_sum = 0
        for value in nums:
            if curr_sum < 0:
                curr_sum = 0
            curr_sum+=value
            max_sum = max(max_sum, curr_sum)
        return max_sum