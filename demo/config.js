{
  "version": "1.0",
  "logger": {
    "name": "git2consul",
    "streams": [{
      "level": "trace",
      "stream": "process.stdout"
    }]
  },
  "repos" : [{
    "name" : "mytest",
    "url" : "https://github.com/DanielYWoo/git2consul.git",
    "include_branch_name": false,
    "ignore_file_extension": true,
    "ignore_repo_name": true,
    "expand_keys": true,
    "expand_keys_diff": true,
    "source_root": "demo/data",
    "mountpoint": "git2consul",
    "branches": ["master"],
    "hooks": [{
      "type": "polling",
      "interval": "1"
    }]
  }]
}
