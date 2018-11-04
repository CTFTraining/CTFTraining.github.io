---
title: 护网杯 2018 easy_laravel
toc: true
date: 2018-11-02 10:51:42
categories: Huwangbei
tags:
  - php
  - laravel
  - blade
  - phar
  - sql
  - unserialize
---

# 护网杯 2018 easy_laravel

## Link

[huwangbei_2018_easy_laravel](https://github.com/CTFTraining/huwangbei_2018_easy_laravel)

## 题目详情

- http://www.huwangbei.cn/
- 护网杯 2018 WEB (4) easy_laravel
- **PHP 代码审计**

### 提示

	+ blade
	+ pop chain

## 考点

- 代码审计
- 简单注入
- Laravel 框架 Auth、Blade模板
- 反序列化 [利用phar 拓展 php 反序列化漏洞攻击面](https://paper.seebug.org/680/)

## 启动

	docker-compose up -d
	open http://127.0.0.1:8081/

## 复现说明及修改

该环境根据 github 开源代码 `https://github.com/qqqqqqvq/easy_laravel` 及打比赛过程推理进行复现。

- 采用 sqlite 作为数据库，减小体积（不影响做题）
- 增加自动重置管理员密码脚本（虽然没什么卵用）
- 增加自动重置恢复缓存文件脚本

## 版权

该题目复现环境尚未取得主办方及出题人相关授权，如果侵权，请联系本人删除（ virink@outlook.com ）