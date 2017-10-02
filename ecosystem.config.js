module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "./Server/server.js"
    }
  ],
  deploy: {
    production: {
      user: "ec2-user",
      host: "ec2-35-167-149-106.us-west-2.compute.amazonaws.com",
      key: "~/.ssh/portfolio.pem",
      ref: "origin/master",
      repo: "git@github.com:joeekimm/portfolio.git",
      path: "/home/ec2-user/portfolio",
      "post-deploy": "npm install && npm run compile && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
