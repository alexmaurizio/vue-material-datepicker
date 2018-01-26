/*
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export default class Month {

  constructor(month, year) {
    this.start = moment([year, month]);
    this.end = this.start.clone().endOf('month');
    this.month = month;
    this.year = year;
  }

  getWeekStart() {
    return this.start.weekday();
  }

  getDays() {
    return Array.from(moment.range(this.start, this.end).by('days'));
  }

  getFormatted() {
    return this.start.format('MMMM YYYY');
  }

  getWeeks() {
    return this.end.week() - this.start.week() + 1;
  }

  getYears() {
    let start = moment([this.start.year() - 50, 0]);
    let end = moment([this.start.year() + 50, 0]);

    return Array.from(moment.range(start, end).by('years'));
  }
}

export function getWeekDays(lang) {
  let days = [];

  moment.locale(lang);

  for(let i = 0; i < 7; i++) days.push(moment().weekday(i).format('dd'));

  return days;
}
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getWeekDays = getWeekDays;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentRange = require('moment-range');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = (0, _momentRange.extendMoment)(_moment2.default);

var Month = function () {
  function Month(month, year) {
    _classCallCheck(this, Month);

    this.start = moment([year, month]);
    this.end = this.start.clone().endOf('month');
    this.month = month;
    this.year = year;
  }

  _createClass(Month, [{
    key: 'getWeekStart',
    value: function getWeekStart() {
      return this.start.weekday();
    }
  }, {
    key: 'getDays',
    value: function getDays() {
      return Array.from(moment.range(this.start, this.end).by('days'));
    }
  }, {
    key: 'getFormatted',
    value: function getFormatted() {
      return this.start.format('MMMM YYYY');
    }
  }, {
    key: 'getWeeks',
    value: function getWeeks() {
      return this.end.week() - this.start.week() + 1;
    }
  }, {
    key: 'getYears',
    value: function getYears() {
      var start = moment([this.start.year() - 50, 0]);
      var end = moment([this.start.year() + 50, 0]);

      return Array.from(moment.range(start, end).by('years'));
    }
  }]);

  return Month;
}();

exports.default = Month;
function getWeekDays(lang) {
  var days = [];

  moment.locale(lang);

  for (var i = 0; i < 7; i++) {
    days.push(moment().weekday(i).format('dd'));
  }return days;
}