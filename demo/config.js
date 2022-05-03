{
  "version": "1.0",
  "logger" : {
    "name" : "git2consul",
    "streams" : [{
      "level": "trace",
      "stream": "process.stdout"
    }]
  },
  "repos" : [{
    "name" : "sample_configuration",
    "url" : "https://github.com/DanielYWoo/git2consul.git",
    "expand_keys" : true,
    "source_root": "/demo/data",
    "mountpoint": "/git2consul",
    "branches" : ["master"],
    "hooks": [{
      "type" : "polling",
      "interval" : "1"
    }]
  }]
}
