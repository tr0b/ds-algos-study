package main

func main() {
	twoSum([]int{1, 2, 3, 6, 7, 8, 13}, 15)
}

func twoSum(nums []int, target int) []int {
	var cache = map[int]int{}
	for i, num := range nums {
		if val, ok := cache[num]; ok {
			return []int{val, i}
		}

		cache[target-num] = i
	}

	return []int{}
}
