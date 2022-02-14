const string = `/**
 * 想要一只可爱的胖达吗？
 * 让我们来画一只吧！
 */

/**
 * 先画一个圆圆的脑袋
 */
.head .main,
.head .main::before,
.forehead {
  background: #efefef;
}

/**
 * 黑黑的鼻子
 */
 .snout {
  background: #efefef;
}

.snout::after {
  background: #000;
}

/**
 * 眼睛
 */

.eye {
  background: #000;
  border-radius: 60% 40% 50% 50% / 55% 55% 45% 45%;
  transform: rotate(15deg);
}

.eye::after {
  background: #efefef;
}

/**
 * 耳朵
 */

.ear-left, .ear-right {
  background: #000;
  border-radius: 55% 45%;
}


/**
 * 左脚
 */

.foot-left {
  background: #000;
  border-radius: 0.25rem 0 0 0.75rem;
}

/**
 * 右脚
 */

.foot-right {
  border-left: 1.95rem solid #000;
}

.foot-right::after {
  background: #000;
  border-radius: 40% 40% 0.1rem 0;
}

/**
 * 肩膀
 */

.shoulder {
  background: linear-gradient(108.93deg,
      #000 10.92%,
      #000 94.87%,
      rgba(100, 100, 100, 0) 94.88%);
}

.shoulder::before,
.shoulder::after {
  background-color: #000;
}


/**
 * 背部
 */

.back {
  background-color: #efefef;
  border-radius: 1.4rem 50% 50% 1.4rem;
}

.back::before,
.back::after {
  background-color: #efefef;
}

/**
 * 尾巴
 */

.tail {
  border-radius: 49%;
  background-color: #000;
  animation: wiggle 4s linear infinite;
}

/**
 * 这样就结束了吗？
 * 再来画一只蝴蝶吧
 */

.butterfly .main {
  border-top: 0.6rem solid #000;
}

.wing-right::before {
  border-right: 0.8rem solid hsla(51, 73%, 64%, 1);
}

.wing-left::before {
  border-left: 0.8rem solid hsla(51, 73%, 64%, 1);
}

.wing-right::after {
  border-left: 0.5rem solid hsla(51, 73%, 64%, 1);
}

.wing-left::after {
  border-right: 0.5rem solid hsla(51, 73%, 64%, 1);
}

/**
 * 吹一口气，让蝴蝶动起来吧~
 */


 .butterfly {
  animation: move 3s infinite alternate;
}

.wing-right,
.wing-left {
  animation: flap 0.35s ease-in-out infinite;
}

.butterfly-box {
  animation: box-move 3s ease-in-out infinite;
}

.butterfly-rotate {
  animation: rotate 3s -2.25s ease-in-out infinite;
}

.eye::after {
  animation: eye-move 3s 0.25s ease-in-out infinite;
}

/**
 * 好啦！
 * 将这只胖达送给你
 * 你喜欢吗？
 */
`

export default string
