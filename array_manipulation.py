def arrayManipulation(n, queries):
    arr = [0]*n
    for i in queries:
        arr[i[0] - 1] += i[2]
        if i[1] < n:
            arr[i[1]] -= i[2]
    maxval = 0
    itt = 0
    print(arr)
    for q in arr:
        itt += q
        if itt > maxval:
            maxval = itt
    return maxval


n = 5
queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]

arrayManipulation(n, queries)
