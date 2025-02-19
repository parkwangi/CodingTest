# [S4] 요세푸스 문제 0 - 11866
[문제 링크](https://www.acmicpc.net/problem/11866)

## 분류
Stack

## 문제 설명
요세푸스 문제는 다음과 같다.

1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 1,000)

## 출력
예제와 같이 요세푸스 순열을 출력한다.

---

## 문제 리뷰
긍정적인 점
1. 문제 파악 한번에 했으며 어떤 방법을 써야할지 바로 인지했다.

문제점 
1. 너무 수학적으로 풀려했던 점
2. 문자열 자르는법 까먹음

해결점
1. 생각을 프로그래밍적으로 가지기
2. 문법 더 잘 외우기
