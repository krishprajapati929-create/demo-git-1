#                                                            sub array

# nums = [-2,1,-3,4,-1,2,1,-5,4]
# n = len(nums)
# maxsum = nums[0]
# for i in range(0,n):
#     for j in range(i,n):
#         sublistsum=0
#         for x in range(i,j+1):
#             sublistsum = sublistsum+nums[x]
#         if sublistsum>maxsum:
#             maxsum=sublistsum
# print(maxsum)

#                                                      remove duplicates in a list
# a = "krishkk"
# n = len(a)
# res=[]
# for i in range(n):
#     if a[i] in res:
#         continue
#     else:
#         res.append(a[i])
# print(res)
#                                                        passcol triangle 

numrows = 5
result=[]
for i in range(numrows):
    row = [None for _ in range(i+1)]
    row[0] ,row[-1] = 1,1
    for j in range(1 ,len(row)-1):
        row[j] = result[i-1][j-1]+result[i-1][j]
    result.append(row)
print(result)

