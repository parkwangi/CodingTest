# [S4] 카드2 - 2164
[문제 링크](https://www.acmicpc.net/problem/2164)

## 분류
Stack

## 문제 설명
N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.

이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

## 출력
첫째 줄에 남게 되는 카드의 번호를 출력한다.

---

## 문제 리뷰
긍정적인 점
1. 문제 파악 한번에 했으며 어떤 방법을 써야할지 바로 인지했다.

문제점 
1. 아직 링크드리스트로 큐 만드는법을 외우지 못했다.
2. 어떤 값이 주어졌을때 순서대로 배열을 만드는 법을 인지 못했다.

해결점
1. 조금 열심히 외워야겠다.
