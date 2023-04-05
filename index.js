/*jshint esversion: 8 */

const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
   'use strict';
    res.render('home.jinja2', {
      "title": "This is my super awesome Flask Jest example",
      "description": `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias animi consectetur cupiditate
        distinctio eligendi, est explicabo facere ipsam iusto magnam minus officia perferendis repellendus sequi sunt
        temporibus vel veniam.
      `,
      "nested": [
        {
          "1": "content item1",
        },
        {
          "2": "content item2",
        }
      ]
    });
});

module.exports = app;
