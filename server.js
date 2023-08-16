'use strict';

const hof = require('hof');

const settings = require('./hof.settings');
const config = require('./config');

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

const app = hof(settings);

if (config.env === 'development' || config.env === 'test') {
    app.use('/test/bootstrap-session', (req, res) => {
      const appName = req.body.appName;
  
      if (!_.get(req, 'session[`hof-wizard-${appName}`]')) {
        if (!req.session) {
          throw new Error('Redis is not running!');
        }
  
        req.session[`hof-wizard-${appName}`] = {};
      }
  
      Object.keys(req.body.sessionProperties || {}).forEach(key => {
        req.session[`hof-wizard-${appName}`][key] = req.body.sessionProperties[key];
      });
  
      res.send('Session populate complete');
    });
  }

module.exports = app;
