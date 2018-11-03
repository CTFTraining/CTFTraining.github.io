/**
 *
 * genReposIndex
 * 
 * A plugin for generate compose index
 *
 * Author : Virink
 * Date : 2018-11-03
 *
 * https://ctftraining.github.io/compose.json
 *
 */

const fs = require("hexo-fs");
const exec = require('child_process').exec;
const indexFile = "/tmp/compose.json";
const destFile = "./public/compose.json";
const lastCmd = `'{"query":"query{viewer{organization(login:\\"CTFTraining\\"){repositories(last:100){nodes{name,description}}}}}"}'`;
const patt = /\w+_\d{4}_\w+/i;
const orgReposAccessToken = process.env.OR_TOKEN;

var indexData = [];

function unique(arr) {
	var hash = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				++i;
			}
		}
		hash.push(arr[i]);
	}
	return hash;
}


hexo.extend.generator.register('genReposIndex', function(locals) {
	var self = this;
	exec(`curl https://ctftraining.github.io/compose.json -w %{http_code} -o ${indexFile} -k -s`, function(err, stdout, stderr) {
		if (!err) {
			indexData = stdout == "200" && fs.existsSync(indexFile) && JSON.parse(fs.readFileSync(indexFile)) || [];
			self.log.info(`Token : ${orgReposAccessToken}`);
			let curlCmd = "curl https://api.github.com/graphql " +
				`-H 'Authorization: bearer ${orgReposAccessToken}' ` +
				"-H 'Content-Type: application/json' --data-binary " + lastCmd;
			exec(curlCmd, function(err, stdout, stderr) {
				if (!err) {
					data = JSON.parse(stdout);
					data = data["data"]["viewer"]["organization"]["repositories"]["nodes"];
					var newData = [];
					data.forEach(function(node) {
						if (patt.test(node['name'])) {
							newData.push({
								"name": node['name'],
								"desc": node['description']
							});
						}
					});
					let resData = unique(indexData.concat(newData));
					self.log.info(`[*] Origin Count : ${indexData.length}`);
					fs.writeFileSync(destFile, JSON.stringify(resData));
					self.log.info(`[+] Add    Count : ${resData.length - indexData.length}`);
					self.log.info(`[*] Now    Count : ${resData.length}`);
				} else {
					self.log.warn(stderr);
				}
			});
		} else {
			self.log.warn(stderr);
		}
	});
	return {};
});