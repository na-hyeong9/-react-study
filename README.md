# React 

#### 버튼 변경 동작 원리를 알아보자.

```react
<button onClick={() => {
  let copy = [...글제목]; //... <= 괄호 제거
  copy[0] = '상의 추천';
  글제목변경(copy); //소괄호 정보로 변경 , 기존 state == 신규 state의 경우 변경 안됨.
 }}>
  변경
</button>
```

✔ __state 변경 함수 동작원리__

![image-20230306200354482](README.assets/image-20230306200354482.png)

- 기존 state == 신규 state가 동일하면 변경이 되지 않는다.



✔ __array/object 특징__

- array/object 담은 변수엔 화살표만 저장된다.

![image-20230306201029963](README.assets/image-20230306201029963.png)

- ' ... ' 추가로 괄호를 제거하고 '[]'로 괄호 다시 씌워주면서 화살표가 변경된다.

![image-20230306210941979](README.assets/image-20230306210941979.png)