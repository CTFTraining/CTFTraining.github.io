---
title: 第六届全国网络安全大赛 XDCTF 2015 线下某题
toc: true
date: 2019-05-01 04:14:44
categories: XDCTF
tags:
  - source code
  - sql injection
  - twice
---

# 第六届全国网络安全大赛 XDCTF 2015 线下某题

## 题目详情

- https://www.leavesongs.com/PENETRATION/some-sangebaimao-ctf-writeups.html
- **PHP 代码审计**

## 考点

- 代码审计
- 二次注入

## 启动

    docker-compose up -d
    open http://127.0.0.1:8081/

## 复现说明及修改

该环境根据 github 开源代码 `https://github.com/wonderkun/CTF_web/tree/master/web400-2(xdctf)` 进行复现。

- 为了兼容更高版本的php,我对源代码进行了修改,但是功能还是一样的. By wonderkun
- 搭建测试过程中，再次为兼容进行修改源代码。 By Virink

## 版权

该题目复现环境尚未取得主办方及出题人相关授权，如果侵权，请联系本人删除（ virink@outlook.com ）