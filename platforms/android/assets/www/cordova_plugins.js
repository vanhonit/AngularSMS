cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.sms/www/sms.js",
        "id": "org.apache.cordova.plugin.sms.Sms",
        "clobbers": [
            "window.sms"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.console": "0.2.10-dev",
    "org.apache.cordova.plugin.sms": "0.1.0"
}
// BOTTOM OF METADATA
});