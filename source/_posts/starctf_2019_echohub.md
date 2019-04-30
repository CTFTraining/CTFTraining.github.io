---
title: StarCTF 2019 996game
toc: true
date: 2019-05-01 04:14:44
categories: StarCTF
tags:
  - source code
  - php
  - create_function
  - php-fpm fastcgi
  - stream_socket
  - seed rand
---

# \*CTF(StarCTF) 2019 EchoHub

## 题目详情

-  *CTF(StarCTF) 2019 EchoHub
- **Source Code**

## 考点

- stack overflow
- php seed/rand
- php create_function
- bypass disable_function
- php-fpm fastcgi
- php stream_socket

## 启动

    docker-compose up -d
    open http://127.0.0.1:8081/

### Writeups

- [writeup.md](writeup.md)


## 复现说明及修改

该环境根据比赛过程显示的源码进行复现。

## 版权

该题目复现环境尚未取得主办方及出题人相关授权，如果侵权，请联系本人删除（ virink@outlook.com ）
