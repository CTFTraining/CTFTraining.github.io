---
title: 34C3CTF 2016 urlstorage
toc: true
date: 2019-05-01 04:08:06
categories: 34C3CTF
tags:
  - xss
  - csrf
  - css-steal-tooken
---

# 34C3CTF 2016 urlstorage

## 题目详情

- Finally someone has created a neat little urlstorage service.

## 提示

XSS and CSRF are not the only client-side attacks.

## 考点

- XSS
- CSRF
- CSS-STEAL-TOKEN

## 启动

    需要编辑*docker-compose.yml*文件里面的环境变量 DOMAIN,默认127.0.0.1作为 cookie 的domain.

    docker-compose up -d
    open http://127.0.0.1:80/ or http://34c3ctf2017.local.virzz.com/

## 版权

该题目复现环境尚未取得主办方及出题人相关授权，如果侵权，请联系本人删除（ virink@outlook.com ）