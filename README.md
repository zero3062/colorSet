react-redux 예제를 이용하여 사용하는 방법
========================

아래  그림과 같이 입력한 문자를 색깔을 바꾸는 colorset을 redux를 사용한 것과, react-redux(react-router-redux)를 사용하여 구현 한 코드를 설명하겠습니다.

![{0AACD671-9A0D-4D77-B7C1-5D5EB90026F7}](./src/img/{0AACD671-9A0D-4D77-B7C1-5D5EB90026F7}.png.jpg)

# 1. redux를 사용하지 않은 예제

Redux나 그 외의 모듈(react-color 제외)을 사용하지 않고, 순수 React만 사용하여 구현한 예제입니다.


## 컴포넌트 구조

컴포넌트 구조와 state 흐름은 다음과 같습니다.

![{738FB020-AC3D-432A-88F3-AB50510E5E58}](./src/img/{738FB020-AC3D-432A-88F3-AB50510E5E58}.png.jpg)

- Text 컴포넌트는 변경된 색을 텍스트에 입혀 화면에 나타내는 컴포넌트입니다. 텍스트 또한 변경됩니다.
- Option 컴포넌트는 텍스트 값을 입력받는 컴포넌트입니다.
- Picker 컴포넌트는 색을 결정하는 color-picker 라이브러리가 있는 컴포넌트입니다.

App 컴포넌트는 위 3개의 컴포넌트의 공통된 부모 컴포넌트입니다. 공통의 부모가 되기 때문에 Text에 표시되는 텍스트값과 색상값, 2개를 모두 state로 가지고 있어야 합니다. 또한 Picker 컴포넌트에서 색상을 고르거나 Option 컴포넌트에서 텍스트값을 교체할 때마다, 발생하는 이벤트를 전달 받아 Text에 표시되는 색상과 텍스트값을 state에 저장합니다.

## 설치

**$ yarn add react-router-dom**

**$ yarn add cross-env —dev**

**$ yarn add node-sass open-color classnames**

**$ yarn add react-color —save**

## 코드 구조

### src/components/Text.js

![{D7B3F05B-FED6-40D4-A389-A5A8CB2167D1}](./src/img/{D7B3F05B-FED6-40D4-A389-A5A8CB2167D1}.png.jpg)

- **7번 줄** **:** 전달받은 text에 textColor를 입혀 출력합니다.

### src/components/Option.js

![{5481DA04-D273-41B8-B146-6B1ED0743D7F}](./src/img/{5481DA04-D273-41B8-B146-6B1ED0743D7F}.png/jpg)

- **9~11번 줄 :** 사용자가 입력 시, 입력 값을 부모 컴포넌트로 넘겨줍니다.
- **16번 줄 :** 부모 컴포넌트로 받은 valuer값을 출력합니다. 또한 이벤트 핸들러를 등록합니다.

### src/components/Picker.js

![{47B4A023-0049-4452-8DC9-CFD0A319FE06}](./src/img/{47B4A023-0049-4452-8DC9-CFD0A319FE06}.png.jpg)

- **2번 줄 :** react-color 라이브러리를 가져옵니다.
- **10~12번 줄 :** 사용자가 색을 선택할 시, 선택한 값을 부모 컴포넌트로 넘겨줍니다.
- **17번 줄 :** 부모 컴포넌트로 받은 color값을 출력합니다. 또한 이벤트 핸들러를 등록합니다.

### App.js

![{422F59CD-0C27-480F-9FC3-2EA9A0E21888}](./src/img/{422F59CD-0C27-480F-9FC3-2EA9A0E21888}.png.jpg)

- **3~5번 줄 :** 사용할 컴포넌트를 import합니다.
- **17~22번 줄 :** Option에서 실행되는 이벤트 핸들러입니다. 사용자의 입력값을 state.text에 저장합니다.
- **24~28번 줄 :**  Picker에서 실행되는 이벤트 핸들러입니다. 사용자가 선택한 색상을 state.textColor에 저장합니다.
- **33번 줄 :** Text 컴포넌트를 불러옵니다. state.text를 출력하고, state.textColor로 색상을 입힐 수 있도록 textColor attribute와 text attribute를 선언해야합니다.
- **34번 줄 :** Option 컴포넌트를 불러옵니다. state.text를 보여주기 위해 value attribute를 선언하고, 변화된 값을 state에 저장하기 위해 onChange 이벤트 핸들러를 등록합니다.
- **35번 줄 :** Picker 컴포넌트를 불러옵니다. state.textColor를 보여주기 위해 color attribute를 선언하고, 사용자가 선택한 색상을 state에 저장하기 위해 onChangeComplete 이벤트 핸들러를 등록합니다.
