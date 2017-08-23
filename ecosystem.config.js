module.exports = {
  apps: [{
    name: 'portfolio',
    script: './Server/server.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-34-210-81-52.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/portfolio.pem',
      ref: 'origin/master',
      repo: 'git@github.com:joeekimm/portfolio.git',
      path: '/home/ec2-user/portfolio',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
