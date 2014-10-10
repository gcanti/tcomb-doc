'use strict';
var t = require('tcomb');
var Value = require('./b').Value;

var Str = t.Str;
var Num = t.Num;
var Bool = t.Bool;
var subtype = t.subtype;
var union = t.union;
var maybe = t.maybe;
var list = t.list;
var struct = t.struct;
var enums = t.enums;
var tuple = t.tuple;
var dict = t.dict;

var Url = subtype(Str, function (s) {
    return s.indexOf('http://') === 0;
});

var Color = Str;

var Integer = subtype(Num, function (x) {
  return x % 1 === 0;
});

var User = struct({
  profile_sidebar_fill_color: Color,
  profile_sidebar_border_color: Color,
  profile_background_tile: Bool,
  name: Str,
  profile_image_url: Url,
  created_at: Str,
  location: Str,
  follow_request_sent: Bool,
  profile_link_color: Color,
  is_translator: Bool,
  id_str: Str,
  default_profile: Bool,
  contributors_enabled: Bool,
  favourites_count: Integer,
  url: maybe(Value),
  profile_image_url_https: Url,
  utc_offset: maybe(Value),
  id: Integer,
  profile_use_background_image: Bool,
  listed_count: Integer,
  profile_text_color: Color,
  lang: Str,
  followers_count: Integer,
  protected: Bool,
  notifications: Bool,
  profile_background_image_url_https: Url,
  profile_background_color: Color,
  verified: Bool,
  geo_enabled: Bool,
  time_zone: maybe(Value),
  description: Str,
  default_profile_image: Bool,
  profile_background_image_url: Url,
  statuses_count: Integer,
  friends_count: Integer,
  following: Bool,
  screen_name: Str,
}, 'User');

var Followers = struct({
  previous_cursor: Integer,
  previous_cursor_str: Str,
  next_cursor: Integer,
  users: list(User),
  next_cursor_str: Str,
}, 'Followers');

var Category = enums.of('audio video', 'Category');
var ForeignPrice = struct({ currency: Str, amount: Num }, 'ForeignPrice');
var Price = union([Num, ForeignPrice], 'Price');
Price.dispatch = function (x) {
  return Num.is(x) ? Num : ForeignPrice;
};

var Product = struct({
    name: Str,                  // required string
    desc: maybe(Str),           // optional string, can be null
    home: Url,                  // a subtype of a string
    shippings: list(Str),       // a list of shipping methods
    category: Category,         // enum, one of [audio, video]
    price: Price,               // a price (dollars) OR in another currency
    size: tuple([Num, Num], 'Size'),    // width x height
    warranty: dict(Num)         // a dictionary country -> covered years
}, 'Product');

module.exports = {
  Followers: Followers,
  Product: Product
};