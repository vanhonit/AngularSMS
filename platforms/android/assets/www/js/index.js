/* Copyright (c) 2012-2014 Adobe Systems Incorporated. All rights reserved.

* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
* http://www.apache.org/licenses/LICENSE-2.0

* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var app = {
  // Application Constructor
  initialize: function() {
      this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    // document.addEventListener("showkeyboard", this.toggleKeyboard, false);
    // document.addEventListener("hidekeyboard", this.toggleKeyboard, false);
  },
  toggleKeyboard: function() {
    if ($(window).height() > 200) {
      $('body').height($(window).height());
    } else {
      $('body').height(210);
    }
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
      // app.receivedEvent('deviceready');
      $('#smmSendForm').submit(function() {
          sms.send($('.to').val(), $('#message').val(), '', function(result){console.log(result);}, function(error){console.log(error);})
          $('.to').val('');
          $('#message').val('');
          event.preventDefault();
      });
      // console.log(smsplugin);
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
  }
};
