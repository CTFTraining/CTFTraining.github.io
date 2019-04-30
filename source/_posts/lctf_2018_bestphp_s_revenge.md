---
title: LCTF 2018 bestphp's revenge
toc: true
date: 2019-05-01 04:14:44
categories: LCTF
tags:
  - session unserialize
  - call_user_func
  - SoapClient
---

# LCTF 2018 bestphp's revenge

## 题目详情

- https://lctf.pwnhub.cn
- LCTF 2018 Web bestphp's revenge
- **PHP 特性**

## 考点

+ session
    + session_start
    + serialize_handler
    + serialize/unserialize
+ call_user_func
+ SoapClient

## 启动

	docker-compose up -d
	open http://127.0.0.1:8081/

## 复现说明及修改

- 数组键名字符串化

## 版权

该题目复现环境尚已取得主办方及出题人相关授权

题目代码来源 [bestphp's revenge - LCTF 2018 Writeup -- Nu1L](https://xz.aliyun.com/t/3341#toc-22)

ps. 做题的时候忘记存了，emmmmm

