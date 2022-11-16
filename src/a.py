n=int(input())
lis=list(map(int,input().split()))
maxx=0
for i in range(n):
  summ=0
  if i+5<=n:
    for j in range(i,i+5):
      summ+=lis[j]
    if summ>maxx:
      maxx=summ
print(maxx)